const dishesByCountry = {
    'USA': ['Burger', 'Hot Dog', 'Mac and Cheese'],
    'Italy': ['Pizza', 'Pasta', 'Gelato'],
    'Mexico': ['Tacos', 'Enchiladas', 'Guacamole'],
    'India': ['Biryani', 'Butter Chicken', 'Samosa'],
    'Japan': ['Sushi', 'Ramen', 'Tempura']
};

let currentDishes = [];
let winningDishes = [];

// Start the tournament based on selected countries
document.getElementById('start-tournament').addEventListener('click', () => {
    const selectedCountries = Array.from(document.querySelectorAll('#country-selection input:checked'))
        .map(input => input.value);

    if (selectedCountries.length === 0) {
        alert("Please select at least one country.");
        return;
    }

    currentDishes = selectedCountries.flatMap(country => dishesByCountry[country]);
    document.getElementById('country-selection').style.display = 'none';
    document.getElementById('dish-container').style.display = 'flex';
    displayDishes();
});

// Function to display two random dishes
function displayDishes() {
    if (currentDishes.length < 2) {
        document.getElementById('result').textContent = 'Winner: ' + currentDishes[0];
        document.getElementById('next-round').style.display = 'none';
        return;
    }

    const randomIndex1 = Math.floor(Math.random() * currentDishes.length);
    let randomIndex2;

    do {
        randomIndex2 = Math.floor(Math.random() * currentDishes.length);
    } while (randomIndex1 === randomIndex2);

    document.getElementById('dish1').textContent = currentDishes[randomIndex1];
    document.getElementById('dish2').textContent = currentDishes[randomIndex2];

    currentDishes = currentDishes.filter((_, index) => index !== randomIndex1 && index !== randomIndex2);
}

// Handle dish selection
document.getElementById('dish-container').addEventListener('click', (event) => {
    if (event.target.classList.contains('dish')) {
        const selectedDish = event.target.textContent;
        winningDishes.push(selectedDish);
        document.getElementById('next-round').style.display = 'block';
    }
});

// Go to the next round
document.getElementById('next-round').addEventListener('click', () => {
    if (winningDishes.length > 0) {
        currentDishes.push(winningDishes[winningDishes.length - 1]);
        winningDishes = [];
        displayDishes();
    }
});

// Hide dish container initially
document.getElementById('dish-container').style.display = 'none';
