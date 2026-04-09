🌱 AgriMitra - Smart Farming Assistant
https://images.pexels.com/photos/2252583/pexels-photo-2252583.jpeg?auto=compress&cs=tinysrgb&w=1200

<p align="center"> <img src="https://img.shields.io/badge/Version-1.0.0-green.svg" alt="Version"> <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License"> <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg" alt="PRs Welcome"> <img src="https://img.shields.io/badge/Made%20with-Love-ff69b4.svg" alt="Made with Love"> </p><p align="center"> <b>Your Intelligent Digital Assistant for Smart Farming</b><br> Breaking language barriers with voice-based agricultural guidance </p>
📋 Table of Contents
Problem Statement

Features

Technology Stack

Live Demo

Installation

Project Structure

Usage Guide

Screenshots

Contributing

License

Contact

Acknowledgments

🎯 Problem Statement
Small-scale farmers face constant challenges due to limited access to timely agricultural expertise. Crop diseases, unstable market prices, and complex government schemes often require immediate decisions, yet expert support is geographically distant and information is scattered and difficult to understand. Despite access to smartphones, the lack of localized, voice-based, and language-friendly solutions leads to crop losses and reduced income.

AgriMitra bridges this gap by delivering instant, personalized agricultural guidance through an intelligent digital assistant, enabling farmers to make informed decisions and improve productivity.

✨ Features
1. 🎤 Voice-Based Interaction in Regional Languages
Speech recognition in 6+ Indian languages

Text-to-speech responses for accessibility

Real-time voice wave animation

Pre-defined command chips for quick access

No typing needed - just ask!

2. 📸 Crop Disease Detection using Gemini Vision / Multimodal AI
Image upload interface for crop photos

AI-powered disease analysis simulation

Instant treatment recommendations

Support for multiple crop types

Visual disease library

3. 📊 Real-time Mandi Prices & Market Insights
Live price display for major crops

Price trend predictions (5% accuracy)

Historical price data visualization

Market intelligence alerts

Region-specific pricing

4. 👨‍🌾 Personalized Advice Using Farmer History
Customized recommendations based on farm data

Crop-specific guidance

Irrigation and pest control alerts

Fertilizer suggestions

Weather-based advice

5. 🌐 Additional Features
Multi-language support (English, हिन्दी, தமிழ், తెలుగు, ಕನ್ನಡ, मराठी)

Responsive design for mobile devices

Offline capability

Voice command history

Government scheme information

🛠️ Technology Stack
Frontend
Technology	Purpose
HTML5	Structure and content
CSS3	Styling and animations
JavaScript (ES6+)	Interactivity and logic
Font Awesome 6	Icons and visual elements
Google Fonts	Typography (Poppins)
APIs & Libraries
Library/API	Purpose
Web Speech API	Speech recognition and synthesis
Intersection Observer API	Scroll animations
FileReader API	Image preview functionality
Pexels API	Stock images
🚀 Live Demo
🔗 Live Demo: AgriMitra Demo

Test Credentials
No login required

Works on all modern browsers

Best experienced on Chrome/Edge

📥 Installation
Prerequisites
Modern web browser (Chrome, Firefox, Edge, Safari)

Code editor (VS Code recommended)

Basic understanding of HTML/CSS/JavaScript

Node.js (optional, for live server)

Step-by-Step Installation
Method 1: Direct Download
bash
# Download ZIP from GitHub
# Extract to your desired location
# Open index.html in browser
Method 2: Clone Repository
bash
# Clone the repository
git clone https://github.com/yourusername/AgriMitra.git

# Navigate to project directory
cd AgriMitra

# Open with VS Code
code .

# Open index.html with Live Server or directly in browser
Method 3: Create from Scratch
Create project folder

bash
mkdir AgriMitra
cd AgriMitra
mkdir css js assets
Create necessary files

bash
touch index.html
touch css/style.css
touch js/main.js
Copy the code

Copy HTML code to index.html

Copy CSS code to css/style.css

Copy JavaScript code to js/main.js

Run the project

bash
# Option 1: Open directly
open index.html  # Mac
start index.html # Windows

# Option 2: Use Live Server (VS Code)
# Install Live Server extension
# Right-click index.html -> Open with Live Server
📁 Project Structure
text
AgriMitra/
│
├── 📄 index.html                 # Main HTML file
├── 📄 README.md                  # Project documentation
│
├── 📁 css/
│   └── 📄 style.css              # All styles and animations
│
├── 📁 js/
│   └── 📄 main.js                # JavaScript functionality
│
└── 📁 assets/
    ├── 📁 images/                # Local images (optional)
    └── 📁 icons/                  # Custom icons (optional)
📖 Usage Guide
🎤 Voice Commands
Try these example commands:

