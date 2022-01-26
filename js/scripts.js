const show_signup_model = document.querySelector(".show-signup-model");
const show_login_model = document.querySelector(".show-login-model");
const signup_model = document.querySelector(".signup-model");
const login_model = document.querySelector(".login-model");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const exit = document.querySelectorAll(".exit img");
const timer = document.querySelectorAll(".clock");
const img_cards = document.querySelectorAll(".img-card");
const model_container = document.querySelector(".model-container");
let img = document.querySelector(".model-container img");
const left_arrow = document.querySelector(".model-container .left-arrow i");
const right_arrow = document.querySelector(".model-container .right-arrow i");
const circles = document.querySelectorAll(".circle");
// search variables
const search = document.getElementById("search");
const booksNames = document.querySelectorAll(".product-name h2 a p");
const products = document.querySelectorAll(".product");
const book_item = document.querySelector(".book-item");
// add elements to the basket
const add_to_basket = document.querySelectorAll(".btn-card");
const badge = document.querySelector(".badge");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

// slider
let counter = 0;

nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

circles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    counter = index;
    circle.classList.add("active");
    carousel();
  });
});

function carousel() {
  if (counter <= 5) {
    slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  }
}
// signup and login pop up
function show_signup_model_fun() {
  show_signup_model.addEventListener("click", () => {
    signup_model.style.display = "block";
    login_model.style.display = "none";
  });
}

function show_login_model_fun() {
  show_login_model.addEventListener("click", () => {
    login_model.style.display = "block";
    signup_model.style.display = "none";
  });
}

function exit_fun() {
  exit.forEach(function (exit_btn) {
    exit_btn.addEventListener("click", () => {
      signup_model.style.display = "none";
      login_model.style.display = "none";
    });
  });
}

//timer
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 11, 7, 30, 0);
const futureTime = futureDate.getTime();
function getRemaindingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  let days = t / oneDay;
  days = Math.floor(days);
  if (t < 0) {
    clearInterval(countdown);
    timer.textContent = `sorry, the time has finished!`;
  }
  timer.forEach((oneTimer) => {
    oneTimer.textContent = days + " يوم";
  });
}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();

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

// add to basket
let NumberOfElement = 0;

products.forEach((product) => {
  to_basket = product.querySelector(".btn-card");
  to_basket.addEventListener("click", function (add) {
    add.preventDefault(); // Avoid default action.

    let basket = JSON.parse(localStorage.getItem("basket")); // Parse data from localstorage

    if (!basket) {
      basket = [];
    }
    var elementQuantity = 1;

    let elementName = product.querySelector(".product-name h2 a p").textContent;

    let elementPrice = product.querySelector(".price-box .price p").textContent;
    let elementImg = product
      .querySelector(".img-container img")
      .getAttribute("src");

    NumberOfElement = NumberOfElement + 1;
    // find the index of the item if already in basket
    const itemIndexInBasket = basket.findIndex(
      (basketEntry) => basketEntry.elementName === elementName
    );

    if (itemIndexInBasket !== -1) {
      basket[itemIndexInBasket].elementQuantity++;
      badge.textContent = basket.length;
    } else {
      basket.push({
        elementName,
        elementPrice,
        elementQuantity,
        elementImg,
      }); // Push not existing data to localstorage
    }
    localStorage.setItem("basket", JSON.stringify(basket));
  });
});

// change language
// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

// Check if a hash value exists in the URL
if (window.location.hash) {
  // Set the content of the webpage
  // depending on the hash value
  if (window.location.hash == "#en") {
    document.body.style.textAlign = "left";
    document.body.style.direction = "ltr";
  } else if (window.location.hash == "#ar") {
    document.body.style.textAlign = "right";
    document.body.style.direction = "rtl";
  }
}

// //timer
// let tempDate = new Date();
// let tempYear = tempDate.getFullYear();
// let tempMonth = tempDate.getMonth();
// let tempDay = tempDate.getDate();
// // months are ZERO index based;
// const futureDate = new Date(tempYear, tempMonth, tempDay + 11, 7, 30, 0);

// // const year = futureDate.getFullYear();
// // const hours = futureDate.getHours();
// // const minutes = futureDate.getMinutes();

// const futureTime = futureDate.getTime();
// function getRemaindingTime() {
//   const today = new Date().getTime();

//   const t = futureTime - today;
//   // 1s = 1000ms
//   // 1m = 60s
//   // 1hr = 60m
//   // 1d = 24hr
//   // values in miliseconds
//   const oneDay = 24 * 60 * 60 * 1000;
//   // const oneHour = 60 * 60 * 1000;
//   // const oneMinute = 60 * 1000;
//   // calculate all values
//   let days = t / oneDay;
//   days = Math.floor(days);
//   // let hours = Math.floor((t % oneDay) / oneHour);
//   // let minutes = Math.floor((t % oneHour) / oneMinute);
//   // let seconds = Math.floor((t % oneMinute) / 1000);
//   // let print_time = `${hours} : ${minutes} : ${seconds}`;

//   // let total = "";
//   // // set values array
//   // const values = [hours, minutes, seconds];

//   // function format(item) {
//   //   if (item < 10) {
//   //     return (item = `0${item}`);
//   //   }
//   //   return item;
//   // }

//   // values.forEach(function (item, index) {
//   //   total += ":" + String(format(values[index]));
//   // });

//   if (t < 0) {
//     clearInterval(countdown);
//     timer.textContent = `sorry, the time has finished!`;
//   }
//   // total = total.slice(1, 10);
//   timer.forEach((oneTimer) => {
//     // oneTimer.textContent = total;
//     oneTimer.textContent = days + " يوم";
//   });
// }
// // countdown;
// let countdown = setInterval(getRemaindingTime, 1000);
// //set initial values
// getRemaindingTime();
// //
