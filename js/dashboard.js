// Dashboard data
const familyMembers = [
    { id: 1, name: 'John Smith', relationship: 'Son', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e' },
    { id: 2, name: 'Emma Johnson', relationship: 'Daughter', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }
];

const memories = [
    { id: 1, title: 'Family Vacation 2020', description: 'Beach trip to Hawaii', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
    { id: 2, title: 'Christmas Dinner', description: 'Everyone gathered at home', image: 'https://images.unsplash.com/photo-1543258103-a62bdc069871' }
];

const games = [
    { title: 'Memory Match', description: 'Match pairs of cards to train your memory', icon: '🧩' },
    { title: 'Picture Puzzle', description: 'Arrange pieces to complete the image', icon: '🎯' },
    { title: 'Word Association', description: 'Connect related words and concepts', icon: '🔤' }
];

// Dashboard functions
function toggleProfileMenu() {
    document.getElementById('profileDropdown').classList.toggle('hidden');
}

function handleProfileSettings() {
    // Implement profile settings functionality
    console.log('Profile settings clicked');
}

// Populate dashboard sections
function populateDashboard() {
    // Populate family gallery
    const familyGallery = document.getElementById('familyGallery');
    familyMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'gallery-item';
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <div class="gallery-info">
                <h3>${member.name}</h3>
                <p>${member.relationship}</p>
            </div>
        `;
        familyGallery.appendChild(memberCard);
    });

    // Populate memories gallery
    const memoriesGallery = document.getElementById('memoriesGallery');
    memories.forEach(memory => {
        const memoryCard = document.createElement('div');
        memoryCard.className = 'gallery-item';
        memoryCard.innerHTML = `
            <img src="${memory.image}" alt="${memory.title}">
            <div class="gallery-info">
                <h3>${memory.title}</h3>
                <p>${memory.description}</p>
            </div>
        `;
        memoriesGallery.appendChild(memoryCard);
    });

    // Populate games grid
    const gamesGrid = document.getElementById('gamesGrid');
    games.forEach(game => {
        const gameCard = document.createElement('button');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <span class="game-icon">${game.icon}</span>
            <h3>${game.title}</h3>
            <p>${game.description}</p>
        `;
        gamesGrid.appendChild(gameCard);
    });
}