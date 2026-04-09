// Main JavaScript file for AgriMitra

// DOM Elements
const startListeningBtn = document.getElementById('startListening');
const voiceStatus = document.getElementById('voiceStatus');
const voiceModal = document.getElementById('voiceModal');
const closeBtn = document.querySelector('.close');
const voiceText = document.getElementById('voiceText');
const voiceResponse = document.getElementById('voiceResponse');
const languageSelect = document.getElementById('languageSelect');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const uploadArea = document.getElementById('uploadArea');
const cropImage = document.getElementById('cropImage');

// Language translations
// Language translations
const translations = {
    en: {
        // Navigation
        home: "Home",
        features: "Features",
        about: "About",
        contact: "Contact",
        login: "Login",
        register: "Register",
        
        // Hero Section
        heroTitle: "Your Smart",
        heroTitleHighlight: "Farming Assistant",
        heroDescription: "Instant agricultural expertise in your language. Detect diseases, check market prices, and get personalized advice - all through voice interaction.",
        
        // Voice Assistant
        askButton: "Ask AgriMitra",
        voiceStatus: "Tap to speak in your language",
        command1: "Wheat disease?",
        command2: "Tomato price",
        command3: "Fertilizer advice",
        
        // Features Section
        featuresTitle: "Smart Features for",
        featuresTitleHighlight: "Smart Farming",
        
        // Feature 1
        feature1Title: "Voice-Based Interaction",
        feature1Desc: "Speak in your regional language and get instant responses. No typing needed - just ask!",
        
        // Feature 2
        feature2Title: "Crop Disease Detection",
        feature2Desc: "Upload a photo of your crop and our AI will detect diseases and suggest treatments.",
        
        // Feature 3
        feature3Title: "Mandi Prices & Predictions",
        feature3Desc: "Real-time market prices and AI-powered price predictions for better selling decisions.",
        
        // Feature 4
        feature4Title: "Personalized Advice",
        feature4Desc: "Get customized recommendations based on your farm history and crop data.",
        
        // Upload Area
        uploadText: "Upload Photo",
        
        // Price Preview
        wheat: "Wheat",
        rice: "Rice",
        tomato: "Tomato",
        viewAll: "View All Prices →",
        
        // Advice Preview
        irrigation: "Irrigation needed in 2 days",
        pestControl: "Pest control recommended",
        viewAllAdvice: "View All Advice →",
        
        // About Section
        aboutTitle: "About AgriMitra",
        aboutDesc: "AgriMitra is an intelligent digital assistant designed specifically for small-scale farmers. We understand the challenges you face - from crop diseases to market uncertainties. Our mission is to bring expert agricultural guidance to your fingertips, in your language, through simple voice commands.",
        farmersHelped: "Farmers Helped",
        languages: "Languages",
        support: "Support",
        
        // Footer
        footerDesc: "Your smart farming assistant for better yields and higher profits.",
        quickLinks: "Quick Links",
        contactUs: "Contact Us",
        tollFree: "Toll Free: 1800-123-AGRI",
        email: "support@agrimitra.com",
        rights: "All rights reserved."
    },
    hi: {
        // Navigation
        home: "होम",
        features: "विशेषताएं",
        about: "हमारे बारे में",
        contact: "संपर्क",
        login: "लॉगिन",
        register: "रजिस्टर",
        
        // Hero Section
        heroTitle: "आपका स्मार्ट",
        heroTitleHighlight: "कृषि सहायक",
        heroDescription: "आपकी भाषा में तुरंत कृषि विशेषज्ञता। रोगों का पता लगाएं, बाजार मूल्य जांचें और व्यक्तिगत सलाह पाएं - सभी आवाज इंटरैक्शन के माध्यम से।",
        
        // Voice Assistant
        askButton: "एग्रीमित्र से पूछें",
        voiceStatus: "अपनी भाषा में बोलने के लिए टैप करें",
        command1: "गेहूं रोग?",
        command2: "टमाटर भाव",
        command3: "खाद सलाह",
        
        // Features Section
        featuresTitle: "स्मार्ट खेती के लिए",
        featuresTitleHighlight: "स्मार्ट सुविधाएं",
        
        // Feature 1
        feature1Title: "आवाज-आधारित बातचीत",
        feature1Desc: "अपनी क्षेत्रीय भाषा में बोलें और तुरंत जवाब पाएं। टाइपिंग की जरूरत नहीं - बस पूछें!",
        
        // Feature 2
        feature2Title: "फसल रोग का पता लगाना",
        feature2Desc: "अपनी फसल की फोटो अपलोड करें और हमारा AI रोगों का पता लगाकर उपचार सुझाएगा।",
        
        // Feature 3
        feature3Title: "मंडी भाव और भविष्यवाणी",
        feature3Desc: "वास्तविक समय बाजार मूल्य और बेहतर बिक्री निर्णयों के लिए AI-आधारित मूल्य भविष्यवाणी।",
        
        // Feature 4
        feature4Title: "व्यक्तिगत सलाह",
        feature4Desc: "अपने खेत के इतिहास और फसल डेटा के आधार पर कस्टमाइज़्ड सिफारिशें पाएं।",
        
        // Upload Area
        uploadText: "फोटो अपलोड करें",
        
        // Price Preview
        wheat: "गेहूं",
        rice: "चावल",
        tomato: "टमाटर",
        viewAll: "सभी भाव देखें →",
        
        // Advice Preview
        irrigation: "2 दिनों में सिंचाई आवश्यक",
        pestControl: "कीट नियंत्रण अनुशंसित",
        viewAllAdvice: "सभी सलाह देखें →",
        
        // About Section
        aboutTitle: "एग्रीमित्र के बारे में",
        aboutDesc: "एग्रीमित्र एक बुद्धिमान डिजिटल सहायक है जो विशेष रूप से छोटे किसानों के लिए डिज़ाइन किया गया है। हम आपके सामने आने वाली चुनौतियों को समझते हैं - फसल रोगों से लेकर बाजार की अनिश्चितताओं तक। हमारा मिशन सरल आवाज कमांड के माध्यम से विशेषज्ञ कृषि मार्गदर्शन आपकी उंगलियों पर, आपकी भाषा में लाना है।",
        farmersHelped: "किसान मदद पा चुके",
        languages: "भाषाएं",
        support: "सहायता",
        
        // Footer
        footerDesc: "बेहतर पैदावार और अधिक लाभ के लिए आपका स्मार्ट कृषि सहायक।",
        quickLinks: "त्वरित लिंक",
        contactUs: "संपर्क करें",
        tollFree: "टोल फ्री: 1800-123-AGRI",
        email: "support@agrimitra.com",
        rights: "सर्वाधिकार सुरक्षित।"
    },
    ta: {
        // Navigation
        home: "முகப்பு",
        features: "அம்சங்கள்",
        about: "எங்களைப் பற்றி",
        contact: "தொடர்பு",
        login: "உள்நுழைய",
        register: "பதிவு செய்க",
        
        // Hero Section
        heroTitle: "உங்கள் ஸ்மார்ட்",
        heroTitleHighlight: "விவசாய உதவியாளர்",
        heroDescription: "உங்கள் மொழியில் உடனடி விவசாய நிபுணத்துவம். நோய்களைக் கண்டறியவும், சந்தை விலைகளைச் சரிபார்க்கவும், தனிப்பயனாக்கப்பட்ட ஆலோசனையைப் பெறவும் - அனைத்தும் குரல் மூலம்.",
        
        // Voice Assistant
        askButton: "அக்ரிமித்ராவிடம் கேளுங்கள்",
        voiceStatus: "உங்கள் மொழியில் பேச தட்டவும்",
        command1: "கோதுமை நோய்?",
        command2: "தக்காளி விலை",
        command3: "உர ஆலோசனை",
        
        // Features Section
        featuresTitle: "ஸ்மார்ட் விவசாயத்திற்கான",
        featuresTitleHighlight: "ஸ்மார்ட் அம்சங்கள்",
        
        // Feature 1
        feature1Title: "குரல் அடிப்படையிலான தொடர்பு",
        feature1Desc: "உங்கள் பிராந்திய மொழியில் பேசுங்கள் மற்றும் உடனடி பதில்களைப் பெறுங்கள். தட்டச்சு தேவையில்லை - கேளுங்கள்!",
        
        // Feature 2
        feature2Title: "பயிர் நோய் கண்டறிதல்",
        feature2Desc: "உங்கள் பயிரின் புகைப்படத்தை பதிவேற்றவும், எங்கள் AI நோய்களைக் கண்டறிந்து சிகிச்சைகளை பரிந்துரைக்கும்.",
        
        // Feature 3
        feature3Title: "மண்டி விலைகள் மற்றும் கணிப்புகள்",
        feature3Desc: "நிகழ்நேர சந்தை விலைகள் மற்றும் சிறந்த விற்பனை முடிவுகளுக்கான AI-இயங்கும் விலை கணிப்புகள்.",
        
        // Feature 4
        feature4Title: "தனிப்பயனாக்கப்பட்ட ஆலோசனை",
        feature4Desc: "உங்கள் பண்ணை வரலாறு மற்றும் பயிர் தரவின் அடிப்படையில் தனிப்பயனாக்கப்பட்ட பரிந்துரைகளைப் பெறுங்கள்.",
        
        // Upload Area
        uploadText: "புகைப்படத்தை பதிவேற்றவும்",
        
        // Price Preview
        wheat: "கோதுமை",
        rice: "அரிசி",
        tomato: "தக்காளி",
        viewAll: "அனைத்து விலைகளையும் காண்க →",
        
        // Advice Preview
        irrigation: "2 நாட்களில் பாசனம் தேவை",
        pestControl: "பூச்சி கட்டுப்பாடு பரிந்துரைக்கப்படுகிறது",
        viewAllAdvice: "அனைத்து ஆலோசனைகளையும் காண்க →",
        
        // About Section
        aboutTitle: "அக்ரிமித்ரா பற்றி",
        aboutDesc: "அக்ரிமித்ரா என்பது சிறு விவசாயிகளுக்காக சிறப்பாக வடிவமைக்கப்பட்ட ஒரு அறிவார்ந்த டிஜிட்டல் உதவியாளர். பயிர் நோய்கள் முதல் சந்தை நிச்சயமற்ற தன்மைகள் வரை நீங்கள் எதிர்கொள்ளும் சவால்களை நாங்கள் புரிந்துகொள்கிறோம். எங்கள் நோக்கம், எளிய குரல் கட்டளைகள் மூலம் நிபுணர் விவசாய வழிகாட்டுதலை உங்கள் விரல் நுனியில், உங்கள் மொழியில் கொண்டு வருவதாகும்.",
        farmersHelped: "விவசாயிகள் உதவி பெற்றனர்",
        languages: "மொழிகள்",
        support: "ஆதரவு",
        
        // Footer
        footerDesc: "சிறந்த விளைச்சல் மற்றும் அதிக லாபத்திற்கான உங்கள் ஸ்மார்ட் விவசாய உதவியாளர்.",
        quickLinks: "விரைவு இணைப்புகள்",
        contactUs: "எங்களை தொடர்பு கொள்ள",
        tollFree: "டோல் ஃப்ரீ: 1800-123-AGRI",
        email: "support@agrimitra.com",
        rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
    },
    te: {
        // Navigation
        home: "హోమ్",
        features: "ఫీచర్లు",
        about: "మా గురించి",
        contact: "సంప్రదించండి",
        login: "లాగిన్",
        register: "నమోదు",
        
        // Hero Section
        heroTitle: "మీ స్మార్ట్",
        heroTitleHighlight: "వ్యవసాయ సహాయకుడు",
        heroDescription: "మీ భాషలో తక్షణ వ్యవసాయ నైపుణ్యం. వ్యాధులను గుర్తించండి, మార్కెట్ ధరలను తనిఖీ చేయండి మరియు వ్యక్తిగతీకరించిన సలహాలను పొందండి - అన్నీ వాయిస్ ద్వారా.",
        
        // Voice Assistant
        askButton: "అగ్రిమిత్రను అడగండి",
        voiceStatus: "మీ భాషలో మాట్లాడటానికి నొక్కండి",
        command1: "గోధుమ వ్యాధి?",
        command2: "టమాట ధర",
        command3: "ఎరువుల సలహా",
        
        // Features Section
        featuresTitle: "స్మార్ట్ వ్యవసాయం కోసం",
        featuresTitleHighlight: "స్మార్ట్ ఫీచర్లు",
        
        // Feature 1
        feature1Title: "వాయిస్ ఆధారిత సంభాషణ",
        feature1Desc: "మీ ప్రాంతీయ భాషలో మాట్లాడండి మరియు తక్షణ సమాధానాలు పొందండి. టైపింగ్ అవసరం లేదు - అడగండి!",
        
        // Feature 2
        feature2Title: "పంట వ్యాధి గుర్తింపు",
        feature2Desc: "మీ పంట ఫోటోను అప్‌లోడ్ చేయండి మరియు మా AI వ్యాధులను గుర్తించి చికిత్సలను సూచిస్తుంది.",
        
        // Feature 3
        feature3Title: "మండీ ధరలు & అంచనాలు",
        feature3Desc: "నిజ-సమయ మార్కెట్ ధరలు మరియు మెరుగైన అమ్మకాల నిర్ణయాల కోసం AI-ఆధారిత ధర అంచనాలు.",
        
        // Feature 4
        feature4Title: "వ్యక్తిగతీకరించిన సలహా",
        feature4Desc: "మీ వ్యవసాయ చరిత్ర మరియు పంట డేటా ఆధారంగా అనుకూలీకరించిన సిఫార్సులను పొందండి.",
        
        // Upload Area
        uploadText: "ఫోటో అప్‌లోడ్ చేయండి",
        
        // Price Preview
        wheat: "గోధుమ",
        rice: "వరి",
        tomato: "టమాట",
        viewAll: "అన్ని ధరలు చూడండి →",
        
        // Advice Preview
        irrigation: "2 రోజుల్లో నీటి తడి అవసరం",
        pestControl: "తెగులు నియంత్రణ సిఫార్సు చేయబడింది",
        viewAllAdvice: "అన్ని సలహాలు చూడండి →",
        
        // About Section
        aboutTitle: "అగ్రిమిత్ర గురించి",
        aboutDesc: "అగ్రిమిత్ర ప్రత్యేకంగా చిన్న-స్థాయి రైతుల కోసం రూపొందించబడిన ఒక తెలివైన డిజిటల్ సహాయకుడు. పంట వ్యాధుల నుండి మార్కెట్ అనిశ్చితుల వరకు మీరు ఎదుర్కొనే సవాళ్లను మేము అర్థం చేసుకున్నాము. సాధారణ వాయిస్ ఆదేశాల ద్వారా నిపుణుల వ్యవసాయ మార్గదర్శకత్వాన్ని మీ చేతివేళ్ల వద్ద, మీ భాషలో అందించడమే మా లక్ష్యం.",
        farmersHelped: "రైతులు సహాయం పొందారు",
        languages: "భాషలు",
        support: "మద్దతు",
        
        // Footer
        footerDesc: "మెరుగైన దిగుబడి మరియు అధిక లాభాల కోసం మీ స్మార్ట్ వ్యవసాయ సహాయకుడు.",
        quickLinks: "త్వరిత లింక్‌లు",
        contactUs: "మమ్మల్ని సంప్రదించండి",
        tollFree: "టోల్ ఫ్రీ: 1800-123-AGRI",
        email: "support@agrimitra.com",
        rights: "అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి."
    },
    kn: {
        // Navigation
        home: "ಮುಖಪುಟ",
        features: "ವೈಶಿಷ್ಟ್ಯಗಳು",
        about: "ನಮ್ಮ ಬಗ್ಗೆ",
        contact: "ಸಂಪರ್ಕ",
        login: "ಲಾಗಿನ್",
        register: "ನೋಂದಣಿ",
        
        // Hero Section
        heroTitle: "ನಿಮ್ಮ ಸ್ಮಾರ್ಟ್",
        heroTitleHighlight: "ಕೃಷಿ ಸಹಾಯಕ",
        heroDescription: "ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ತಕ್ಷಣದ ಕೃಷಿ ಪರಿಣತಿ. ರೋಗಗಳನ್ನು ಪತ್ತೆ ಮಾಡಿ, ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ವೈಯಕ್ತೀಕರಿಸಿದ ಸಲಹೆಯನ್ನು ಪಡೆಯಿರಿ - ಎಲ್ಲವೂ ಧ್ವನಿ ಮೂಲಕ.",
        
        // Voice Assistant
        askButton: "ಅಗ್ರಿಮಿತ್ರನನ್ನು ಕೇಳಿ",
        voiceStatus: "ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡಲು ಟ್ಯಾಪ್ ಮಾಡಿ",
        command1: "ಗೋಧಿ ರೋಗ?",
        command2: "ಟೊಮೇಟೊ ಬೆಲೆ",
        command3: "ಗೊಬ್ಬರ ಸಲಹೆ",
        
        // Features Section
        featuresTitle: "ಸ್ಮಾರ್ಟ್ ಕೃಷಿಗಾಗಿ",
        featuresTitleHighlight: "ಸ್ಮಾರ್ಟ್ ವೈಶಿಷ್ಟ್ಯಗಳು",
        
        // Feature 1
        feature1Title: "ಧ್ವನಿ ಆಧಾರಿತ ಸಂವಹನ",
        feature1Desc: "ನಿಮ್ಮ ಪ್ರಾದೇಶಿಕ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡಿ ಮತ್ತು ತಕ್ಷಣದ ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು ಪಡೆಯಿರಿ. ಟೈಪಿಂಗ್ ಅಗತ್ಯವಿಲ್ಲ - ಕೇಳಿ!",
        
        // Feature 2
        feature2Title: "ಬೆಳೆ ರೋಗ ಪತ್ತೆ",
        feature2Desc: "ನಿಮ್ಮ ಬೆಳೆಯ ಫೋಟೋವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು ನಮ್ಮ AI ರೋಗಗಳನ್ನು ಪತ್ತೆ ಮಾಡಿ ಚಿಕಿತ್ಸೆಗಳನ್ನು ಸೂಚಿಸುತ್ತದೆ.",
        
        // Feature 3
        feature3Title: "ಮಂಡಿ ಬೆಲೆಗಳು ಮತ್ತು ಮುನ್ನೋಟಗಳು",
        feature3Desc: "ನೈಜ-ಸಮಯದ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು ಮತ್ತು ಉತ್ತಮ ಮಾರಾಟ ನಿರ್ಧಾರಗಳಿಗಾಗಿ AI-ಚಾಲಿತ ಬೆಲೆ ಮುನ್ನೋಟಗಳು.",
        
        // Feature 4
        feature4Title: "ವೈಯಕ್ತೀಕರಿಸಿದ ಸಲಹೆ",
        feature4Desc: "ನಿಮ್ಮ ಫಾರ್ಮ್ ಇತಿಹಾಸ ಮತ್ತು ಬೆಳೆ ಡೇಟಾವನ್ನು ಆಧರಿಸಿ ಕಸ್ಟಮೈಸ್ ಮಾಡಿದ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ.",
        
        // Upload Area
        uploadText: "ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
        
        // Price Preview
        wheat: "ಗೋಧಿ",
        rice: "ಭತ್ತ",
        tomato: "ಟೊಮೇಟೊ",
        viewAll: "ಎಲ್ಲಾ ಬೆಲೆಗಳನ್ನು ನೋಡಿ →",
        
        // Advice Preview
        irrigation: "2 ದಿನಗಳಲ್ಲಿ ನೀರಾವರಿ ಅಗತ್ಯ",
        pestControl: "ಕೀಟ ನಿಯಂತ್ರಣ ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ",
        viewAllAdvice: "ಎಲ್ಲಾ ಸಲಹೆಗಳನ್ನು ನೋಡಿ →",
        
        // About Section
        aboutTitle: "ಅಗ್ರಿಮಿತ್ರ ಬಗ್ಗೆ",
        aboutDesc: "ಅಗ್ರಿಮಿತ್ರ ವಿಶೇಷವಾಗಿ ಸಣ್ಣ-ಪ್ರಮಾಣದ ರೈತರಿಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಬುದ್ಧಿವಂತ ಡಿಜಿಟಲ್ ಸಹಾಯಕವಾಗಿದೆ. ಬೆಳೆ ರೋಗಗಳಿಂದ ಮಾರುಕಟ್ಟೆ ಅನಿಶ್ಚಿತತೆಗಳವರೆಗೆ ನೀವು ಎದುರಿಸುವ ಸವಾಲುಗಳನ್ನು ನಾವು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇವೆ. ಸರಳ ಧ್ವನಿ ಆದೇಶಗಳ ಮೂಲಕ ತಜ್ಞರ ಕೃಷಿ ಮಾರ್ಗದರ್ಶನವನ್ನು ನಿಮ್ಮ ಬೆರಳ ತುದಿಗೆ, ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ತರುವುದು ನಮ್ಮ ಧ್ಯೇಯವಾಗಿದೆ.",
        farmersHelped: "ರೈತರು ಸಹಾಯ ಪಡೆದರು",
        languages: "ಭಾಷೆಗಳು",
        support: "ಬೆಂಬಲ",
        
        // Footer
        footerDesc: "ಉತ್ತಮ ಇಳುವರಿ ಮತ್ತು ಹೆಚ್ಚಿನ ಲಾಭಕ್ಕಾಗಿ ನಿಮ್ಮ ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಸಹಾಯಕ.",
        quickLinks: "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
        contactUs: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
        tollFree: "ಟೋಲ್ ಫ್ರೀ: 1800-123-AGRI",
        email: "support@agrimitra.com",
        rights: "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ."
    },
    mr: {
        // Navigation
        home: "मुखपृष्ठ",
        features: "वैशिष्ट्ये",
        about: "आमच्याबद्दल",
        contact: "संपर्क",
        login: "लॉगिन",
        register: "नोंदणी",
        
        // Hero Section
        heroTitle: "तुमचा स्मार्ट",
        heroTitleHighlight: "शेती सहाय्यक",
        heroDescription: "तुमच्या भाषेत त्वरित कृषी कौशल्य. रोग शोधा, बाजारभाव तपासा आणि वैयक्तिक सल्ला मिळवा - सर्व आवाजाद्वारे.",
        
        // Voice Assistant
        askButton: "अॅग्रीमित्राला विचारा",
        voiceStatus: "तुमच्या भाषेत बोलण्यासाठी टॅप करा",
        command1: "गहू रोग?",
        command2: "टोमॅटो भाव",
        command3: "खत सल्ला",
        
        // Features Section
        featuresTitle: "स्मार्ट शेतीसाठी",
        featuresTitleHighlight: "स्मार्ट वैशिष्ट्ये",
        
        // Feature 1
        feature1Title: "आवाज-आधारित संवाद",
        feature1Desc: "तुमच्या प्रादेशिक भाषेत बोला आणि त्वरित प्रतिसाद मिळवा. टायपिंगची गरज नाही - फक्त विचारा!",
        
        // Feature 2
        feature2Title: "पिकांचे रोग शोधा",
        feature2Desc: "तुमच्या पिकाचा फोटो अपलोड करा आणि आमचे AI रोग शोधून उपचार सुचवेल.",
        
        // Feature 3
        feature3Title: "मंडी भाव आणि अंदाज",
        feature3Desc: "रिअल-टाइम बाजारभाव आणि चांगल्या विक्री निर्णयांसाठी AI-आधारित किंमत अंदाज.",
        
        // Feature 4
        feature4Title: "वैयक्तिक सल्ला",
        feature4Desc: "तुमच्या शेती इतिहास आणि पिकांच्या डेटावर आधारित सानुकूलित शिफारसी मिळवा.",
        
        // Upload Area
        uploadText: "फोटो अपलोड करा",
        
        // Price Preview
        wheat: "गहू",
        rice: "तांदूळ",
        tomato: "टोमॅटो",
        viewAll: "सर्व भाव पहा →",
        
        // Advice Preview
        irrigation: "2 दिवसांत सिंचन आवश्यक",
        pestControl: "कीटक नियंत्रण शिफारस केलेले",
        viewAllAdvice: "सर्व सल्ला पहा →",
        
        // About Section
        aboutTitle: "अॅग्रीमित्र बद्दल",
        aboutDesc: "अॅग्रीमित्र हा एक बुद्धिमान डिजिटल सहाय्यक आहे जो विशेषतः लहान-शेतकऱ्यांसाठी डिझाइन केलेला आहे. पिकांचे रोग ते बाजारातील अनिश्चितता यापर्यंत तुम्हाला भेडसावणाऱ्या आव्हानांची आम्हाला जाणीव आहे. साध्या आवाज आदेशांद्वारे तज्ञ कृषी मार्गदर्शन तुमच्या बोटांच्या टोकावर, तुमच्या भाषेत आणणे हे आमचे ध्येय आहे.",
        farmersHelped: "शेतकऱ्यांना मदत",
        languages: "भाषा",
        support: "मदत",
        
        // Footer
        footerDesc: "चांगले उत्पन्न आणि अधिक नफा यासाठी तुमचा स्मार्ट शेती सहाय्यक.",
        quickLinks: "द्रुत लिंक्स",
        contactUs: "संपर्क साधा",
        tollFree: "टोल फ्री: 1800-123-AGRI",
        email: "support@agrimitra.com",
        rights: "सर्व हक्क राखीव."
    }
};

