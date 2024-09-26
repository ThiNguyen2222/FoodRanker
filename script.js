const dishesByCountry = {
    'USA': [{ name: 'Burger', img: 'burger.jpg' }, { name: 'Hot Dog', img: 'hotdog.jpg' }],
    'Italy': [{ name: 'Pizza', img: 'pizza.jpg' }, { name: 'Pasta', img: 'pasta.jpg' }],
    'Mexico': [{ name: 'Tacos', img: 'tacos.jpg' }, { name: 'Guacamole', img: 'guacamole.jpg' }],
    'India': [{ name: 'Biryani', img: 'biryani.jpg' }, { name: 'Samosa', img: 'samosa.jpg' }],
    'Japan': [{ name: 'Sushi', img: 'sushi.jpg' }, { name: 'Ramen', img: 'ramen.jpg' }]
};

let currentDishes = [];
let winners = [];
let roundsCompleted = 0;
let totalRounds = 0;

document.getElementById('start-tournament').addEventListener('click', () => {
    const selectedCountries = Array.from(document.querySelectorAll('#country-selection input:checked'))
        .map(input => input.value);

    if (selectedCountries.length === 0) {
        alert("Please select at least one country.");
        return;
    }

    currentDishes = selectedCountries.flatMap(country => dishesByCountry[country]);
    totalRounds = Math.ceil(currentDishes.length / 2);

    document.getElementById('country-selection').style.display = 'none';
    document.getElementById('progress-bar-container').style.display = 'block';
    document.getElementById('ranker-box').style.display = 'flex';

    displayDishes();
    updateProgressBar();
});

function displayDishes() {
    if (currentDishes.length < 2) {
        if (currentDishes.length === 1) {
            document.getElementById('result').textContent = 'Winner: ' + currentDishes[0].name;
        } else if (winners.length === 1) {
            document.getElementById('result').textContent = 'Winner: ' + winners[0].name;
        }
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

        if (currentDishes.length === 0 && winners.length > 1) {
            currentDishes = winners;
            winners = [];
        }

        roundsCompleted++;
        updateProgressBar();
        displayDishes();
    });
});

function findDishByName(name) {
    return Object.values(dishesByCountry).flat().find(dish => dish.name === name);
}

function updateProgressBar() {
    const percentage = Math.min(100, (roundsCompleted / totalRounds) * 100);
    document.getElementById('progress-bar').style.width = percentage + '%';
}
