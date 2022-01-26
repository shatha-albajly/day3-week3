const progressBar = document.getElementById("progress-bar");
const progressNext = document.getElementById("progress-next");
const progressPrev = document.getElementById("progress-prev");
const checkoutCards = document.querySelectorAll(".checkout-card");
const steps = document.querySelectorAll(".step");

let active = 1;

progressNext.addEventListener("click", () => {
  active++;

  if (active > steps.length) {
    active = steps.length;
  }
  updateProgress();
  moveCards();
});

progressPrev.addEventListener("click", () => {
  active--;
  if (active < 1) {
    active = 1;
  }
  updateProgress();
  moveCards();
});

const moveCards = () => {
  checkoutCards.forEach(function (checkCard, index) {
    if (active == index + 1) {
      checkCard.classList.add("active");
    } else {
      checkCard.classList.remove("active");
    }
  });
};

const updateProgress = () => {
  steps.forEach((step, i) => {
    if (i < active) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
  progressBar.style.width = ((active - 1) / (steps.length - 1)) * 100 + "%";
  if (active === 1) {
    progressPrev.disabled = true;
    progressPrev.style.border = "none";
  } else if (active === steps.length) {
    progressNext.disabled = true;
    progressNext.style.border = "none";
  } else {
    progressPrev.disabled = false;
    progressNext.disabled = false;
    progressNext.style.border = "1px solid var(--gray-color)";
    progressPrev.style.border = "1px solid var(--gray-color)";
  }
};
