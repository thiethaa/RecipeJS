var recipe = [{
        "id": 1,
        "title": "Nasi Goreng",
        "level": "easy",
        "imageUrl": "https://i2.wp.com/eatwellabi.com/wp-content/uploads/2019/01/IMG_5172.jpg?zoom=2&resize=750%2C840&ssl=1",
        "imagePath": "images/nasiGoreng/nasgor3.jpg",
        "description": "Nasi goreng is one of the national dishes of Indonesia. President Obama was served the dish when he visited the country,that must mean something, right? It is essentially fried rice, typically cooked with kepas manis,chilli and shrimp paste; then topped with fried eggs.",
        "ingredients": [
            " 2 tablespoon oil",
            "1 medium chooped onion",
            "2 cloves chooped garlic",
            "thumb size Ginger",
            "1/2 teaspoon Chili Flakes",
            "1 red Chili Pepper",
            "30gr green beens ",
            "200gr Rice Cooked",
            "1 Tablespoon Sweet soy souce",
            "1 tablespoon salt",
            "3 Stalkes Spring onion",
            "2 Eggs fried"
        ],
        "Instructions": [
            "1. Fry the eggs an set aside.",
            " 2. Heat the oil in a non-stick frying pan under low heat.",
            " 3. Cook the onions until they are translucent.",
            " 4. Add the garlic, chilli and ginger; and stir continuously for one minute.",
            " 5. Pour in the green beans and red peppers and continue to stir for two minutes.",
            "6. Add the rice into the pot while still stirring, and allow to heat through.",
            "7. Pour in the cekap manis and continue to stir.",
            " 8. Taste and add some salt if required.",
            "9. Mix in the spring onions and remove from heat.",
            "10. Garnish with coriander and serve with the fried eggs."
        ],
        "createBy": "Leila Kitchen"
    },
    {
        "id": 2,
        "title": "Chicken Enchilada Casserole with Rice",
        "level": "hard",
        "imageUrl": "https://i1.wp.com/eatwellabi.com/wp-content/uploads/2019/06/Chicken-enchilada-casserole.jpg?zoom=2&resize=750%2C533&ssl=1",
        "imagePath": "images/Chicken-enchilada-casserole.jpg",
        "description": "Enjoy amazing enchilada flavors in this delicious one-pot chicken and rice casserole. All you have to do is add all the ingredients into a casserole dish and allow to bake in the oven.",
        "ingredients": [
             "1 cup Basmati Rice",
             "2 Pieces Chicken Breast Chopped",
             "1 Cup Chooped onion",
             "1 Cup Sweeet Corn",
             "1 Can Black Beans",
             "1 Red Pepper Chooped",
             "1/2 teaspoon Cumin",
             "1 teaspoon Oregano",
             "1 teaspoon Smoke Paprika",
             "1 Tablespoon Garlic Powder",
             " 1/2 can Tomato Puree",
             " 1/2 Cup Cheddar Chese",
        ],
        "Instructions": [
            "1. Pre-heat the oven at 200 C.",
            " 2. Chop chicken breast, onions (you can use frozen chopped onions) and peppers.",
            " 3. Add all the ingredients into a casserole dish, with the stock and salt going in last.",
            " 4. Use a wooden spoon to stir the content of the dish properly and cover with aluminium foil",
            " 5. Place in the oven and leave for 40 mins.",
            "6. Bring out the dish, stir the content once more and return into the oven.",
            "7. Allow to cook for another 30 mins, then remove from the oven. At this point, there should be no visible liquid in the dish.",
            " 8. Sprinkle the cheese on top and place back for about 5 mins; or until the cheese starts to bubble.",
            "9. Remove from the oven and enjoy."
        ],
        "createBy": "Nobo Home Food"
    },
    {
        "id": 3,
        "title": "Udon Noodle Soup",
        "level": "medium",
        "imageUrl": "https://i2.wp.com/eatwellabi.com/wp-content/uploads/2019/08/udon-soup-031.jpg?zoom=2&resize=470%2C317&ssl=1",
        "imagePath": "images/udon-soup.jpg",
        "description": "Super tasty, but easy udon noodle soup which is ready in less than 30 mins. It packs a punch and is full of healthy vegetables",
        "ingredients": [
            "1 tablespoon Oil",
            " 2 Cloves Garlic Chopped",
            " 1 Teaspoon peeled and Grated Ginger",
            " 1 Teaspooon Soy Souce",
            " 2 Cup Vegetables Stock",
            " 150gr Udon Noodle",
            " 1 handfull Sugar",
            "1 Chili Pepper",
            "1 handfull Shitake Mushrooms",
            " 3 Stalks Spring Onion",
            " 1 Tablespoon Miso Paste",
            "1 handfull Coriander"
        ],
        "Instructions": [
            "1. eat the oil in a sauce pan",
            " 2. Cook garlic and ginger in the oil with regular stirring for about 1 min.",
            " 3. Add the soy sauce and stir again, then pour in the stock and allow to simmer for about 5 mins.",
            " 4. Add the udon noodles into the pot and cover.",
            " 5. Allow to cook for around 3 mins.",
            "6. Add the sugar snaps, chilli pepper and shiitake mushrooms; allow to cook for 2 mins",
            "7.Add the spinach and spring onions, allow to cook for 1 more minute, then remove from heat",
            " 8. Mix the miso paste with 1 tablespoon water; add into the pot and stir to mix",
            "9. Serve in a bowl and top with coriander."
        ],
        "createBy": "Kikumura Kitchen"
    }
]
//select all elements
var title= document.getElementById('title');
var creator= document.getElementById('creator');
var description = document.getElementById('description');
var ingredient = document.getElementById('ingredient');
var instruction = document.getElementById('instruction');
var image = document.getElementById('image');
var intro = document.getElementById('intro');
var main_ing = document.getElementById('main_ing');
var main_ins = document.getElementById('main_ins');



//create function select
function choosenItem(value){
    for (i = 0; i < recipe.length; i++) {
       if(recipe[i].level === value){
        title.innerHTML = recipe[i].title;
        creator.innerHTML= recipe[i].createBy;
        intro.innerHTML = 'Introo...'
        description.innerHTML = recipe[i].description;
        main_ing.innerHTML = 'Ingredients :'
        ingredient.innerHTML = recipe[i].ingredients.join("<br>");
        main_ins.innerHTML = 'Instruction :'
        instruction.innerHTML = recipe[i].Instructions.join("<br>");
        image.src = recipe[i].imagePath;
        }
    }
};

