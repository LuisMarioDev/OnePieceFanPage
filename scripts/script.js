const btnLeft = document.querySelector(".btn-left"),
  btnRight = document.querySelector(".btn-right"),
  slider = document.querySelector("#slider"),
  sliderSections = document.querySelectorAll(".slider-section");

let operacion = 0;
let counter = 0;
const widthImg = 100 / sliderSections.length;

btnLeft.addEventListener("click", () => moveToLeft());
btnRight.addEventListener("click", () => moveToRight());

function updateActiveSlide() {
  sliderSections.forEach((section, index) => {
    section.classList.remove("active");
    if (index === counter) {
      section.classList.add("active");
    }
  });
}

function moveToRight() {
    console.log(counter);
  if (counter >= sliderSections.length - 1) {
    counter = 0;
    operacion = 0;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "none";
    setTimeout(() => {
      slider.style.transition = "all ease .6s";
      updateActiveSlide();
    }, 50);
  } else {
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
    updateActiveSlide();
  }
}

function moveToLeft() {
    console.log(counter);
  if (counter <= 0) {
    counter = sliderSections.length - 1;
    operacion = widthImg * (sliderSections.length - 1);
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "none";
    setTimeout(() => {
      slider.style.transition = "all ease .6s";
      updateActiveSlide();
    }, 50);
  } else {
    counter--;
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
    updateActiveSlide();
  }
}

// Inicializar la primera diapositiva como activa
updateActiveSlide();
