const show_signup_model = document.querySelector(".show-signup-model");
const show_login_model = document.querySelector(".show-login-model");
const signup_model = document.querySelector(".signup-model");
const login_model = document.querySelector(".login-model");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const exit = document.querySelector(".exit img");
const timer = document.querySelectorAll(".clock");
const img_cards = document.querySelectorAll(".img-card");
const model_container = document.querySelector(".model-container");
let img = document.querySelector(".model-container img");
const left_arrow = document.querySelector(".model-container .left-arrow i");
const right_arrow = document.querySelector(".model-container .right-arrow i");
// search variables
const search = document.getElementById("search");
const booksNames = document.querySelectorAll(".product-name h2 a p");
const products = document.querySelectorAll(".product");

// add elements to the basket
const add_to_basket = document.querySelectorAll(".btn-card");
const badge = document.querySelector(".badge");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
// signup and login pop up
show_signup_model.addEventListener("click", () => {
  signup_model.style.display = "block";
  login_model.style.display = "none";
});

show_login_model.addEventListener("click", () => {
  login_model.style.display = "block";
  signup_model.style.display = "none";
});

exit.addEventListener("click", (e) => {
  console.log(e);
  signup_model.style.display = "none";
  login_model.style.display = "none";
});

//timer
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 11, 7, 30, 0);

// const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

const futureTime = futureDate.getTime();
function getRemaindingTime() {
  const today = new Date().getTime();

  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  let print_time = `${hours} : ${minutes} : ${seconds}`;

  let total = "";
  // set values array
  const values = [hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  values.forEach(function (item, index) {
    total += ":" + String(format(values[index]));
  });

  if (t < 0) {
    clearInterval(countdown);
    timer.textContent = `sorry, the time has finished!`;
  }
  total = total.slice(1, 10);
  timer.forEach((oneTimer) => {
    oneTimer.textContent = total;
  });
}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();
//

// // search
search.addEventListener("keyup", function (e) {
  products.forEach((product) => {
    bookname = product.querySelector(".product-name h2 a p");
    if (bookname.textContent.indexOf(search.value) > -1) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
let NumberOfElement = 0;

// add to basket
products.forEach((product) => {
  to_basket = product.querySelector(".btn-card");
  to_basket.addEventListener("click", function (add) {
    //Add item to when click AddBtn localStorage
    add.preventDefault(); // Avoid default action.

    let basket = JSON.parse(localStorage.getItem("basket")); // Parse data from localstorage

    // let elementimageUrl = element.imageUrl; // element.imageUrl is a part of backend data received from JSON file
    // let elementId = element._id; // element._id is a part of backend data received from JSON file
    // let elementName = element.name; // element.name is a part of backend data received from JSON file
    // let elementPrice = element.price; // element.price is a part of backend data received from JSON file
    let elementQuantity = 1;

    if (!basket) {
      basket = [];
    }

    let elementName = product.querySelector(".product-name h2 a p").textContent;
    NumberOfElement = NumberOfElement + 1;
    // find the index of the item if already in basket
    const itemIndexInBasket = basket.findIndex(
      (basketEntry) => basketEntry.elementName === elementName
    );
    if (itemIndexInBasket !== -1) {
      basket[itemIndexInBasket].elementQuantity++;
      badge.textContent = NumberOfElement;
    } else {
      basket.push({
        elementName,
      }); // Push not existing data to localstorage
    }
    localStorage.setItem("basket", JSON.stringify(basket));
  });
});