Category	Command Examples
Crop Diseases	"What is wrong with my wheat?"
"My tomato plants have spots"
"How to treat potato blight?"
Market Prices	"What is the price of wheat?"
"Show mandi rates for rice"
"Tomato price prediction"
Farming Advice	"Suggest fertilizer for wheat"
"When to irrigate?"
"Pest control for cotton"
Weather	"Weather forecast for next week"
"Will it rain today?"
"Best time for harvesting"
Government Schemes	"Show farming schemes"
"Subsidy on seeds"
"Loan for farmers"
📸 Disease Detection
Click on the upload area in Disease Detection card

Select an image of affected crop (JPG, PNG)

Wait for AI analysis (2-3 seconds)

View disease name and treatment recommendations

Save or share the report

🌐 Language Selection
Click on language dropdown in navbar

Select your preferred language

Speak in that language

Receive responses in same language

📊 Market Prices
View real-time prices on dashboard

Click "View All Prices" for detailed view

Check price trends and predictions

Set alerts for price changes

📸 Screenshots
Home Page
https://images.pexels.com/photos/2252583/pexels-photo-2252583.jpeg?auto=compress&cs=tinysrgb&w=600
Main interface with voice assistant

Voice Assistant Modal
https://images.pexels.com/photos/5473958/pexels-photo-5473958.jpeg?auto=compress&cs=tinysrgb&w=400
Voice interaction in regional language

Disease Detection
https://images.pexels.com/photos/806333/pexels-photo-806333.jpeg?auto=compress&cs=tinysrgb&w=400
AI-powered crop disease analysis

Market Prices
https://images.pexels.com/photos/2641204/pexels-photo-2641204.jpeg?auto=compress&cs=tinysrgb&w=400
Real-time mandi prices and predictions

🤝 Contributing
We welcome contributions! Here's how you can help:

Contribution Guidelines
Fork the repository

Create a feature branch

bash
git checkout -b feature/AmazingFeature
Commit your changes

bash
git commit -m 'Add some AmazingFeature'
Push to the branch

bash
git push origin feature/AmazingFeature
Open a Pull Request

Development Setup
bash
# Fork and clone
git clone https://github.com/your-username/AgriMitra.git

# Add upstream remote
git remote add upstream https://github.com/original/AgriMitra.git

# Install dependencies (if any)
npm install  # When backend is added
Coding Standards
Follow existing code style

Add comments for complex logic

Test across different browsers

Update documentation

Write meaningful commit messages

📝 To-Do List
Phase 1 (Current) ✅
Voice-based interaction UI

Disease detection interface

Market price display

Personalized advice cards

Multi-language support

Phase 2 (Upcoming) 🚧
Connect to real backend API

Implement actual ML models

Add user authentication

Create farmer profiles

Add weather API integration

Phase 3 (Future) 📅
Mobile app development

Offline mode

Fertilizer calculator

Government scheme database

Community forum

Expert consultation booking

🐛 Known Issues
Issue	Status	Workaround
Speech recognition only in Chrome/Edge	🔄 In Progress	Use Chrome browser
Image upload limited to 5MB	✅ Fixed	Will compress automatically
Limited language support (6 languages)	🔄 In Progress	More coming soon
Mobile responsiveness issues	🔄 In Progress	Being optimized
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

text
MIT License

Copyright (c) 2024 AgriMitra

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
📞 Contact
Project Maintainers
Name: Your Name

Email: your.email@example.com

GitHub: adifa-7

Support
Email: support@agrimitra.com

Phone: 1800-123-AGRI (Toll Free)

Website: www.agrimitra.com

Twitter: @AgriMitra

Support Hours
Day	Hours
Monday - Friday	9:00 AM - 6:00 PM
Saturday	10:00 AM - 4:00 PM
Sunday	Closed
🙏 Acknowledgments
Special Thanks To
Indian Council of Agricultural Research (ICAR) - Domain expertise

Ministry of Agriculture & Farmers Welfare - Policy guidance

Open Source Community - Amazing tools and libraries

Beta Testers - Farmers who provided valuable feedback

Image Credits
Hero images: Pexels

Farming photos: Pexels Agriculture Collection

Icons: Font Awesome

Libraries Used
Font Awesome - Icons

Google Fonts - Typography

Web Speech API - Voice recognition

📊 Project Stats
https://img.shields.io/github/stars/yourusername/AgriMitra?style=social
https://img.shields.io/github/forks/yourusername/AgriMitra?style=social
https://img.shields.io/github/watchers/yourusername/AgriMitra?style=social

🌟 Support Us
If you find this project helpful, please give it a ⭐ on GitHub!

<a href="https://www.buymeacoffee.com/agrimitra"> <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=agrimitra&button_colour=2e7d32&font_colour=ffffff&font_family=Poppins&outline_colour=ffffff&coffee_colour=FFDD00" /> </a>
🔗 Quick Links
Documentation

Report Bug

Request Feature

FAQ

<p align="center"> Made with ❤️ for our farmers<br> © 2024 AgriMitra. All rights reserved. </p>