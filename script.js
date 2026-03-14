const hamburger = document.querySelector(".hamburger");
console.log(hamburger);

const mobileMenu = document.querySelector(".mobile-menu");
console.log(mobileMenu);

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-menu-open");
});
