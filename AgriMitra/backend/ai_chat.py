from flask import Flask, request, jsonify
from flask_cors import CORS
from groq import Groq
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

client = Groq(api_key=GROQ_API_KEY)
@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    question = data.get('message', '')
    language = data.get('language', 'en')
    
    # System prompt for farming assistant
    system_prompt = f"""You are AgriMitra, a farming assistant. Answer ONLY farming questions about:
- Tomato leaf diseases and treatments
- Fertilizers and pesticides  
- Market prices

Keep answers short and helpful (10-11 sentences max). Respond in {language} language.
If asked about non-farming topics, politely say you only assist with farming."""
    
    try:
        # Groq API call
        chat_completion = client.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": question}
            ],
            model="llama-3.3-70b-versatile",  # Free and fast
            temperature=0.7,
            max_tokens=300,
        )
        
        reply = chat_completion.choices[0].message.content
        return jsonify({"reply": reply})
        
    except Exception as e:
        return jsonify({"reply": f"🌾 Service busy. Please try again. Error: {str(e)}"})

if __name__ == '__main__':
    print("🚀 AgriBot running with Groq on port 5001")
    app.run(debug=True, port=5001)