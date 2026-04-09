class LanguageSelector {
    constructor() {
        this.currentLanguage = localStorage.getItem('agribot_language') || 'en';
        this.languages = {
            en: {
                welcome: "Welcome! I'm AgriBot. Ask me anything about farming, crops, diseases, prices, or agricultural practices.",
                placeholder: "Type your question here...",
                send: "Send",
                voiceStatus: "Listening...",
                error: "Please select a language first"
            },
            hi: {
                welcome: "स्वागत है! मैं एग्रीबॉट हूँ। मुझसे खेती, फसलों, बीमारियों, कीमतों या कृषि प्रथाओं के बारे में कुछ भी पूछें।",
                placeholder: "अपना प्रश्न यहाँ टाइप करें...",
                send: "भेजें",
                voiceStatus: "सुन रहा हूँ...",
                error: "कृपया पहले भाषा चुनें"
            },
            mr: {
                welcome: "स्वागत आहे! मी अॅग्रीबॉट आहे. मला शेती, पिके, रोग, किंमती किंवा कृषी पद्धतींबद्दल काहीही विचारा.",
                placeholder: "तुमचा प्रश्न येथे टाइप करा...",
                send: "पाठवा",
                voiceStatus: "ऐकत आहे...",
                error: "कृपया प्रथम भाषा निवडा"
            },
            te: {
                welcome: "స్వాగతం! నేను అగ్రిబాట్ ని. వ్యవసాయం, పంటలు, వ్యాధులు, ధరలు లేదా వ్యవసాయ పద్ధతుల గురించి నన్ను ఏదైనా అడగండి.",
                placeholder: "మీ ప్రశ్నను ఇక్కడ టైప్ చేయండి...",
                send: "పంపండి",
                voiceStatus: "వింటున్నాను...",
                error: "దయచేసి మొదట భాషను ఎంచుకోండి"
            }
        };
    }

    getText(key) {
        return this.languages[this.currentLanguage][key] || this.languages.en[key];
    }

    setLanguage(lang) {
        if (this.languages[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('agribot_language', lang);
            return true;
        }
        return false;
    }

    showLanguageModal() {
        const modal = document.getElementById('languageModal');
        if (modal) {
            modal.style.display = 'block';
        }
    }

    hideLanguageModal() {
        const modal = document.getElementById('languageModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }
}

const languageSelector = new LanguageSelector();