from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from PIL import Image
import io
import os

app = Flask(__name__)
CORS(app)

# Load model
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'tomato_model.h5')
model = tf.keras.models.load_model(MODEL_PATH)
print("✅ Model loaded!")
print("Model input shape:", model.input_shape)

# ALL 9 CLASSES - in the EXACT order your model was trained
CLASS_NAMES = [
    'Tomato___Early_blight',                              # 0
    'Tomato___Late_blight',                               # 1
    'Tomato___Leaf_Mold',                                 # 2
    'Tomato___Septoria_leaf_spot',                        # 3
    'Tomato___Spider_mites Two-spotted_spider_mite',      # 4
    'Tomato___Target_Spot',                               # 5
    'Tomato___Tomato_Yellow_Leaf_Curl_Virus',             # 6
    'Tomato___Tomato_mosaic_virus',                       # 7
    'Tomato___healthy'                                    # 8
]

# Disease information for ALL 9 diseases
DISEASE_INFO = {
    'Tomato___Early_blight': {
        'name': 'Early Blight',
        'causes': 'Caused by fungus Alternaria solani. Thrives in warm, humid conditions.',
        'precautions': 'Remove infected leaves. Water at base. Mulch to prevent soil splash.',
        'chemical_pesticides': 'Chlorothalonil, Mancozeb, Azoxystrobin',
        'organic_pesticides': 'Copper fungicide, Neem oil, Baking soda spray'
    },
    'Tomato___Late_blight': {
        'name': 'Late Blight',
        'causes': 'Caused by oomycete Phytophthora infestans. Favors cool, wet weather.',
        'precautions': 'Destroy infected plants. Avoid overhead watering. Use resistant varieties.',
        'chemical_pesticides': 'Mancozeb, Chlorothalonil, Metalaxyl',
        'organic_pesticides': 'Copper hydroxide, Bordeaux mixture'
    },
    'Tomato___Leaf_Mold': {
        'name': 'Leaf Mold',
        'causes': 'Caused by fungus Passalora fulva. High humidity and poor air circulation.',
        'precautions': 'Space plants properly. Water in morning. Remove infected leaves.',
        'chemical_pesticides': 'Chlorothalonil, Copper fungicides',
        'organic_pesticides': 'Neem oil, Sulfur spray, Baking soda solution'
    },
    'Tomato___Septoria_leaf_spot': {
        'name': 'Septoria Leaf Spot',
        'causes': 'Caused by fungus Septoria lycopersici. Spreads by splashing water.',
        'precautions': 'Remove lower leaves. Mulch. Avoid overhead watering. Rotate crops.',
        'chemical_pesticides': 'Chlorothalonil, Mancozeb, Copper fungicides',
        'organic_pesticides': 'Neem oil, Compost tea, Baking soda spray'
    },
    'Tomato___Spider_mites Two-spotted_spider_mite': {
        'name': 'Spider Mites',
        'causes': 'Tiny arachnids that thrive in hot, dry conditions.',
        'precautions': 'Spray water on leaves. Keep plants well-watered. Check under leaves weekly.',
        'chemical_pesticides': 'Abamectin, Bifenthrin',
        'organic_pesticides': 'Neem oil, Insecticidal soap, Rosemary oil'
    },
    'Tomato___Target_Spot': {
        'name': 'Target Spot',
        'causes': 'Caused by fungus Corynespora cassiicola. High humidity and warm temps.',
        'precautions': 'Improve air circulation. Avoid overhead watering. Remove infected leaves.',
        'chemical_pesticides': 'Chlorothalonil, Azoxystrobin',
        'organic_pesticides': 'Copper fungicide, Neem oil'
    },
    'Tomato___Tomato_Yellow_Leaf_Curl_Virus': {
        'name': 'Yellow Leaf Curl Virus',
        'causes': 'Caused by Begomovirus, transmitted by whiteflies.',
        'precautions': 'Control whitefly population. Use reflective mulches. Remove infected plants.',
        'chemical_pesticides': 'Imidacloprid, Buprofezin (for whiteflies)',
        'organic_pesticides': 'Neem oil, Yellow sticky traps, Insecticidal soap'
    },
    'Tomato___Tomato_mosaic_virus': {
        'name': 'Tomato Mosaic Virus',
        'causes': 'Caused by Tobamovirus. Spreads through contaminated tools, hands, and seeds.',
        'precautions': 'Use virus-free seeds. Wash hands before handling plants. Disinfect tools.',
        'chemical_pesticides': 'No chemical cure - remove infected plants immediately',
        'organic_pesticides': 'Milk spray (1:10 milk to water). Remove infected plants. Use resistant varieties.'
    },
    'Tomato___healthy': {
        'name': 'Healthy Plant',
        'causes': 'No disease detected! Your plant is healthy.',
        'precautions': 'Continue good farming practices: proper watering, fertilization, regular inspection.',
        'chemical_pesticides': 'No pesticides needed',
        'organic_pesticides': 'Use compost tea as preventive. Apply neem oil monthly.'
    }
}

