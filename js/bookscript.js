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

//
img_cards.forEach((img_card) => {
  img_card.addEventListener("click", (e) => {
    console.log();
    model_container.style.display = "block";
    console.log(img);

    img.src = e.target.src;
  });
});

// model_container.addEventListener("click", () => {
//   model_container.style.display = "none";
// });

left_arrow.addEventListener("click", (e) => {});
