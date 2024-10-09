// Array of image paths
const images = [
    'images/homepage/banh_mi.jpg',
    'images/homepage/burger.jpg',
    'images/homepage/curry.jpg',
    'images/homepage/dumpling.jpg',
    'images/homepage/korean.jpg',
    'images/homepage/meat.jpg',
    'images/homepage/pizza.jpg',
    'images/homepage/taco.jpg'
];

// Function to set a random background image
function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * images.length);
    document.body.style.backgroundImage = `url(${images[randomIndex]})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
}

// Call the function when the page loads
window.onload = function() {
    setRandomBackground();
    showContent('home'); // Set 'home' as the default visible content
};

// Function to show the selected content and hide others
function showContent(section) {
    const contentBoxes = document.querySelectorAll('.content-box');
    contentBoxes.forEach(box => {
        box.style.display = 'none'; // Hide all content boxes
    });
    document.getElementById(section).style.display = 'block'; // Show selected content
}
