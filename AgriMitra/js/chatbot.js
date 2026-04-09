class AgriBot {
    constructor() {
        this.recognition = null;
        this.isListening = false;
        this.initSpeechRecognition();
        this.initEventListeners();
        this.checkLanguageSelection();
    }

    initSpeechRecognition() {
        if ('webkitSpeechRecognition' in window) {
            this.recognition = new webkitSpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';
            
            this.recognition.onstart = () => {
                this.isListening = true;
                const voiceStatus = document.getElementById('voiceStatus');
                if (voiceStatus) {
                    voiceStatus.textContent = languageSelector.getText('voiceStatus');
                    voiceStatus.style.color = '#2ecc71';
                }
            };
            
            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                document.getElementById('userInput').value = transcript;
                this.sendMessage();
            };
            
            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                this.updateVoiceStatus('Error: ' + event.error, 'red');
                this.isListening = false;
            };
            
            this.recognition.onend = () => {
                this.isListening = false;
                this.updateVoiceStatus('', '');
            };
        } else {
            console.warn('Speech recognition not supported');
            const voiceBtn = document.getElementById('voiceInputBtn');
            if (voiceBtn) {
                voiceBtn.style.display = 'none';
            }
        }
    }

    updateVoiceStatus(message, color) {
        const voiceStatus = document.getElementById('voiceStatus');
        if (voiceStatus) {
            voiceStatus.textContent = message;
            voiceStatus.style.color = color;
        }
    }

    initEventListeners() {
        const sendBtn = document.getElementById('sendBtn');
        const userInput = document.getElementById('userInput');
        const voiceBtn = document.getElementById('voiceInputBtn');
        const changeLangBtn = document.getElementById('changeLanguageBtn');
        
        if (sendBtn) {
            sendBtn.addEventListener('click', () => this.sendMessage());
        }
        
        if (userInput) {
            userInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage();
                }
            });
        }
        
        if (voiceBtn) {
            voiceBtn.addEventListener('click', () => this.startVoiceInput());
        }
        
        if (changeLangBtn) {
            changeLangBtn.addEventListener('click', () => languageSelector.showLanguageModal());
        }
        
        // Language selection buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.changeLanguage(lang);
            });
        });
    }

    checkLanguageSelection() {
        if (!localStorage.getItem('agribot_language')) {
            languageSelector.showLanguageModal();
        } else {
            this.updateWelcomeMessage();
        }
    }

    changeLanguage(lang) {
        if (languageSelector.setLanguage(lang)) {
            languageSelector.hideLanguageModal();
            this.updateWelcomeMessage();
            this.updateInputPlaceholder();
            this.updateVoiceRecognitionLanguage(lang);
        }
    }

    updateWelcomeMessage() {
        const welcomeMessage = languageSelector.getText('welcome');
        const chatMessages = document.getElementById('chatMessages');
        
        // Clear existing messages except welcome
        while (chatMessages.children.length > 1) {
            chatMessages.removeChild(chatMessages.lastChild);
        }
        
        // Update welcome message
        const welcomeDiv = chatMessages.children[0];
        if (welcomeDiv) {
            welcomeDiv.textContent = welcomeMessage;
        }
    }

    updateInputPlaceholder() {
        const userInput = document.getElementById('userInput');
        if (userInput) {
            userInput.placeholder = languageSelector.getText('placeholder');
        }
        
        const sendBtn = document.getElementById('sendBtn');
        if (sendBtn) {
            sendBtn.textContent = languageSelector.getText('send');
        }
    }

    updateVoiceRecognitionLanguage(lang) {
        if (this.recognition) {
            const langMap = {
                'en': 'en-US',
                'hi': 'hi-IN',
                'mr': 'mr-IN',
                'te': 'te-IN'
            };
            this.recognition.lang = langMap[lang] || 'en-US';
        }
    }

    async sendMessage() {
        const userInput = document.getElementById('userInput');
        const message = userInput.value.trim();
        
        if (!message) {
            return;
        }
        
        // Add user message to chat
        this.addMessage(message, 'user');
        userInput.value = '';
        
        // Show typing indicator
        this.showTypingIndicator();
        
        try {
            // Get bot response
            const response = await agriBotAPI.getResponse(message, languageSelector.currentLanguage);
            
            // Remove typing indicator
            this.removeTypingIndicator();
            
            // Add bot response
            this.addMessage(response, 'bot');
            
            // Scroll to bottom
            this.scrollToBottom();
        } catch (error) {
            console.error('Error getting response:', error);
            this.removeTypingIndicator();
            this.addMessage('Sorry, I encountered an error. Please try again.', 'bot');
        }
    }

    startVoiceInput() {
        if (this.recognition && !this.isListening) {
            this.recognition.start();
        } else if (this.recognition && this.isListening) {
            this.recognition.stop();
        }
    }

    addMessage(message, type) {
        const chatMessages = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        this.scrollToBottom();
    }

    showTypingIndicator() {
        const chatMessages = document.getElementById('chatMessages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator';
        typingDiv.innerHTML = '<span>.</span><span>.</span><span>.</span>';
        typingDiv.id = 'typingIndicator';
        chatMessages.appendChild(typingDiv);
        this.scrollToBottom();
        
        // Add CSS for typing indicator
        if (!document.querySelector('#typingIndicatorStyle')) {
            const style = document.createElement('style');
            style.id = 'typingIndicatorStyle';
            style.textContent = `
                .typing-indicator span {
                    animation: blink 1.4s infinite both;
                    display: inline-block;
                    font-size: 20px;
                }
                .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
                .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
                @keyframes blink {
                    0%, 60%, 100% { opacity: 0; }
                    30% { opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }
    }

    removeTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    scrollToBottom() {
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new AgriBot();
});