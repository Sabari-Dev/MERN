const foodMenu = [
  {
    id: 1,
    name: "Strawberry Ice-cream",
    rate: 160,
    category: "ice",
    image:
      "https://images.pexels.com/photos/2161649/pexels-photo-2161649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Butter-scotch Ice-cream",
    rate: 130,
    category: "ice",
    image:
      "https://images.pexels.com/photos/1893567/pexels-photo-1893567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Chocolate Ice-cream",
    rate: 185,
    category: "ice",
    image:
      "https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    name: "vanilla cone mini",
    rate: 90,
    category: "ice",
    image:
      "https://images.pexels.com/photos/1294943/pexels-photo-1294943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    name: "Rainbow cone",
    rate: 165,
    category: "ice",
    image:
      "https://images.pexels.com/photos/1625235/pexels-photo-1625235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    name: "Oreo Milk shake",
    rate: 190,
    category: "shakes",
    image:
      "https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 7,
    name: "Strawberry milk shake",
    rate: 170,
    category: "shakes",
    image:
      "https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 8,
    name: "Chocolate milk shake",
    rate: 175,
    category: "shakes",
    image:
      "https://images.pexels.com/photos/11381485/pexels-photo-11381485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 9,
    name: "Mango milk shake",
    rate: 165,
    category: "shakes",
    image:
      "https://images.pexels.com/photos/4663464/pexels-photo-4663464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 10,
    name: "Idly",
    rate: 60,
    category: "veg",
    image:
      "https://images.pexels.com/photos/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 11,
    name: "Dosa",
    rate: 95,
    category: "veg",
    image:
      "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 12,
    name: "Butter Nan",
    rate: 50,
    category: "veg",
    image:
      "https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 13,
    name: "full Meal",
    rate: 210,
    category: "veg",
    image: "https://3.imimg.com/data3/NX/GF/MY-9178041/veg-meal-250x250.png",
  },
  {
    id: 14,
    name: "Panner butter masala",
    rate: 140,
    category: "veg",
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-1.jpg",
  },
  {
    id: 15,
    name: "Chicken biriyani",
    rate: 250,
    category: "non-veg",
    image: "https://healux.in/wp-content/uploads/2020/11/ChickenBiryani.jpg",
  },
  {
    id: 16,
    name: "Mutton biriyani",
    rate: 300,
    category: "non-veg",
    image:
      "https://images.livemint.com/img/2023/01/13/600x338/Kolkata_Biryani_1673628587318_1673628598499_1673628598499.jpg",
  },
  {
    id: 17,
    name: "Tandoori chicken",
    rate: 380,
    category: "non-veg",
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2022/12/Tandoori-Chicken-1.jpg",
  },
  {
    id: 18,
    name: "fish fry",
    rate: 170,
    category: "non-veg",
    image:
      "https://c.ndtvimg.com/2020-01/op8grfc_fish_625x300_11_January_20.jpg",
  },
  {
    id: 19,
    name: "Prawn butter Masala",
    rate: 210,
    category: "non-veg",
    image:
      "https://madscookhouse.com/wp-content/uploads/2021/01/Prawn-Butter-Masala.jpg",
  },
  {
    id: 20,
    name: "Egg curry",
    rate: 100,
    category: "non-veg",
    image:
      "https://static01.nyt.com/images/2020/03/04/dining/tr-egg-curry/merlin_169211805_227972c0-43d1-4f25-9643-9568331d8adb-master768.jpg?w=1280&q=75",
  },
];

let Img = document.querySelector(".food-img img");
let name = document.querySelector(".name");
let rate = document.querySelector(".rate");
let food = document.querySelector(".menu-page");
let All = document.querySelector(".all");
let veg = document.querySelector(".veg");
let nonVeg = document.querySelector(".non-veg");
let shakes = document.querySelector(".shakes");
let ice = document.querySelector(".ice");

let display = foodMenu.map((item) => {
  return `  <div class="foods m-3 col-m-3 col-md-3 col-lg-2 border boder-3">
          <img src="${item.image}" alt=""  width="180px" height="200px"/>

          <div class="food-details">
            <h3 class="name">${item.name}</h3>
            <p class="rate">Rs.${item.rate}.00/-</p>
          </div></div>`;
});
display = display.join("");
food.innerHTML = display;
All.addEventListener("click", () => {
  food.innerHTML = display;
});
nonVeg.addEventListener("click", () => {
  let NonCat = foodMenu.filter((nVeg) => nVeg.category === "non-veg");
  let nonMenu = NonCat.map((item) => {
    return `  <div class="foods col-2 m-3 border boder-3">
          <img src="${item.image}" alt=""  width="180px" height="200px"/>

          <div class="food-details">
            <h3 class="name">${item.name}</h3>
            <p class="rate">Rs.${item.rate}.00/-</p>
          </div></div>`;
  });
  nonMenu = nonMenu.join("");
  food.innerHTML = nonMenu;
});
veg.addEventListener("click", () => {
  let vegCat = foodMenu.filter((veg) => veg.category === "veg");
  let vegMenu = vegCat.map((item) => {
    return `  <div class="foods col-2 m-3 border boder-3">
          <img src="${item.image}" alt=""  width="180px" height="200px"/>

          <div class="food-details">
            <h3 class="name">${item.name}</h3>
            <p class="rate">Rs.${item.rate}.00/-</p>
          </div></div>`;
  });
  vegMenu = vegMenu.join("");
  food.innerHTML = vegMenu;
});
shakes.addEventListener("click", () => {
  let shakesCat = foodMenu.filter((shakes) => shakes.category === "shakes");
  let shakesMenu = shakesCat.map((item) => {
    return `  <div class="foods col-2 m-3 border boder-3">
          <img src="${item.image}" alt=""  width="180px" height="200px"/>

          <div class="food-details">
            <h3 class="name">${item.name}</h3>
            <p class="rate">Rs.${item.rate}.00/-</p>
          </div></div>`;
  });
  shakesMenu = shakesMenu.join("");
  food.innerHTML = shakesMenu;
});
ice.addEventListener("click", () => {
  let iceCat = foodMenu.filter((ice) => ice.category === "ice");
  let iceMenu = iceCat.map((item) => {
    return `  <div class="foods col-2 m-3 border boder-3">
          <img src="${item.image}" alt=""  width="180px" height="200px"/>

          <div class="food-details">
            <h3 class="name">${item.name}</h3>
            <p class="rate">Rs.${item.rate}.00/-</p>
          </div></div>`;
  });
  iceMenu = iceMenu.join("");
  food.innerHTML = iceMenu;
});
