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

function sendMail(event) {
  event.preventDefault(); // Prevent the page from refreshing

  // Collect form data
  let parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
  };

  // Use EmailJS to send the email
  emailjs.send("service_e4shadm", "template_0wi5xev", parms)
      .then(() => {
          // On success, show an alert and reset the form
          alert("Email sent successfully!");
          document.getElementById("contactForm").reset();
      })
      .catch((error) => {
          // On failure, show an error alert
          alert("Failed to send the email. Please try again.");
          console.error("EmailJS Error:", error);
      });
}

document.addEventListener("DOMContentLoaded", () => {
  const dishes = {
    USA: [
      "Barbecue", "Burger", "Chicken Sandwich", "Clam Chowder",
      "Corn Dog", "Fried Chicken", "Hot Dog", "Mac & Cheese",
      "Pancakes","Salad","Steak","Apple Pie","Brownies",
      "Chocolate Chip Cookie"
    ],
    Italy: [
      "Branzino", "Kambachi Crudo", "Calamari Fritti", "Focaccia",
      "Lasagna", "Pizza", "Pasta", "Risotto", "Spaghetti",
      "Affogato","Biscotti", "Gelato", "Tiramisu","Panna Cotta"
    ],
    Mexico: [
      "Birria", "Burritos", "Ceviche", "Elote", "Enchiladas",
      "Fajita", "Huevo Ranchero", "Nachos", "Pozole", "Quesadilla",
      "Tacos", "Tamales", "Bunuelo", "Churros"
    ],
    India: [
      "Biryani", "Boti Kebab", "Butter Chicken", "Chaat",
      "Chicken Tikka Masala", "Halwa", "Madras Curry", "Masala Dosa",
      "Pani Puri", "Paratha", "Rogan Josh", "Samosa", "Tandoori Chicken",
      "Gulab Jamun"
    ],
    Japan: [
      "Bento", "Katsu Curry", "Okonomiyaki", "Onigiri", "Ramen",
      "Shabu Shabu", "Soba", "Sushi", "Takoyaki", "Teppenyaki",
      "Udon", "Yakiniku", "Mochi", "Taiyaki"
    ],
    China: [
      "Chow Mein (Stir-Fried Noodles)", "Congee (Porridge)", 
      "Dandan Noodles", "Fried Rice", "Hot Pot", "Jiangbing (Chinese Crepes)",
      "Kung Pao Chicken", "Mapo Tofu", "Shuizhu Niurou (Sichuan Braised Beef)",
      "Sweet Sour Pork", "Xiao Long Bao (Soup Dumpling)", "Wonton",
      "Tanghulu", "Tangyuan (Sesame Mochi Ball)"
    ],
    France: [
      "Beef Stew", "Bouillabaisse", "Confit de Canard", "Croissant",
      "Escargot", "Jambon Beurre", "Pot Au Feu", "Quiche Lorraine",
      "Ratatouille", "Steak Frites", "Steak Tartare", "Crepes", "Macarons",
      "Souffle"
    ],
    "South Korea": [
      "Bibim Naengmyeon (Spicy Cold Noodles)", "Bibimbap (Korean Rice Bowl)",
      "Bossam (Boiled Pork Wrap)", "Gopchang (Small Intestines)", "Japchae (Stir-Fried Noodles)",
      "Jjajangmyeon (Black Bean Noodles)", "Korean Barbeque", "Korean Fried Chicken",
      "Kimbap", "Kimchi Fried Rice", "Yangnyeom Gejang (Spicy Marinated Crab)",
      "Tofu Stew", "Tteokbokki (Rice Cake)", "Bingsoo"
    ],
    Thailand: [
      "Sua Rong Hai (Crying Tiger)", "Kaeng Khiao Wan (Green Curry)",
      "Grilled Skewers", "Kai Jeow (Thai Omelette)", "Khao Pad (Fried Rice)",
      "Khao Soi (Curry Noodle Soup)", "Pad Thai", "Kaeng Phet (Red Curry)", 
      "Som Tam (Papaya Salad)", "Tom Yum Soup", "Yellow Curry", 
      "Mango Sticky Rice", "Crispy Banana Roll"
    ],
    Vietnam: [
      "Banh Cuon", "Banh Khot (Savory Mini Pancakes)", 
      "Banh Mi (Vietnamese Sandwich)", "Banh Xeo (Vietnamese Crispy Crepes)",
      "Bo Ne (Sizzling Steak and Eggs)", "Bun Bo Hue (Spicy Beef Noodle Soup)",
      "Bun Rieu (Crab Noodle Soup)", "Cha Gio (Eggrolls)",
      "Com Tam (Vietnamese Broken Rice)", "Goi Cuon (Spring Rolls)", 
      "Mi Quang (Vietnamese Turmeric Noodle Soup)", "Pho", "Che", "Xoi (Sticky Rice)"
    ],
  };

  const countryBoxes = document.querySelectorAll(".country-box");
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");
  const dishesList = document.getElementById("dishes-list");

  countryBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      const country = box.dataset.country;
      popupTitle.textContent = country;
      dishesList.innerHTML = dishes[country]
        .map((dish) => `<li>${dish}</li>`)
        .join("");
      popup.classList.remove("hidden");
    });
  });

  // Close popup when clicking outside of the content
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.add("hidden");
    }
  });
});
