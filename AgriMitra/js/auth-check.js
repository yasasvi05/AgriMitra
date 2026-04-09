// auth-check.js - WITH LANGUAGE PERSISTENCE
document.addEventListener('DOMContentLoaded', function() {
    console.log('Auth-check loaded');
    
    // Get saved language
    const savedLang = localStorage.getItem('agriMitraLang') || 'en';
    
    // Set language selector
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
        langSelect.value = savedLang;
    }
    
    updateProfileSection();
    updateProtectedLinks();
    
    // Listen for language changes
    if (langSelect) {
        langSelect.addEventListener('change', function(e) {
            const newLang = e.target.value;
            localStorage.setItem('agriMitraLang', newLang);
            updateProfileSection(); // Refresh profile section with new language
            showNotification(`Language changed to ${getLanguageName(newLang)}`, 'success');
        });
    }
    
    // Add click event listener to close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        
        dropdowns.forEach(dropdown => {
            if (!event.target.closest('.profile-dropdown')) {
                dropdown.classList.remove('show');
            }
        });
    });
});

// Helper function to get language name
function getLanguageName(lang) {
    const names = {
        'en': 'English',
        'hi': 'हिन्दी',
        'ta': 'தமிழ்',
        'te': 'తెలుగు',
        'kn': 'ಕನ್ನಡ',
        'mr': 'मराठी'
    };
    return names[lang] || 'English';
}

// Dropdown translations for all 6 languages
const dropdownTranslations = {
    en: {
        myProfile: "My Profile",
        myCrops: "My Crops",
        myTasks: "My Tasks",
        logout: "Logout"
    },
    hi: {
        myProfile: "मेरी प्रोफाइल",
        myCrops: "मेरी फसलें",
        myTasks: "मेरे कार्य",
        logout: "लॉगआउट"
    },
    ta: {
        myProfile: "எனது சுயவிவரம்",
        myCrops: "எனது பயிர்கள்",
        myTasks: "எனது பணிகள்",
        logout: "வெளியேறு"
    },
    te: {
        myProfile: "నా ప్రొఫైల్",
        myCrops: "నా పంటలు",
        myTasks: "నా పనులు",
        logout: "లాగ్అవుట్"
    },
    kn: {
        myProfile: "ನನ್ನ ಪ್ರೊಫೈಲ್",
        myCrops: "ನನ್ನ ಬೆಳೆಗಳು",
        myTasks: "ನನ್ನ ಕಾರ್ಯಗಳು",
        logout: "ಲಾಗ್ಔಟ್"
    },
    mr: {
        myProfile: "माझे प्रोफाइल",
        myCrops: "माझी पिके",
        myTasks: "माझी कामे",
        logout: "लॉगआउट"
    }
};

function updateProfileSection() {
    const profileSection = document.getElementById('profileSection');
    
    if (!profileSection) {
        console.error('Profile section not found!');
        return;
    }
    
    const userData = sessionStorage.getItem('agriMitraUser');
    
    if (userData) {
        const user = JSON.parse(userData);
        
        // Get current language from localStorage
        const currentLang = localStorage.getItem('agriMitraLang') || 'en';
        const t = dropdownTranslations[currentLang] || dropdownTranslations.en;
        
        profileSection.innerHTML = `
            <div class="profile-dropdown">
                <button class="profile-btn" onclick="toggleDropdown(event)">
                    <i class="fas fa-user-circle"></i>
                    <span class="profile-name">${user.name || 'Profile'}</span>
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="profile.html" class="dropdown-link">
                        <i class="fas fa-user"></i> ${t.myProfile}
                    </a>
                    <a href="mycrops.html" class="dropdown-link">
                        <i class="fas fa-seedling"></i> ${t.myCrops}
                    </a>
                    <a href="mytasks.html" class="dropdown-link">
                        <i class="fas fa-tasks"></i> ${t.myTasks}
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-link logout-link" onclick="logout(); return false;">
                        <i class="fas fa-sign-out-alt"></i> ${t.logout}
                    </a>
                </div>
            </div>
        `;
    } else {
        profileSection.innerHTML = `
            <div class="auth-buttons">
                <a href="index.html" class="btn-login">Login</a>
                <a href="register.html" class="btn-register">Register</a>
            </div>
        `;
    }
}