def preprocess_image(image_bytes):
    """Prepare image for model"""
    img = Image.open(io.BytesIO(image_bytes))
    
    # Resize to 224x224 (your model's input size)
    img = img.resize((224, 224))
    
    # Convert to RGB
    if img.mode != 'RGB':
        img = img.convert('RGB')
    
    # Convert to array and normalize
    img_array = np.array(img, dtype=np.float32)
    img_array = img_array / 255.0
    
    # Add batch dimension
    img_array = np.expand_dims(img_array, axis=0)
    
    return img_array

@app.route('/predict', methods=['POST'])
def predict():
    try:
        if 'image' not in request.files:
            return jsonify({'error': 'No image provided'}), 400
        
        file = request.files['image']
        if file.filename == '':
            return jsonify({'error': 'No image selected'}), 400
        
        # Process image
        image_bytes = file.read()
        processed_image = preprocess_image(image_bytes)
        
        # Make prediction
        predictions = model.predict(processed_image)
        
        # Get top 3 predictions for debugging
        top_indices = np.argsort(predictions[0])[-3:][::-1]
        print("\n" + "="*50)
        print("🔬 PREDICTION RESULTS:")
        for idx in top_indices:
            confidence = float(predictions[0][idx]) * 100
            class_name = CLASS_NAMES[idx].replace('Tomato___', '').replace('_', ' ')
            print(f"  {class_name}: {confidence:.2f}%")
        print("="*50)
        
        # Get best prediction
        predicted_idx = np.argmax(predictions[0])
        confidence = float(predictions[0][predicted_idx]) * 100
        disease_class = CLASS_NAMES[predicted_idx]
        
        print(f"✅ SELECTED: {disease_class} with {confidence:.2f}%")
        
        # Get disease info
        info = DISEASE_INFO.get(disease_class, {
            'name': disease_class.replace('Tomato___', '').replace('_', ' '),
            'causes': 'Information not available',
            'precautions': 'Consult local agricultural expert',
            'chemical_pesticides': 'Consult local agricultural expert',
            'organic_pesticides': 'Consult local agricultural expert'
        })
        
        return jsonify({
            'success': True,
            'disease_name': info['name'],
            'accuracy': round(confidence, 2),
            'causes': info['causes'],
            'precautions': info['precautions'],
            'chemical_pesticides': info['chemical_pesticides'],
            'organic_pesticides': info['organic_pesticides']
        })
        
    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok', 'classes': len(CLASS_NAMES)})

if __name__ == '__main__':
    print("="*50)
    print("🌿 AgriMitra AI Server - ALL 9 DISEASES")
    print("="*50)
    print(f"Model input shape: {model.input_shape}")
    print(f"Number of classes: {len(CLASS_NAMES)}")
    print("\nDiseases that can be detected:")
    for i, name in enumerate(CLASS_NAMES):
        display_name = name.replace('Tomato___', '').replace('_', ' ')
        print(f"  {i}. {display_name}")
    print("\n🚀 Server running at http://localhost:5000")
    print("="*50)
    app.run(debug=True, port=5000)