// Function to update UI based on selected language
function updateLanguage(lang) {
    const t = translations[lang] || translations.en;
    
    // Update navigation
    document.querySelectorAll('.nav-links a')[0].textContent = t.home;
    document.querySelectorAll('.nav-links a')[1].textContent = t.features;
    document.querySelectorAll('.nav-links a')[2].textContent = t.about;
    document.querySelectorAll('.nav-links a')[3].textContent = t.contact;
    
    // Update hero section
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        heroTitle.innerHTML = `${t.heroTitle} <span class="highlight">${t.heroTitleHighlight}</span>`;
    }
    
    const heroDesc = document.querySelector('.hero-content p');
    if (heroDesc) {
        heroDesc.textContent = t.heroDescription;
    }
    
    // Update voice assistant
    const askButton = document.querySelector('#startListening span');
    if (askButton) {
        askButton.textContent = t.askButton;
    }
    
    const statusElement = document.getElementById('voiceStatus');
    if (statusElement) {
        statusElement.textContent = t.voiceStatus;
    }
    
    // Update command chips
    const commandChips = document.querySelectorAll('.command-chip');
    if (commandChips.length >= 3) {
        commandChips[0].textContent = `"${t.command1}"`;
        commandChips[1].textContent = `"${t.command2}"`;
        commandChips[2].textContent = `"${t.command3}"`;
    }
    
    // Update features section title
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle) {
        sectionTitle.innerHTML = `${t.featuresTitle} <span>${t.featuresTitleHighlight}</span>`;
    }
    
    // Update feature cards
    const featureTitles = document.querySelectorAll('.feature-card h3');
    const featureDescs = document.querySelectorAll('.feature-card p');
    
    if (featureTitles.length >= 4) {
        featureTitles[0].textContent = t.feature1Title;
        featureTitles[1].textContent = t.feature2Title;
        featureTitles[2].textContent = t.feature3Title;
        featureTitles[3].textContent = t.feature4Title;
    }
    
    if (featureDescs.length >= 4) {
        featureDescs[0].textContent = t.feature1Desc;
        featureDescs[1].textContent = t.feature2Desc;
        featureDescs[2].textContent = t.feature3Desc;
        featureDescs[3].textContent = t.feature4Desc;
    }
    
    // Update upload area text
    const uploadSpan = document.querySelector('.upload-area span');
    if (uploadSpan) {
        uploadSpan.textContent = t.uploadText;
    }
    
    // Update price preview
    const cropPrices = document.querySelectorAll('.crop-price span:first-child');
    if (cropPrices.length >= 3) {
        cropPrices[0].textContent = t.wheat;
        cropPrices[1].textContent = t.rice;
        cropPrices[2].textContent = t.tomato;
    }
    
    const viewAllBtn = document.querySelector('.price-preview .view-all-btn');
    if (viewAllBtn) {
        viewAllBtn.textContent = t.viewAll;
    }
    
    // Update advice preview
    const adviceItems = document.querySelectorAll('.advice-item span');
    if (adviceItems.length >= 2) {
        adviceItems[0].textContent = t.irrigation;
        adviceItems[1].textContent = t.pestControl;
    }
    
    const viewAllAdviceBtn = document.querySelector('.advice-preview .view-all-btn');
    if (viewAllAdviceBtn) {
        viewAllAdviceBtn.textContent = t.viewAllAdvice;
    }
    
    // Update about section
    const aboutTitle = document.querySelector('.about h2');
    if (aboutTitle) {
        aboutTitle.textContent = t.aboutTitle;
    }
    
    const aboutDesc = document.querySelector('.about p');
    if (aboutDesc) {
        aboutDesc.textContent = t.aboutDesc;
    }
    
    // Update stats
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels.length >= 3) {
        statLabels[0].textContent = t.farmersHelped;
        statLabels[1].textContent = t.languages;
        statLabels[2].textContent = t.support;
    }
    
    // Update footer
    const footerDesc = document.querySelector('.footer-section p');
    if (footerDesc) {
        footerDesc.textContent = t.footerDesc;
    }
    
    const footerHeadings = document.querySelectorAll('.footer-section h3');
    if (footerHeadings.length >= 3) {
        footerHeadings[1].textContent = t.quickLinks;
        footerHeadings[2].textContent = t.contactUs;
    }
    
    const contactPs = document.querySelectorAll('.footer-section p');
    if (contactPs.length >= 3) {
        contactPs[1].innerHTML = `<i class="fas fa-phone"></i> ${t.tollFree}`;
        contactPs[2].innerHTML = `<i class="fas fa-envelope"></i> ${t.email}`;
    }
    
    const footerBottom = document.querySelector('.footer-bottom p');
    if (footerBottom) {
        footerBottom.textContent = `© 2024 AgriMitra. ${t.rights}`;
    }
}