// Toggle dropdown on click
window.toggleDropdown = function(event) {
    event.stopPropagation();
    const dropdown = event.currentTarget.nextElementSibling;
    const allDropdowns = document.querySelectorAll('.dropdown-content');
    
    allDropdowns.forEach(d => {
        if (d !== dropdown) {
            d.classList.remove('show');
        }
    });
    
    dropdown.classList.toggle('show');
}

// Logout function
window.logout = function() {
    sessionStorage.removeItem('agriMitraUser');
    window.location.href = 'index.html';
    return false;
}

// Protect features that require login
function updateProtectedLinks() {
    const userData = sessionStorage.getItem('agriMitraUser');
    
    document.querySelectorAll('.feature-demo .demo-btn, .upload-area, .view-all-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (!userData) {
                e.preventDefault();
                alert('Please login to use this feature');
                window.location.href = 'index.html';
            }
        });
    });
    
    const voiceBtn = document.getElementById('startListening');
    if (voiceBtn) {
        voiceBtn.addEventListener('click', function(e) {
            if (!userData) {
                e.preventDefault();
                alert('Please login to use voice assistant');
                window.location.href = 'index.html';
            }
        });
    }
}

// Show notification function
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#4caf50' : 
                     type === 'error' ? '#f44336' : 
                     '#2196f3'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideInRight 0.3s;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-family: 'Poppins', sans-serif;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS styles
const styleElement = document.createElement('style');
styleElement.textContent = `
    /* Navbar Profile Dropdown Styles */
    .profile-section {
        display: flex;
        align-items: center;
    }
    
    .profile-dropdown {
        position: relative;
        display: inline-block;
    }
    
    .profile-btn {
        background: linear-gradient(135deg, #2e7d32, #4caf50);
        color: white;
        padding: 0.6rem 1.2rem;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-family: 'Poppins', sans-serif;
        font-size: 0.95rem;
        font-weight: 500;
        transition: all 0.3s;
    }
    
    .profile-btn:hover {
        background: linear-gradient(135deg, #1b5e20, #2e7d32);
        transform: translateY(-2px);
    }
    
    .profile-btn i {
        font-size: 1.1rem;
    }
    
    .profile-name {
        max-width: 120px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    .dropdown-content {
        display: none;
        position: absolute;
        right: 0;
        background: white;
        min-width: 220px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        border-radius: 12px;
        z-index: 1000;
        margin-top: 10px;
    }
    
    .dropdown-content.show {
        display: block;
    }
    
    .dropdown-content a {
        color: #263238;
        padding: 12px 16px;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 12px;
        transition: all 0.3s;
        cursor: pointer;
        border-bottom: 1px solid #f0f0f0;
        font-size: 0.95rem;
    }
    
    .dropdown-content a:last-child {
        border-bottom: none;
    }
    
    .dropdown-content a:hover {
        background: #f5f5f5;
        padding-left: 20px;
    }
    
    .dropdown-content i {
        width: 20px;
        color: #2e7d32;
    }
    
    .dropdown-divider {
        height: 1px;
        background: #e0e0e0;
        margin: 5px 0;
    }
    
    .logout-link {
        color: #f44336 !important;
    }
    
    .logout-link i {
        color: #f44336 !important;
    }
    
    /* Auth Buttons */
    .auth-buttons {
        display: flex;
        gap: 0.5rem;
    }
    
    .btn-login, .btn-register {
        padding: 0.6rem 1.5rem;
        border-radius: 50px;
        text-decoration: none;
        font-weight: 500;
        font-size: 0.95rem;
    }
    
    .btn-login {
        background: transparent;
        color: #2e7d32;
        border: 2px solid #2e7d32;
    }
    
    .btn-login:hover {
        background: #2e7d32;
        color: white;
    }
    
    .btn-register {
        background: linear-gradient(135deg, #2e7d32, #4caf50);
        color: white;
    }
    
    .btn-register:hover {
        transform: translateY(-2px);
    }
    
    /* Notification animations */
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
    
    /* Mobile Responsive */
    @media (max-width: 768px) {
        .profile-name {
            display: none;
        }
        
        .profile-btn {
            padding: 0.6rem 1rem;
        }
        
        .btn-login, .btn-register {
            padding: 0.4rem 1rem;
            font-size: 0.85rem;
        }
        
        .dropdown-content {
            min-width: 180px;
        }
    }
`;
document.head.appendChild(styleElement);