const dishesByCountry = {
    'USA': [{ name: 'Burger', img: 'burger.jpg' }, { name: 'Hot Dog', img: 'hotdog.jpg' }],
    'Italy': [{ name: 'Pizza', img: 'pizza.jpg' }, { name: 'Pasta', img: 'pasta.jpg' }],
    'Mexico': [{ name: 'Tacos', img: 'tacos.jpg' }, { name: 'Guacamole', img: 'guacamole.jpg' }],
    'India': [{ name: 'Biryani', img: 'biryani.jpg' }, { name: 'Samosa', img: 'samosa.jpg' }],
    'Japan': [{ name: 'Sushi', img: 'Japan/sushi.jpg' }, { name: 'Ramen', img: 'ramen.jpg' }],
    'China': [{ name: 'Kung Pao Chicken', img: 'kungpao.jpg' }, { name: 'Spring Rolls', img: 'springrolls.jpg' }], // Added China
    'France': [{ name: 'Croissant', img: 'croissant.jpg' }, { name: 'Ratatouille', img: 'ratatouille.jpg' }], // Added France
    'Korea': [{ name: 'Kimchi', img: 'kimchi.jpg' }, { name: 'Bibimbap', img: 'bibimbap.jpg' }], // Added Korea
    'Thailand': [{ name: 'Pad Thai', img: 'padthai.jpg' }, { name: 'Tom Yum', img: 'tomyum.jpg' }], // Added Thailand
    'Vietnam': [{ name: 'Pho', img: 'pho.jpg' }, { name: 'Banh Mi', img: 'banhmi.jpg' }] // Added Vietnam
};


let currentDishes = [];
let winners = [];
let roundsCompleted = 0;
let totalRounds = 0

document.getElementById('start-tournament').addEventListener('click', () => {
    const selectedCountries = Array.from(document.querySelectorAll('#country-selection input:checked'))
        .map(input => input.value);

    if (selectedCountries.length < 2) {
        alert("Please select at least two countries.");
        return;
    }

    currentDishes = selectedCountries.flatMap(country => dishesByCountry[country]);
    totalRounds = Math.ceil(currentDishes.length / 2);

    document.getElementById('country-selection').style.display = 'none';
    document.getElementById('progress-bar-container').style.display = 'block';
    document.getElementById('ranker-box').style.display = 'flex';

    resetTournament();
    displayDishes();
    updateProgressBar();
});

function resetTournament() {
    roundsCompleted = 0;
    winners = [];
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('result').textContent = '';
}

function displayDishes() {
    if (currentDishes.length < 2) {
        const finalWinner = currentDishes.length === 1 ? currentDishes[0] : winners[0];
        document.getElementById('result').textContent = 'Winner: ' + finalWinner.name;
        document.getElementById('ranker-box').style.display = 'none';
        document.getElementById('next-round').style.display = 'none';
        return;
    }

    const dish1 = currentDishes.shift();
    const dish2 = currentDishes.shift();

    document.getElementById('dish1-img').src = dish1.img;
    document.getElementById('dish1-name').textContent = dish1.name;
    document.getElementById('dish1').dataset.dish = dish1.name;

    document.getElementById('dish2-img').src = dish2.img;
    document.getElementById('dish2-name').textContent = dish2.name;
    document.getElementById('dish2').dataset.dish = dish2.name;
}

document.querySelectorAll('.dish').forEach(dishElement => {
    dishElement.addEventListener('click', (event) => {
        const selectedDishName = event.currentTarget.dataset.dish;
        const selectedDish = findDishByName(selectedDishName);
        winners.push(selectedDish);
        highlightSelectedDish(event.currentTarget); // Highlight the selected dish

        if (currentDishes.length === 0 && winners.length > 1) {
            currentDishes = winners;
            winners = [];
        }

        roundsCompleted++;
        updateProgressBar();
        displayDishes();
    });
});

function highlightSelectedDish(selectedElement) {
    document.querySelectorAll('.dish').forEach(dish => {
        dish.classList.remove('selected'); // Remove highlight from all
    });
    selectedElement.classList.add('selected'); // Highlight the selected one
}

function findDishByName(name) {
    return Object.values(dishesByCountry).flat().find(dish => dish.name === name);
}

function updateProgressBar() {
    const percentage = Math.min(100, (roundsCompleted / totalRounds) * 100);
    document.getElementById('progress-bar').style.width = percentage + '%';
}
