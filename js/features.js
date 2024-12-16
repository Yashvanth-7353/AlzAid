// Features data
const features = [
    {
        title: 'Photo Recognition',
        description: 'Instantly identify family members and important objects in photos with our AI-powered recognition system.',
        icon: '📸'
    },
    {
        title: 'Memory Reminders',
        description: 'Stay on track with gentle, personalized reminders for medications, appointments, and daily activities.',
        icon: '🔔'
    },
    {
        title: 'Cognitive Games',
        description: 'Engage your mind with fun, therapeutic games designed to maintain cognitive function and memory.',
        icon: '🎮'
    }
];

// Populate features grid
function populateFeatures() {
    const featuresGrid = document.getElementById('features-grid');
    features.forEach(feature => {
        const featureCard = document.createElement('div');
        featureCard.className = 'feature-card';
        featureCard.innerHTML = `
            <span class="feature-icon">${feature.icon}</span>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        featuresGrid.appendChild(featureCard);
    });
}