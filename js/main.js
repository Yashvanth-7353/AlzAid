// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    // Populate features section
    populateFeatures();
    
    // Populate dashboard content
    populateDashboard();
    
    // Close profile dropdown when clicking outside
    document.addEventListener('click', (event) => {
        const profileMenu = document.querySelector('.profile-menu');
        const profileDropdown = document.getElementById('profileDropdown');
        
        if (!profileMenu.contains(event.target) && !profileDropdown.classList.contains('hidden')) {
            profileDropdown.classList.add('hidden');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Link login modal to signup
    const signupButton = document.createElement('button');
    signupButton.className = 'secondary-btn';
    signupButton.textContent = 'Sign Up';
    signupButton.onclick = openSignupModal;

    const loginForm = document.getElementById('loginForm');
    loginForm.parentElement.appendChild(signupButton);
});
