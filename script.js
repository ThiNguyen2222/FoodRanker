const dishesByCountry = {
    'USA': [ // 14 dishes
        { name: 'Barbeque', img: 'images/america/bbq.jpg' },
        { name: 'Burger', img: 'images/america/burger_fries.jpg' },
        { name: 'Chicken Sandwich', img: 'images/america/chicken_sandwich.jpg' },
        { name: 'Clam Chowder', img: 'images/america/clam_chowder.jpg' },
        { name: 'Corn Dog', img: 'images/america/corn_dog.jpg' },
        { name: 'Fried Chicken', img: 'images/america/fried_chicken.jpg' },
        { name: 'Hot Dog', img: 'images/america/hot_dog.jpg' },
        { name: 'Mac & Cheese', img: 'images/america/macaroni.jpg' },
        { name: 'Pancakes', img: 'images/america/pancake.jpg' },
        { name: 'Salad', img: 'images/america/salad.jpg' },
        { name: 'Steak', img: 'images/america/steak.jpg' },
        // Desserts
        { name: 'Apple Pie', img: 'images/america/apple_pie.jpg' },
        { name: 'Brownies', img: 'images/america/brownies.jpg' },
        { name: 'Chocolate Chip Cookie', img: 'images/america/cookies.jpg' },
    ],
    'Italy': [ // 14 dishes
        { name: 'Branzino', img: 'images/italy/branzino.jpg' }, 
        { name: 'Kampachi Crudo', img: 'images/italy/kampachi_crudo.jpg' },
        { name: 'Calamari Fritti', img: 'images/italy/calamari.jpg' },
        { name: 'Focaccia', img: 'images/italy/focaccia.jpg' }, 
        { name: 'Pizza', img: 'images/italy/pizza.jpg' }, 
        { name: 'Lasagna', img: 'images/italy/lasagna.jpg' }, 
        { name: 'Pasta', img: 'images/italy/pasta.jpg' },
        { name: 'Risotto', img: 'images/italy/shrimp_risotto.jpg' }, 
        { name: 'Spaghetti', img: 'images/italy/spaghetti.jpg' }, 
        // Desserts
        { name: 'Affogato', img: 'images/italy/affogato.jpg' },
        { name: 'Biscotti', img: 'images/italy/biscotti.jpg' },
        { name: 'Gelato', img: 'images/italy/gelato.jpg' },
        { name: 'Tiramisu', img: 'images/italy/tiramisu.jpg' },
        { name: 'Panna Cotta', img: 'images/italy/panna_cotta.jpg' }
    ],
    'Mexico': [ // 14 dishes
        { name: 'Birria', img: 'images/mexico/birria.jpg' }, 
        { name: 'Burritos', img: 'images/mexico/burrito.jpg' }, 
        { name: 'Ceviche', img: 'images/mexico/ceviche.jpg' }, 
        { name: 'Elote', img: 'images/mexico/elote.jpg' },
        { name: 'Enchiladas', img: 'images/mexico/enchiladas.jpg' },
        { name: 'Fajita', img: 'images/mexico/fajita.jpg' },
        { name: 'Huevo Ranchero', img: 'images/mexico/huevo_ranchero.jpg' },
        { name: 'Nachos', img: 'images/mexico/nachos.jpg' },
        { name: 'Pozole', img: 'images/mexico/pozole.jpg' }, 
        { name: 'Quesadilla', img: 'images/mexico/quesadilla.jpg' }, 
        { name: 'Tacos', img: 'images/mexico/tacos.jpg' }, 
        { name: 'Tamales', img: 'images/mexico/tamales.jpg' },
        // Desserts
        { name: 'Bunuelo', img: 'images/mexico/bunuelo.jpg' },
        { name: 'Churros', img: 'images/mexico/churros.jpg' }
    ],
    'India': [ // 14 dishes
        { name: 'Biryani', img: 'images/india/biryani.jpg' }, 
        { name: 'Boti Kabab', img: 'images/india/boti_kebab.jpg' },
        { name: 'Butter Chicken', img: 'images/india/butter_chicken.jpg' }, 
        { name: 'Chaat', img: 'images/india/chaat.jpg' }, 
        { name: 'Chicken Tikka Masala', img: 'images/india/chicken_tikka_masala.jpg' }, 
        { name: 'Halwa', img: 'images/india/halwa.jpg' },
        { name: 'Madras Curry', img: 'images/india/madras_curry.jpg' }, 
        { name: 'Masala Dosa', img: 'images/india/masala_dosa.jpg' }, 
        { name: 'Pani Puri', img: 'images/india/pani_puri.jpg' }, 
        { name: 'Paratha', img: 'images/india/paratha.jpg' },
        { name: 'Rogan Josh', img: 'images/india/rogan_josh.jpg' }, 
        { name: 'Samosa', img: 'images/india/samosa.jpg' },
        { name: 'Tandoori Chicken', img: 'images/india/tandoori_chicken.jpg' },
        // Desserts
        { name: 'Gulab Jamun', img: 'images/india/gulab_jamun.jpg' }
    ],
    'Japan': [ // 14 dishes selected, 19 dishes total
        { name: 'Bento', img: 'images/japan/bento.jpg' }, 
        { name: 'Katsu Curry', img: 'images/japan/katsu_curry.jpg' }, 
        { name: 'Okonomiyaki', img: 'images/japan/okonomiyaki.jpg' }, 
        { name: 'Onigiri', img: 'images/japan/onigiri.jpg' }, 
        { name: 'Ramen', img: 'images/japan/ramen.jpg' },
        { name: 'Shabu Shabu', img: 'images/japan/shabu.jpg' }, 
        { name: 'Soba', img: 'images/japan/soba.jpg' }, 
        { name: 'Sushi', img: 'images/japan/sushi.jpg' }, 
        { name: 'Takoyaki', img: 'images/japan/takoyaki.jpg' }, 
        { name: 'Teppanyaki', img: 'images/japan/teppanyaki.jpg' }, 
        { name: 'Udon', img: 'images/japan/udon.jpg' }, 
        { name: 'Yakiniku', img: 'images/japan/yakiniku.jpg' }, 
        // Desserts
        { name: 'Mochi', img: 'images/japan/mochi.jpg' }, 
        { name: 'Taiyaki', img: 'images/japan/taiyaki.jpg' }
        // { name: 'Gyoza', img: 'images/japan/gyoza.jpg' }, 
        // { name: 'Karaage Don', img: 'images/japan/karaage_don.jpg' }, 
        // { name: 'Tempura', img: 'images/japan/tempura.jpg' }, 
        // { name: 'Unagi Donburi', img: 'images/japan/unagi_donburi.jpg' }, 
        // { name: 'Yakitori', img: 'images/japan/yakitori.jpg' }, 
    ],
    'China': [ // 14 dishes
        { name: 'Chow Mein (Stir-Fried Noodles)', img: 'images/china/chow_mein.jpg' },
        { name: 'Congee (Porridge)', img: 'images/china/congee.jpg' },
        { name: 'Dandan Noodles', img: 'images/china/dandan_mian.jpg' },
        { name: 'Fried Rice', img: 'images/china/fried_rice.jpg' },
        { name: 'Hot Pot', img: 'images/china/hotpot.jpg' },
        { name: 'Jiangbing (Chinese Crepes)', img: 'images/china/jianbing.jpg' },
        { name: 'Kung Pao Chicken', img: 'images/china/kung_pao.jpg' }, 
        { name: 'Mapo Tofu', img: 'images/china/mapo_tofu.jpg' },
        { name: 'Shuizhu Niurou (Sichuan Braised Beef)', img: 'images/china/tanghulu.jpg' },
        { name: 'Sweet Sour Pork', img: 'images/china/sweet_sour_pork.jpg' },
        { name: 'Xiao Long Bao (Soup Dumpling)', img: 'images/china/xiaolongbao.jpg' },
        { name: 'Wonton', img: 'images/china/wonton.jpg' },
        // Desserts
        { name: 'Tanghulu', img: 'images/china/tanghulu.jpg' },
        { name: 'Tangyuan (Sesame Mochi Ball)', img: 'images/china/tangyuan.jpg' }
    ],
    'France': [ // 14 dishes slected, 17 total
        { name: 'Beef Stew', img: 'images/france/beef_stew.jpg' }, 
        { name: 'Bouillabaisse', img: 'images/france/bouillabaisse.jpg' }, 
        { name: 'Confit de Canard', img: 'images/france/confit_de_canard.jpg' }, 
        { name: 'Croissant', img: 'images/france/croissant.jpg' }, 
        { name: 'Escargot', img: 'images/france/escargot.jpg' }, 
        { name: 'Jambon Beurre', img: 'images/france/jambon_beurre.jpg' }, 
        { name: 'Pot Au Feu', img: 'images/france/pot_au_feu.jpg' }, 
        { name: 'Quiche Lorraine', img: 'images/france/quiche_lorraine.jpg' }, 
        { name: 'Ratatouille', img: 'images/france/ratatouille.jpg' },
        { name: 'Steak Frites', img: 'images/france/steak_frites.jpg' }, 
        { name: 'Steak Tartare', img: 'images/france/steak_tartare.jpg' }, 
        // Desserts
        { name: 'Crepes', img: 'images/france/crepes.jpg' }, 
        { name: 'Macarons', img: 'images/france/macarons.jpg' }, 
        { name: 'Souffle', img: 'images/france/souffle.jpg' },
        // { name: 'Onion Soup', img: 'images/france/onion_soup.jpg' }, 
        // { name: 'Creme Brulee', img: 'images/france/creme_brulee.jpg' }, 
        // { name: 'Tarte Tatin', img: 'images/france/tarte_tatin.jpg' }
    ],
    'Korea': [ // 14 dishes selected, 19 total
        { name: 'Bibim Naengmyeon (Spicy Cold Noodles)', img: 'images/korea/bibim_naengmyeon.jpg' }, 
        { name: 'Bibimbap (Korean Rice Bowl)', img: 'images/korea/bibimbap.jpg' }, 
        { name: 'Bossam (Boiled Pork Wrap)', img: 'images/korea/bossam.jpg' }, 
        { name: 'Gopchang (Small Intestines)', img: 'images/korea/gopchang.jpg' }, 
        { name: 'Japchae (Stir-Fried Noodles)', img: 'images/korea/japchae.jpg' },
        { name: 'Jjajangmyeon (Black Bean Noodles)', img: 'images/korea/jjajangmyeon.jpg' }, 
        { name: 'Korean Barbeque', img: 'images/korea/kbbq.jpg' }, 
        { name: 'Korean Fried Chicken', img: 'images/korea/kfried_chicken.jpg' }, 
        { name: 'Kimbap', img: 'images/korea/kimbap.jpg' }, 
        { name: 'Kimchi Fried Rice', img: 'images/korea/kimchi_fried_rice.jpg' }, 
        { name: 'Yangnyeom Gejang (Spicy Marinated Crab)', img: 'images/korea/seasoned_crab.jpg' }, 
        { name: 'Tofu Stew', img: 'images/korea/tofu_stew.jpg' }, 
        { name: 'Tteokbokki (Rice Cake)', img: 'images/korea/tteokbokki.jpg' }, 
        // Desserts
        { name: 'Bingsoo', img: 'images/korea/bingsoo.jpg' }, 
        // { name: 'Chimaek (Fried Chicken with Beer)', img: 'images/korea/chimaek.jpg' }, 
        // { name: 'Gamjatang (Pork Bone Soup)', img: 'images/korea/gamjatang.jpg' }, 
        // { name: 'Jeon', img: 'images/korea/jeon.jpg' }, 
        // { name: 'Kimchi Stew', img: 'images/korea/kimchi_stew.jpg' }, 
        // { name: 'Mandu', img: 'images/korea/mandu.jpg' }, 
    ],
    'Thailand': [ // 14 dishes
        { name: 'Sua Rong Hai (Crying Tiger)', img: 'images/thailand/crying_tiger.jpg' }, 
        { name: 'Kaeng Khiao Wan (Green Curry)', img: 'images/thailand/green_curry.jpg' }, 
        { name: 'Grilled Skewers', img: 'images/thailand/grilled_skewers.jpg' }, 
        { name: 'Kai Jeow (Thai Omelette)', img: 'images/thailand/kai_jeow.jpg' }, 
        { name: 'Khao Pad (Fried Rice)', img: 'images/thailand/khao_pad.jpg' }, 
        { name: 'Khao Soi (Curry Noodle Soup)', img: 'images/thailand/khao_soi.jpg' }, 
        { name: 'Pad See Ew (Stir-Fried Noodles)', img: 'images/thailand/pad_see_ew.jpg' }, 
        { name: 'Pad Thai', img: 'images/thailand/padthai.jpg' }, 
        { name: 'Kaeng Phet (Red Curry)', img: 'images/thailand/red_curry.jpg' }, 
        { name: 'Som Tam (Papaya Salad)', img: 'images/thailand/som_tam.jpg' }, 
        { name: 'Tom Yum Soup', img: 'images/thailand/tom_yum_goong.jpg' },
        { name: 'Yellow Curry', img: 'images/thailand/yellow_curry.jpg' }, 
        // Desserts
        { name: 'Mango Sticky Rice', img: 'images/thailand/mango_sticky_rice.jpg' }, 
        { name: 'Crispy Banana Roll', img: 'images/thailand/crispy_banana.jpg' },
    ],
    'Vietnam': [ // 14 dishes selected, 17 total
        { name: 'Banh Cuon', img: 'images/vietnam/banh_cuon.jpg' }, 
        { name: 'Banh Khot (Savory Mini Pancakes)', img: 'images/vietnam/banh_khot.jpg' }, 
        { name: 'Banh Mi (Vietnamese Sandwich)', img: 'images/vietnam/banh_mi.jpg' }, 
        { name: 'Banh Xeo (Vietnamese Crispy Crepes) ', img: 'images/vietnam/banh_xeo.jpg' }, 
        { name: 'Bo Ne (Sizzling Steak and Eggs) ', img: 'images/vietnam/bo_ne.jpg' }, 
        { name: 'Bun Bo Hue (Spicy Beef Noddle Soup)', img: 'images/vietnam/bun_bo_hue.jpg' }, 
        { name: 'Bun Rieu (Crab Noodle Soup)', img: 'images/vietnam/bun_rieu.jpg' }, 
        { name: 'Cha Gio (Eggrolls)', img: 'images/vietnam/cha_gio.jpg' }, 
        { name: 'Com Tam (Vietnamese Broken Rice) ', img: 'images/vietnam/com_tam.jpg' }, 
        { name: 'Goi Cuon (Spring Rolls)', img: 'images/vietnam/goi_cuon.jpg' }, 
        { name: 'Mi Quang (Vietnamese Turmeric Noodle Soup)', img: 'images/vietnam/mi_quang.jpg' }, 
        { name: 'Pho', img: 'images/vietnam/pho.jpg' }, 
        // Desserts
        { name: 'Che', img: 'images/vietnam/che.jpg' }, 
        { name: 'Xoi (Sticky Rice)', img: 'images/vietnam/xoi.jpg' }
        // { name: 'Bo Kho (Beef Stew)', img: 'images/vietnam/bo_kho.jpg' }, 
        // { name: 'Bun Cha (Vietnamese Meatball Noodles)', img: 'images/vietnam/bun_cha.jpg' }, 
        // { name: 'Hu Tieu ', img: 'images/vietnam/hu_tieu.jpg' }, 
    ]
};

