let real_flowers_menu_button = document.querySelector("#real-flowers-menu-button"),
first_menu = document.querySelector("#first-menu"),
  flowers_for_gifts_menu_button = document.querySelector("#flowers_for_gifts_menu_button"),
  weird_flowers_menu_button = document.querySelector("#weird_flowers_menu_button"),
  real_flowers_menu = document.querySelector("#real-flowers-menu");

let select = document.querySelectorAll("#real-flowers-menu select option");
let submit_button = document.querySelector(".submit");

real_flowers_menu_button.addEventListener("click", (e) => {
  first_menu.classList.add("hidden");
  real_flowers_menu.classList.remove("hidden");
  // colorizeOptionColors();
});

function colorizeOptionColors() {
    console.log("working");
  select.forEach((element) => {
    element.style.color = element.value;
    if (element.value == "white") element.style.color = "black";
    // element.style.color = "red";
    // element.innerHTML.toString
  });
}

submit_button.addEventListener("click", (e) => {
  // i want here to go to the parent of this button and hide it
  //now i'll make a fast solution

  real_flowers_menu.classList.add("hidden");
  document.querySelector("#user-info-form").classList.remove("hidden");
});

document.querySelector("#submit-form-button").addEventListener("click", (e) => {
  document.querySelector("#user-info-form").classList.add("hidden");
  document.querySelector("#results-menu").classList.remove("hidden");
});

let image_1 = document.querySelector("#real-flowers-menu :first-child img");
let image_2 = document.querySelector("#real-flowers-menu :nth-child(2) img");
let image_3 = document.querySelector("#real-flowers-menu :nth-child(3) img");
let image_4 = document.querySelector("#real-flowers-menu :nth-child(4) img");
let image_5 = document.querySelector("#real-flowers-menu :nth-child(5) img");
let image_6 = document.querySelector("#real-flowers-menu :nth-child(6) img");

let images = [
  "./Images/3d-abstract-beautiful-flowers_23-2150872041.avif",
  "./Images/assortment-abstract-3d-flowers_23-2150872037.avif",
  "./Images/beautiful-flowers-with-water-drops_23-2150705667.avif",
  "./Images/beautiful-roses-pastel-colors-craft-paper-vintage-intricate-details-generative-ai_595532-1871.avif",
  "./Images/beauty-nature-daisy-petal-yellow-springtime-freshness-generative-ai_188544-8603.avif",
  "./Images/close-up-blooming-spring-flowers_23-2148443944.avif",
  "./Images/close-up-gerbera-flowers-high-view_23-2148268296.avif",
  "./Images/close-up-spring-gerbera-flowers_23-2148894261.avif",
  "./Images/fantasy-marine-landscape-with-bioluminescent-nature_23-2151206915.avif",
  "./Images/flower-closeup-with-hyper-macro-lens-generative-ai_7023-109379.avif",
  "./Images/fresh-yellow-daisy-wet-with-dew-drops-generated-by-ai_188544-20214.avif",
  "./Images/highly-detailed-hot-pink-gerberas-bokeh_1135748-5358.avif",
  "./Images/pexels-8moments-1266810.jpg",
  "./Images/pexels-alena-koval-233944-961402.jpg",
  "./Images/highly-detailed-hot-pink-gerberas-bokeh_1135748-5358.avif",
  "./Images/1.png",
  "./Images/2.png",
  "./Images/3.png",
  "./Images/4.png",
]

document.querySelector("#artificial-flowers-menu-button").addEventListener("click", e=> {
  first_menu.classList.add("hidden");
  real_flowers_menu.classList.remove("hidden");

  image_1.src = images[0];
  image_2.src = images[1];
  image_3.src = images[2];
  image_4.src = images[3];
  image_5.src = images[4];
  image_6.src = images[5];

  // colorizeOptionColors();
});

document.querySelector("#flowers-seeding-menu-button").addEventListener("click", e=> {
  first_menu.classList.add("hidden");
  real_flowers_menu.classList.remove("hidden");

  image_1.src = images[6];
  image_2.src = images[7];
  image_3.src = images[8];
  image_4.src = images[9];
  image_5.src = images[10];
  image_6.src = images[11];
  // colorizeOptionColors();
});


function Shuffle_4_images()
{
    
}