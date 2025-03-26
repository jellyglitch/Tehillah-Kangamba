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