// Language selection event
if (languageSelect) {
    languageSelect.addEventListener('change', function(e) {
        const lang = e.target.value;
        updateLanguage(lang);
        
        // Update speech recognition language
        if (recognition) {
    const langMap = {
        'en': 'en-US',
        'hi': 'hi-IN',
        'ta': 'ta-IN',
        'te': 'te-IN',
        'kn': 'kn-IN',
        'mr': 'mr-IN'
    };
    recognition.lang = langMap[lang] || 'en-US';
}
        
        showNotification(`Language changed to ${lang}`, 'success');
    });
}

// Speech Recognition Setup
let recognition = null;
let isListening = false;

if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    
    recognition.onstart = function() {
        isListening = true;
        voiceStatus.textContent = translations[languageSelect.value].voiceStatus;
        voiceModal.style.display = 'block';
        voiceText.textContent = 'Listening...';
    };
    
    recognition.onresult = function(event) {
        let interimTranscript = '';
        let finalTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                finalTranscript += transcript;
                processVoiceCommand(finalTranscript);
            } else {
                interimTranscript += transcript;
                voiceText.textContent = interimTranscript;
            }
        }
        
        if (finalTranscript) {
            voiceText.textContent = finalTranscript;
        }
    };
    
    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
        voiceStatus.textContent = 'Error occurred. Please try again.';
        voiceText.textContent = 'Sorry, I couldn\'t understand. Please try again.';
    };
    
    recognition.onend = function() {
        isListening = false;
        voiceStatus.textContent = translations[languageSelect.value].voiceStatus;
    };
} else {
    console.warn('Speech recognition not supported');
    if (startListeningBtn) {
        startListeningBtn.disabled = true;
        startListeningBtn.textContent = 'Voice not supported';
    }
}

