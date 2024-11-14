// Create an array of football matches
const matches = [
    { 
        id: 1,
        homeTeam: 'Real Madrid',
        awayTeam: 'Barcelona',
        date: '2022-10-05',
        venue: 'Santiago Bernabeu'
    },
    { 
        id: 2,
        homeTeam: 'Manchester United',
        awayTeam: 'Liverpool',
        date: '2022-10-10',
        venue: 'Old Trafford'
    },
    // Add more matches here...
];

// Function to generate the HTML for each match card
function generateMatchCard(match) {
    const card = document.createElement('div');
    card.classList.add('match-card');

    const title = document.createElement('h2');
    title.textContent = `${match.homeTeam} vs ${match.awayTeam}`;
    card.appendChild(title);

    const date = document.createElement('p');
    date.textContent = `Date: ${match.date}`;
    card.appendChild(date);

    const venue = document.createElement('p');
    venue.textContent = `Venue: ${match.venue}`;
    card.appendChild(venue);

    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Buy Ticket';
    card.appendChild(button);

    return card;
}

// Function to render the matches on the page
function renderMatches() {
    const matchesContainer = document.getElementById('matches-container2');

    matches.forEach(function(match) {
        const matchCard = generateMatchCard(match);
        matchesContainer.appendChild(matchCard);
    });
}

// Call the renderMatches function to display the matches
renderMatches();
