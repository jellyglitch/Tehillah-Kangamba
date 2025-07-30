//////////////// Navigation
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

//toggling menu button
menuToggle.addEventListener("click", () => { 
  navLinks.classList.toggle("show-menu");
});

//clicking outside of menu to close menu
document.addEventListener('click', e => { 
  if(!navLinks.contains(e.target) && !menuToggle.contains(e.target)){
      navLinks.classList.remove("show-menu");
  }
})

//////////////// Slider
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currIndex = 0;

const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
};

nextButton.addEventListener("click", () => {
  currIndex = (currIndex - 1 + slides.length) % slides.length;
  showSlide(currIndex);
});

prevButton.addEventListener("click", () => {
  currIndex = (currIndex + 1) % slides.length;
  showSlide(currIndex);
});