// Event Listeners
if (startListeningBtn) {
    startListeningBtn.addEventListener('click', toggleListening);
}

if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        voiceModal.style.display = 'none';
        if (isListening) {
            stopListening();
        }
    });
}

window.addEventListener('click', function(event) {
    if (event.target === voiceModal) {
        voiceModal.style.display = 'none';
        if (isListening) {
            stopListening();
        }
    }
});

// Mobile menu toggle
if (mobileMenu) {
    mobileMenu.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Upload area click
if (uploadArea) {
    uploadArea.addEventListener('click', function() {
        cropImage.click();
    });
}

if (cropImage) {
    cropImage.addEventListener('change', function(e) {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            simulateDiseaseDetection(file);
        }
    });
}

// Command chips
document.querySelectorAll('.command-chip').forEach(chip => {
    chip.addEventListener('click', function() {
        const command = this.textContent;
        simulateVoiceCommand(command);
    });
});

// Functions
function toggleListening() {
    if (!recognition) {
        alert('Speech recognition is not supported in your browser. Please use Chrome or Edge.');
        return;
    }
    
    if (isListening) {
        stopListening();
    } else {
        startListening();
    }
}

function startListening() {
    try {
        recognition.start();
        startListeningBtn.classList.add('pulse-animation');
    } catch (error) {
        console.error('Failed to start recognition:', error);
    }
}

