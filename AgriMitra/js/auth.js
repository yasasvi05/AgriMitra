// Authentication JavaScript

// DOM Elements
let loginForm, registerForm, otpModal, closeBtn, verifyBtn, otpBoxes;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    loginForm = document.getElementById('loginForm');
    registerForm = document.getElementById('registerForm');
    otpModal = document.getElementById('otpModal');
    closeBtn = document.querySelector('.close');
    verifyBtn = document.querySelector('.verify-btn');
    otpBoxes = document.querySelectorAll('.otp-box');
    
    // Initialize forms
    initLoginForm();
    initRegisterForm();
    initOTPHandling();
    initSocialButtons();
    initPasswordToggles();
    initLanguageSelector();
    
    // Check if user is already logged in
    checkAuthStatus();
});

// Toggle password visibility
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    const type = input.type === 'password' ? 'text' : 'password';
    input.type = type;
    
    // Toggle eye icon
    const icon = event.target;
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
}

// Initialize login form
function initLoginForm() {
    if (!loginForm) return;
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username')?.value;
        const password = document.getElementById('password')?.value;
        const remember = document.querySelector('.remember-me input')?.checked;
        
        // Validation
        if (!username || !password) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (password.length < 6) {
            showNotification('Password must be at least 6 characters', 'error');
            return;
        }
        
        // Show loading
        showNotification('Logging in...', 'info');
        
        // Simulate API call
        setTimeout(() => {
            // Demo credentials (in real app, this would be server-side)
            if (username === 'demo' && password === 'demo123') {
                loginSuccess(username);
            } else if (username === 'farmer' && password === 'farmer123') {
                loginSuccess(username);
            } else if (username.length > 0 && password.length > 0) {
                // For demo, accept any valid input
                loginSuccess(username);
            } else {
                showNotification('Invalid username or password', 'error');
            }
        }, 1500);
    });
}

// Login success handler
function loginSuccess(username) {
    showNotification('Login successful! Redirecting...', 'success');
    
    // Store user info
    const userData = {
        username: username,
        name: username === 'demo' ? 'Demo Farmer' : 
              username === 'farmer' ? 'Rajesh Kumar' : username,
        loginTime: new Date().toISOString(),
        isLoggedIn: true
    };
    
    sessionStorage.setItem('agriMitraUser', JSON.stringify(userData));
    
    // Redirect to HOME.HTML (main application page)
    setTimeout(() => {
        window.location.href = 'home.html';  // Changed from index.html to home.html
    }, 2000);
}

// Initialize register form
function initRegisterForm() {
    if (!registerForm) return;
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullname = document.getElementById('fullname')?.value;
        const mobile = document.getElementById('mobile')?.value;
        const email = document.getElementById('email')?.value;
        const password = document.getElementById('password')?.value;
        const confirmPassword = document.getElementById('confirmPassword')?.value;
        const state = document.getElementById('state')?.value;
        const farmSize = document.querySelector('input[placeholder*="Farm Size"]')?.value;
        const mainCrop = document.querySelector('.farm-details select')?.value;
        const terms = document.querySelector('.terms input')?.checked;
        
        // Validation
        if (!fullname || !mobile || !password || !confirmPassword || !state || !terms) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }
        
        // Mobile validation (Indian mobile number)
        const mobileRegex = /^[6-9]\d{9}$/;
        if (!mobileRegex.test(mobile)) {
            showNotification('Please enter a valid 10-digit Indian mobile number', 'error');
            return;
        }
        
        // Email validation (if provided)
        if (email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
        }
        
        // Password validation
        if (password.length < 6) {
            showNotification('Password must be at least 6 characters', 'error');
            return;
        }
        
        if (password !== confirmPassword) {
            showNotification('Passwords do not match', 'error');
            return;
        }
        
        // Terms validation
        if (!terms) {
            showNotification('Please accept Terms & Conditions', 'error');
            return;
        }
        
        // Show loading
        showNotification('Creating your account...', 'info');
        
        // Simulate API call
        setTimeout(() => {
            showNotification('Registration successful! Please login.', 'success');
            
            // Store user data (demo only)
            const userData = {
                fullname,
                mobile,
                email,
                state,
                farmSize,
                mainCrop,
                registeredDate: new Date().toISOString()
            };
            localStorage.setItem('agriMitraNewUser', JSON.stringify(userData));
            
            // Redirect to login
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        }, 1500);
    });
}

