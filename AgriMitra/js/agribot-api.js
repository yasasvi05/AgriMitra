class AgriBotAPI {
    constructor() {
        // Point to your Gemini backend
        this.apiEndpoint = 'http://localhost:5001/api/chat';
        this.useMock = false;
    }

    async getResponse(question, language) {
        if (this.useMock) {
            return this.getMockResponse(question, language);
        }
        
        try {
            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: question,
                    language: language
                })
            });
            
            const data = await response.json();
            return data.reply;
            
        } catch (error) {
            console.error('Error:', error);
            return this.getMockResponse(question, language);
        }
    }

    getMockResponse(question, language) {
        const lowerQuestion = question.toLowerCase();
        
        if (lowerQuestion.includes('tomato') || lowerQuestion.includes('टमाटर')) {
            return "🍅 For tomato diseases, upload a photo for AI detection!";
        } else if (lowerQuestion.includes('price') || lowerQuestion.includes('भाव')) {
            return "💰 Tomato: ₹1800-2000/quintal";
        } else {
            return "🌿 Ask me about tomato diseases, fertilizers, or market prices!";
        }
    }
}

const agriBotAPI = new AgriBotAPI();