function stopListening() {
    if (recognition && isListening) {
        recognition.stop();
        startListeningBtn.classList.remove('pulse-animation');
    }
}

function processVoiceCommand(command) {
    console.log('Processing command:', command);
    voiceResponse.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    
    // Simulate AI processing
    setTimeout(() => {
        let response = '';
        command = command.toLowerCase();
        
        if (command.includes('wheat') || command.includes('disease') || command.includes('गेहूं') || command.includes('रोग')) {
            response = translations[languageSelect.value].command1 === 'Wheat disease?' ? 
                'Based on your description, it might be Wheat Rust. Recommended treatment: Apply fungicide Propiconazole @ 1ml/liter of water. Spray twice at 10-day intervals.' :
                'आपके विवरण के आधार पर, यह गेहूं का रतुआ हो सकता है। अनुशंसित उपचार: प्रोपिकोनाजोल फफूंदनाशक 1 मिली/लीटर पानी की दर से लगाएं। 10 दिनों के अंतराल पर दो बार छिड़काव करें।';
        } else if (command.includes('price') || command.includes('मूल्य') || command.includes('भाव')) {
            response = 'Current mandi prices: Wheat: ₹2425/quintal, Rice: ₹3100/quintal, Tomato: ₹1800/quintal. Prices are expected to rise by 5% next week.';
        } else if (command.includes('fertilizer') || command.includes('खाद') || command.includes('उर्वरक')) {
            response = 'Based on your wheat crop stage (45 days), apply Urea @ 50kg per acre. Soil test shows nitrogen deficiency.';
        } else {
            response = translations[languageSelect.value].command1 === 'Wheat disease?' ?
                'I understood your query. For specific information about crops, diseases, or market prices, please ask more specifically.' :
                'मैंने आपका प्रश्न समझ लिया। फसलों, बीमारियों या बाजार मूल्यों के बारे में विशिष्ट जानकारी के लिए, कृपया अधिक विशेष रूप से पूछें।';
        }
        
        voiceResponse.innerHTML = response;
        
        // Speak the response
        speakResponse(response);
    }, 2000);
}