// Initialize OTP handling
function initOTPHandling() {
    // OTP input handling
    if (otpBoxes.length > 0) {
        otpBoxes.forEach((box, index) => {
            box.addEventListener('keyup', (e) => {
                // Auto-focus next box
                if (e.key >= '0' && e.key <= '9' && index < otpBoxes.length - 1) {
                    otpBoxes[index + 1].focus();
                }
                
                // Handle backspace
                if (e.key === 'Backspace' && index > 0) {
                    setTimeout(() => otpBoxes[index - 1].focus(), 10);
                }
            });
            
            // Allow only numbers
            box.addEventListener('keypress', (e) => {
                if (isNaN(e.key)) {
                    e.preventDefault();
                }
            });
        });
    }
    
    // Verify OTP button
    if (verifyBtn) {
        verifyBtn.addEventListener('click', () => {
            let otp = '';
            otpBoxes.forEach(box => otp += box.value);
            
            if (otp.length === 6) {
                showNotification('Verifying OTP...', 'info');
                
                setTimeout(() => {
                    showNotification('OTP verified successfully!', 'success');
                    if (otpModal) otpModal.style.display = 'none';
                    
                    // Auto-login after OTP
                    setTimeout(() => {
                        window.location.href = 'dashboard.html';
                    }, 1500);
                }, 1500);
            } else {
                showNotification('Please enter complete 6-digit OTP', 'error');
            }
        });
    }
    
    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (otpModal) otpModal.style.display = 'none';
        });
    }
    
    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === otpModal) {
            otpModal.style.display = 'none';
        }
    });
}

// Initialize social login buttons
function initSocialButtons() {
    // Google login
    document.querySelectorAll('.social-btn.google').forEach(btn => {
        btn.addEventListener('click', () => {
            showNotification('Connecting to Google...', 'info');
            
            setTimeout(() => {
                showNotification('Google login successful!', 'success');
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1500);
            }, 1500);
        });
    });
    
    // Phone/OTP login
    document.querySelectorAll('.social-btn.phone').forEach(btn => {
        btn.addEventListener('click', () => {
            const phone = prompt('Enter your 10-digit mobile number:');
            
            if (phone) {
                const mobileRegex = /^[6-9]\d{9}$/;
                if (mobileRegex.test(phone)) {
                    showNotification('Sending OTP...', 'info');
                    
                    setTimeout(() => {
                        if (otpModal) otpModal.style.display = 'block';
                        showNotification('OTP sent to ' + phone, 'success');
                    }, 1500);
                } else {
                    showNotification('Please enter a valid mobile number', 'error');
                }
            }
        });
    });
}

// Initialize password toggle buttons
function initPasswordToggles() {
    document.querySelectorAll('.toggle-password').forEach(icon => {
        icon.addEventListener('click', function() {
            const input = this.previousElementSibling;
            if (input && input.type === 'password') {
                input.type = 'text';
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            } else if (input) {
                input.type = 'password';
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            }
        });
    });
}

// Initialize language selector
function initLanguageSelector() {
    const langSelect = document.getElementById('languageSelect');
    if (!langSelect) return;
    
    // Load saved language
    const savedLang = localStorage.getItem('agriMitraLang') || 'en';
    langSelect.value = savedLang;
    
    langSelect.addEventListener('change', function(e) {
        const lang = e.target.value;
        localStorage.setItem('agriMitraLang', lang);
        
        // Update page content based on language
        updateUILanguage(lang);
        showNotification(`Language changed to ${getLanguageName(lang)}`, 'success');
    });
}

// Get language name from code
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

// Update UI based on language (simplified version)
function updateUILanguage(lang) {
    // This would be expanded based on your translation object
    console.log('Language changed to:', lang);
}

// Check if user is authenticated
function checkAuthStatus() {
    // Skip check on login and register pages
    if (window.location.pathname.includes('login') || 
        window.location.pathname.includes('register')) {
        return;
    }
    
    const userData = sessionStorage.getItem('agriMitraUser');
    const remember = localStorage.getItem('agriMitraRemember');
    
    // If on dashboard but not logged in
    if (window.location.pathname.includes('dashboard') && !userData && !remember) {
        showNotification('Please login to continue', 'error');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    // Set icon
    let icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'error') icon = 'exclamation-circle';
    
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;
    
    // Style notification
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
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Logout function
function logout() {
    sessionStorage.removeItem('agriMitraUser');
    localStorage.removeItem('agriMitraRemember');
    showNotification('Logged out successfully', 'success');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

// Forgot password
function forgotPassword() {
    const email = prompt('Enter your registered email or mobile:');
    if (email) {
        showNotification('Reset link sent to ' + email, 'success');
    }
}

// Resend OTP
document.querySelector('.resend a')?.addEventListener('click', function(e) {
    e.preventDefault();
    showNotification('OTP resent successfully', 'success');
});

// Add CSS animations
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