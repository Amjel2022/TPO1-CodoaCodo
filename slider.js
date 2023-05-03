const slides = document.querySelectorAll("[data-slide]");
const buttons = document.querySelectorAll("[data-button]");

let currSlide = 0;
let maxSlide = slides.length - 1;

const updateCarousel = (number = 0) => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - number) * 120}%)`;
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.dataset.button == "next" ? ++currSlide : --currSlide;

    if (currSlide > maxSlide) {
      currSlide = 0;
    } else if (currSlide < 0) {
      currSlide = maxSlide;
    }

    updateCarousel(currSlide);
  });
});

updateCarousel();

//PAG MONITORES MENU HAMBURGUESA
let menu = document.querySelector('#menu-btn')
let navbar = document.querySelector('header .navegacion')

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