function speakResponse(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        const langMap = {
            'en': 'en-US',
            'hi': 'hi-IN',
            'ta': 'ta-IN',
            'te': 'te-IN',
            'kn': 'kn-IN',
            'mr': 'mr-IN'
        };
        utterance.lang = langMap[languageSelect.value] || 'en-US';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
    }
}

function simulateVoiceCommand(command) {
    voiceModal.style.display = 'block';
    voiceText.textContent = command;
    processVoiceCommand(command);
}

function showVoiceDemo() {
    voiceModal.style.display = 'block';
    voiceText.textContent = translations[languageSelect.value].command1 === 'Wheat disease?' ? 
        'Try asking: "What is the price of wheat?" or "My tomato plants have spots"' :
        'पूछकर देखें: "गेहूं का भाव क्या है?" या "मेरे टमाटर के पौधों पर धब्बे हैं"';
}

function simulateDiseaseDetection(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        // Show preview in modal
        voiceModal.style.display = 'block';
        voiceText.textContent = translations[languageSelect.value].command1 === 'Wheat disease?' ?
            'Analyzing crop image...' :
            'फसल छवि का विश्लेषण किया जा रहा है...';
        voiceResponse.innerHTML = `<img src="${e.target.result}" style="max-width: 100%; max-height: 200px; margin-bottom: 1rem;">`;
        
        // Simulate AI analysis
        setTimeout(() => {
            const diseases = [
                'Early Blight detected on tomato leaves. Recommended: Apply Mancozeb @ 2g/liter water.',
                'Powdery Mildew detected. Recommended: Sulfur spray @ 3g/liter water.',
                'Leaf Rust detected. Recommended: Remove affected leaves and apply fungicide.',
                'No disease detected. Your crop appears healthy! Maintain current practices.'
            ];
            const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
            voiceResponse.innerHTML += `<p><strong>${translations[languageSelect.value].command1 === 'Wheat disease?' ? 'Analysis Result:' : 'विश्लेषण परिणाम:'}</strong> ${randomDisease}</p>`;
        }, 3000);
    };
    reader.readAsDataURL(file);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : '#2196f3'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideInRight 0.3s;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Active link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('AgriMitra initialized!');
    
    // Set initial language
    if (languageSelect) {
        updateLanguage('en');
    }
    
    // Add animation to features on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s';
        observer.observe(card);
    });
});

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);