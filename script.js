const dishesByCountry = {
    'USA': [
        { name: 'Barbeque', img: 'images/america/bbq.jpg' },
        { name: 'Burger', img: 'images/america/burger_fries.jpg' },
        { name: 'Chicken Sandwich', img: 'images/america/chicken_sandwich.jpg' },
        { name: 'Fried Chicken', img: 'images/america/fried_chicken.jpg' },
        { name: 'Hot Dog', img: 'images/america/hot_dog.jpg' },
        { name: 'Salad', img: 'images/america/salad.jpg' },
        { name: 'Steak', img: 'images/america/steak.jpg' }
    ],
    'Italy': [
        { name: 'Focaccia', img: 'images/italy/focaccia.jpg' }, 
        { name: 'Pizza', img: 'images/italy/pizza.jpg' }, 
        { name: 'Lasagna', img: 'images/italy/lasagna.jpg' }, 
        { name: 'Pasta', img: 'images/italy/pasta.jpg' },
        { name: 'Risotto', img: 'images/italy/shrimp_risotto.jpg' }, 
        { name: 'Spaghetti', img: 'images/italy/spaghetti.jpg' }, 
        // Desserts
        { name: 'Tiramisu', img: 'images/italy/tiramisu.jpg' },
        { name: 'Gelato', img: 'images/italy/gelato.jpg' }
    ],
    'Mexico': [
        { name: 'Birria', img: 'images/mexico/birria.jpg' }, 
        { name: 'Burritos', img: 'images/mexico/burrito.jpg' }, 
        { name: 'Ceviche', img: 'images/mexico/ceviche.jpg' }, 
        { name: 'Elote', img: 'images/mexico/elote.jpg' },
        { name: 'Enchiladas', img: 'images/mexico/enchiladas.jpg' },
        { name: 'Nachos', img: 'images/mexico/nachos.jpg' },
        { name: 'Pozole', img: 'images/mexico/pozole.jpg' }, 
        { name: 'Quesadilla', img: 'images/mexico/quesadilla.jpg' }, 
        { name: 'Tacos', img: 'images/mexico/tacos.jpg' }, 
        { name: 'Tamales', img: 'images/mexico/tamales.jpg' },
        // Desserts
        { name: 'Churros', img: 'images/mexico/churros.jpg' }
    ],
    'India': [
        { name: 'Biryani', img: 'images/india/biryani.jpg' }, 
        { name: 'Butter Chicken', img: 'images/india/butter_chicken.jpg' }, 
        { name: 'Chaat', img: 'images/india/chaat.jpg' }, 
        { name: 'Chicken Tikka Masala', img: 'images/india/chicken_tikka_masala.jpg' }, 
        { name: 'Madras Curry', img: 'images/india/madras_curry.jpg' }, 
        { name: 'Masala Dosa', img: 'images/india/masala_dosa.jpg' }, 
        { name: 'Pani Puri', img: 'images/india/pani_puri.jpg' }, 
        { name: 'Rogan Josh', img: 'images/india/rogan_josh.jpg' }, 
        { name: 'Samosa', img: 'images/india/samosa.jpg' },
        { name: 'Tandoori Chicken', img: 'images/india/tandoori_chicken.jpg' }
    ],
    'Japan': [
        { name: 'Bento', img: 'images/japan/bento.jpg' }, 
        { name: 'Gyoza', img: 'images/japan/gyoza.jpg' }, 
        { name: 'Karaage Don', img: 'images/japan/karaage_don.jpg' }, 
        { name: 'Katsu Curry', img: 'images/japan/katsu_curry.jpg' }, 
        { name: 'Okonomiyaki', img: 'images/japan/okonomiyaki.jpg' }, 
        { name: 'Onigiri', img: 'images/japan/onigiri.jpg' }, 
        { name: 'Ramen', img: 'images/japan/ramen.jpg' },
        { name: 'Shabu Shabu', img: 'images/japan/shabu.jpg' }, 
        { name: 'Soba', img: 'images/japan/soba.jpg' }, 
        { name: 'Sushi', img: 'images/japan/sushi.jpg' }, 
        { name: 'Takoyaki', img: 'images/japan/takoyaki.jpg' }, 
        { name: 'Tempura', img: 'images/japan/tempura.jpg' }, 
        { name: 'Teppanyaki', img: 'images/japan/teppanyaki.jpg' }, 
        { name: 'Udon', img: 'images/japan/udon.jpg' }, 
        { name: 'Unagi Donburi', img: 'images/japan/unagi_donburi.jpg' }, 
        { name: 'Yakiniku', img: 'images/japan/yakiniku.jpg' }, 
        { name: 'Yakitori', img: 'images/japan/yakitori.jpg' }, 
        // Desserts
        { name: 'Mochi', img: 'images/japan/mochi.jpg' }, 
        { name: 'Taiyaki', img: 'images/japan/taiyaki.jpg' }, 
    ],
    'China': [
        { name: 'Chow Mein (Stir-Fried Noodles)', img: 'images/china/chow_mein.jpg' },
        { name: 'Congee (Porridge)', img: 'images/china/congee.jpg' },
        { name: 'Dandan Noodles', img: 'images/china/dandan_mian.jpg' },
        { name: 'Fried Rice', img: 'images/china/fried_rice.jpg' },
        { name: 'Hot Pot', img: 'images/china/hotpot.jpg' },
        { name: 'Jiangbing (Chinese Crepes)', img: 'images/china/jianbing.jpg' },
        { name: 'Kung Pao Chicken', img: 'images/china/kung_pao.jpg' }, 
        { name: 'Mapo Tofu', img: 'images/china/mapo_tofu.jpg' },
        { name: 'Sweet Sour Pork', img: 'images/china/sweet_sour_pork.jpg' },
        { name: 'Wonton', img: 'images/china/wonton.jpg' },
        // Desserts
        { name: 'Tanghulu', img: 'images/china/tanghulu.jpg' }
    ],
    'France': [
        { name: 'Beef Stew', img: 'images/france/beef_stew.jpg' }, 
        { name: 'Bouillabaisse', img: 'images/france/bouillabaisse.jpg' }, 
        { name: 'Confit de Canard', img: 'images/france/confit_de_canard.jpg' }, 
        { name: 'Croissant', img: 'images/france/croissant.jpg' }, 
        { name: 'Escargot', img: 'images/france/escargot.jpg' }, 
        { name: 'Jambon Beurre', img: 'images/france/jambon_beurre.jpg' }, 
        { name: 'Onion Soup', img: 'images/france/onion_soup.jpg' }, 
        { name: 'Pot Au Feu', img: 'images/france/pot_au_feu.jpg' }, 
        { name: 'Quiche Lorraine', img: 'images/france/quiche_lorraine.jpg' }, 
        { name: 'Ratatouille', img: 'images/france/ratatouille.jpg' },
        { name: 'Steak Frites', img: 'images/france/steak_frites.jpg' }, 
        { name: 'Steak Tartare', img: 'images/france/steak_tartare.jpg' }, 
        // Desserts
        { name: 'Creme Brulee', img: 'images/france/creme_brulee.jpg' }, 
        { name: 'Crepes', img: 'images/france/crepes.jpg' }, 
        { name: 'Macarons', img: 'images/france/macarons.jpg' }, 
        { name: 'Souffle', img: 'images/france/souffle.jpg' },
        { name: 'Tarte Tatin', img: 'images/france/tarte_tatin.jpg' }
    ],
    'Korea': [
        { name: 'Bibim Naengmyeon (Spicy Cold Noodles)', img: 'images/korea/bibim_naengmyeon.jpg' }, 
        { name: 'Bibimbap (Korean Rice Bowl)', img: 'images/korea/bibimbap.jpg' }, 
        { name: 'Bossam (Boiled Pork Wrap)', img: 'images/korea/bossam.jpg' }, 
        { name: 'Chimaek (Fried Chicken with Beer)', img: 'images/korea/chimaek.jpg' }, 
        { name: 'Gamjatang (Pork Bone Soup)', img: 'images/korea/gamjatang.jpg' }, 
        { name: 'Gopchang (Small Intestines)', img: 'images/korea/gopchang.jpg' }, 
        { name: 'Japchae (Stir-Fried Noodles)', img: 'images/korea/japchae.jpg' },
        { name: 'Jeon', img: 'images/korea/jeon.jpg' }, 
        { name: 'Jjajangmyeon (Black Bean Noodles)', img: 'images/korea/jjajangmyeon.jpg' }, 
        { name: 'Korean Barbeque', img: 'images/korea/kbbq.jpg' }, 
        { name: 'Korean Fried Chicken', img: 'images/korea/kfried_chicken.jpg' }, 
        { name: 'Kimbap', img: 'images/korea/kimbap.jpg' }, 
        { name: 'Kimchi Fried Rice', img: 'images/korea/kimchi_fried_rice.jpg' }, 
        { name: 'Kimchi Stew', img: 'images/korea/kimchi_stew.jpg' }, 
        { name: 'Mandu', img: 'images/korea/mandu.jpg' }, 
        { name: 'Yangnyeom Gejang (Spicy Marinated Crab)', img: 'images/korea/seasoned_crab.jpg' }, 
        { name: 'Tofu Stew', img: 'images/korea/tofu_stew.jpg' }, 
        { name: 'Tteokbokki (Rice Cake)', img: 'images/korea/tteokbokki.jpg' }, 
        // Desserts
        { name: 'Bingsoo', img: 'images/korea/bingsoo.jpg' }, 
    ],
    'Thailand': [
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
    ],
    'Vietnam': [
        { name: 'Banh Cuon', img: 'images/vietnam/banh_cuon.jpg' }, 
        { name: 'Banh Khot (Savory Mini Pancakes)', img: 'images/vietnam/banh_khot.jpg' }, 
        { name: 'Banh Mi (Vietnamese Sandwich)', img: 'images/vietnam/banh_mi.jpg' }, 
        { name: 'Banh Xeo (Vietnamese Crispy Crepes) ', img: 'images/vietnam/banh_xeo.jpg' }, 
        { name: 'Bo Kho (Beef Stew)', img: 'images/vietnam/bo_kho.jpg' }, 
        { name: 'Bo Ne (Sizzling Steak and Eggs) ', img: 'images/vietnam/bo_ne.jpg' }, 
        { name: 'Bun Bo Hue (Spicy Beef Noddle Soup)', img: 'images/vietnam/bun_bo_hue.jpg' }, 
        { name: 'Bun Cha (Vietnamese Meatball Noodles)', img: 'images/vietnam/bun_cha.jpg' }, 
        { name: 'Bun Rieu (Crab Noodle Soup)', img: 'images/vietnam/bun_rieu.jpg' }, 
        { name: 'Cha Gio (Eggrolls)', img: 'images/vietnam/cha_gio.jpg' }, 
        { name: 'Com Tam (Vietnamese Broken Rice) ', img: 'images/vietnam/com_tam.jpg' }, 
        { name: 'Goi Cuon (Spring Rolls)', img: 'images/vietnam/goi_cuon.jpg' }, 
        { name: 'Hu Tieu ', img: 'images/vietnam/hu_tieu.jpg' }, 
        { name: 'Mi Quang (Vietnamese Turmeric Noodle Soup)', img: 'images/vietnam/mi_quang.jpg' }, 
        { name: 'Pho', img: 'images/vietnam/pho.jpg' }, 
        // Desserts
        { name: 'Che', img: 'images/vietnam/che.jpg' }, 
        { name: 'Xoi (Sticky Rice)', img: 'images/vietnam/xoi.jpg' }
    ]
};