let currentDishes = [];
let winners = [];
let roundsCompleted = 0;
let totalMatches;
let winningDishName = ''; // Store the name of the winning dish
let initialDishCount; // Add this to track the original number of dishes

document.getElementById('start-tournament').addEventListener('click', () => {
    const selectedCountries = Array.from(document.querySelectorAll('#country-selection input:checked'))
        .map(input => input.value);

    if (selectedCountries.length < 2) {
        alert("Please select at least two countries.");
        return;
    }

    // Combine dishes from the selected countries
    currentDishes = selectedCountries.flatMap(country => dishesByCountry[country]);

    // Store the initial number of dishes
    initialDishCount = currentDishes.length;

    // Calculate total matches more precisely
    // In a tournament, total matches = number of initial dishes - 1
    totalMatches = initialDishCount - 1;

    document.getElementById('country-selection').style.display = 'none';
    document.getElementById('progress-bar-container').style.display = 'block';
    document.getElementById('ranker-box').style.display = 'flex';

    resetTournament();
    displayDishes();
    updateProgressBar();
});

function displayDishes() {
    if (currentDishes.length === 1 && winners.length === 0) {
        // Final winner
        winningDishName = currentDishes[0].name; // Store the winning dish name
        document.getElementById('result').textContent = 'Winner: ' + winningDishName;
        document.getElementById('ranker-box').style.display = 'none';
        document.getElementById('next-round').style.display = 'none';
        document.getElementById('final-buttons').style.display = 'block';
        return;
    }

    if (currentDishes.length < 2) {
        // End of round, move winners to the next round
        if (winners.length > 1) {
            currentDishes = winners.slice(); // Move winners to currentDishes
            winners = [];
        }
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
        highlightSelectedDish(event.currentTarget);

        if (currentDishes.length === 0 && winners.length > 0) {
            currentDishes = winners.slice();
            winners = [];
        }

        // Increment rounds completed
        roundsCompleted++;
        updateProgressBar();
        displayDishes();
    });
});

