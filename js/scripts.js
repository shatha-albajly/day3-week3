const show_signup_model = document.querySelector(".show-signup-model");
const show_login_model = document.querySelector(".show-login-model");
const signup_model = document.querySelector(".signup-model");
const login_model = document.querySelector(".login-model");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const timer = document.querySelectorAll(".clock");
const img_cards = document.querySelectorAll(".img-card");
const model_container = document.querySelector(".model-container");
let img = document.querySelector(".model-container img");
const left_arrow = document.querySelector(".model-container .left-arrow i");
const right_arrow = document.querySelector(".model-container .right-arrow i");
carousel;
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
});
signup_model.addEventListener("click", () => {
  signup_model.style.display = "none";
});
show_login_model.addEventListener("click", () => {
  login_model.style.display = "block";
});
login_model.addEventListener("click", () => {
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
