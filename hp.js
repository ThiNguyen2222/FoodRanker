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

// Email form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh on submit

    // Form data to send
    const formData = new FormData(this);

    // Send data to the server
    fetch("mail.php", {
        method: "POST",
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        const successMessage = document.getElementById("successMessage");

        if (data.trim() === "success") { // Check if the response is "success"
            successMessage.textContent = "Your message has been sent successfully!";
            successMessage.style.display = "block";
            
            // Reset the form fields
            document.getElementById("contactForm").reset();
        } else {
            successMessage.textContent = "Error sending email.";
            successMessage.style.display = "block";
        }
    })
    .catch(error => {
        console.error("Error:", error);
        const successMessage = document.getElementById("successMessage");
        successMessage.textContent = "An error occurred. Please try again later.";
        successMessage.style.display = "block";
    });
});

// Select all "Show Dishes" buttons
const toggleDishesButtons = document.querySelectorAll('.toggle-dishes');

// Add a click event listener to each button
toggleDishesButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Find the dishes list within the same parent category box
    const categoryBox = this.parentElement;
    const dishesList = categoryBox.querySelector('.dishes-list');

    // Toggle the visibility of the dishes list
    if (dishesList.style.display === 'none' || dishesList.style.display === '') {
      dishesList.style.display = 'block';
      this.textContent = 'Hide Dishes'; // Change button text
    } else {
      dishesList.style.display = 'none';
      this.textContent = 'Show Dishes'; // Change button text back
    }
  });
});