function highlightSelectedDish(selectedElement) {
    document.querySelectorAll('.dish').forEach(dish => {
        dish.classList.remove('selected'); 
    });
    selectedElement.classList.add('selected'); 
}

function findDishByName(name) {
    return Object.values(dishesByCountry).flat().find(dish => dish.name === name);
}


function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    
    // Calculate the progress percentage
    const progressPercentage = Math.round((roundsCompleted / totalMatches) * 100);
    
    // Set the width of the progress bar without the text
    progressBar.style.width = `${progressPercentage}%`;

    // Remove text content
    progressBar.textContent = '';
}



function resetTournament() {
    winners = [];
    roundsCompleted = 0;
    winningDishName = '';
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('progress-bar').textContent = '0% Completed';
    document.getElementById('result').textContent = '';
    document.querySelectorAll('.dish').forEach(dish => dish.classList.remove('selected'));
}

document.getElementById('restart-tournament').addEventListener('click', () => {
    resetTournament();
    document.getElementById('final-buttons').style.display = 'none';
    document.getElementById('country-selection').style.display = 'block';
    document.getElementById('progress-bar-container').style.display = 'none'; // Hide progress bar container
    
    // Reset the country selection checkboxes
    document.querySelectorAll('#country-selection input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
});

// Get modal and button elements
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("close-modal");
const searchYelpButton = document.getElementById("search-yelp");
const yelpButton = document.getElementById("yelp-button"); // The button to open the modal

// Open modal when Yelp button is clicked
yelpButton.onclick = function () {
  modal.style.display = "block";
};

// Close modal when close button is clicked
closeModalButton.onclick = function () {
  modal.style.display = "none";
};

// Close modal if the user clicks anywhere outside the modal
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

searchYelpButton.onclick = function () {
    const location = document.getElementById("location").value.trim();
    const budget = document.getElementById("budget").value;
  
    // Ensure both fields are filled out
    if (location && budget && winningDishName) {
      // Encode the location and winning dish to ensure it's a valid URL format
      const encodedLocation = encodeURIComponent(location);
      const encodedDish = encodeURIComponent(winningDishName);
  
      // Yelp search URL format for the winning dish and location
      const yelpUrl = `https://www.yelp.com/search?find_desc=${encodedDish}&find_loc=${encodedLocation}`;
  
      // Redirect to Yelp
      window.location.href = yelpUrl;
  
      // Close the modal after redirect
      modal.style.display = "none";
    } else {
      // Show an error if the location, budget, or winning dish is missing
      alert("Please fill in all fields.");
    }
};