let currentDishes = [];
let winners = [];
let roundsCompleted = 0;
let totalMatches = 0;

document.getElementById('start-tournament').addEventListener('click', () => {
    const selectedCountries = Array.from(document.querySelectorAll('#country-selection input:checked'))
        .map(input => input.value);

    if (selectedCountries.length < 2) {
        alert("Please select at least two countries.");
        return;
    }

    // Combine dishes from the selected countries
    currentDishes = selectedCountries.flatMap(country => dishesByCountry[country]);

    // Calculate total matches: number of dishes - 1
    totalMatches = currentDishes.length - 1;

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
    if (currentDishes.length === 1 && winners.length === 0) {
        // Final winner
        document.getElementById('result').textContent = 'Winner: ' + currentDishes[0].name;
        document.getElementById('ranker-box').style.display = 'none';
        document.getElementById('next-round').style.display = 'none';
        document.getElementById('final-buttons').style.display = 'block'; // Show the buttons
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
        highlightSelectedDish(event.currentTarget); // Highlight the selected dish

        if (currentDishes.length === 0 && winners.length > 0) {
            currentDishes = winners.slice(); // Move winners to currentDishes for next round
            winners = [];
        }

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
    const percentage = Math.min(100, (roundsCompleted / totalMatches) * 100);
    document.getElementById('progress-bar').style.width = percentage + '%';
}

document.getElementById('restart-tournament').addEventListener('click', () => {
    resetTournament();
    document.getElementById('final-buttons').style.display = 'none'; 
    document.getElementById('country-selection').style.display = 'block'; 
});

document.getElementById('yelp-button').addEventListener('click', () => {
    const winningDish = currentDishes[0].name; 
    const location = prompt("Enter your location:");
    const budget = prompt("Enter your budget:");

 
    const yelpUrl = `https://www.yelp.com/search?find_desc=${encodeURIComponent(winningDish)}&find_loc=${encodeURIComponent(location)}&price=${encodeURIComponent(budget)}`;
    window.open(yelpUrl, '_blank'); 
});

