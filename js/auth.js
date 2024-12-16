// Demo credentials
const DEMO_EMAIL = 'demo@example.com';
const DEMO_PASSWORD = 'demo123';

// Login modal functions
function openLoginModal() {
    document.getElementById('loginModal').classList.remove('hidden');
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.add('hidden');
    document.getElementById('errorMessage').classList.add('hidden');
    document.getElementById('loginForm').reset();
}

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
        // Hide login modal and show dashboard
        document.getElementById('loginModal').classList.add('hidden');
        document.querySelector('main').classList.add('hidden');
        document.querySelector('.header').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
        
        // Reset form and error message
        document.getElementById('loginForm').reset();
        errorMessage.classList.add('hidden');
    } else {
        errorMessage.textContent = 'Invalid credentials. Try demo@example.com / demo123';
        errorMessage.classList.remove('hidden');
    }
}

// Signup modal functions
// Open and Close Signup Modal
function openSignupModal() {
    document.getElementById('signupModal').classList.remove('hidden');
    document.getElementById('loginModal').classList.add('hidden');
}

function closeSignupModal() {
    document.getElementById('signupModal').classList.add('hidden');
    document.getElementById('signupForm').reset();
}

// Signup Form Submission (Demo Only)
function handleSignup(event) {
    event.preventDefault();

    const caretakerName = document.getElementById('caretakerName').value;
    const caretakerEmail = document.getElementById('caretakerEmail').value;
    const patientName = document.getElementById('patientName').value;
    const patientEmail = document.getElementById('patientEmail').value;
    const relation = document.getElementById('relation').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Demo success message
    alert(`Welcome, ${caretakerName}! Signup successful.`);
    closeSignupModal();
    openLoginModal();
}
