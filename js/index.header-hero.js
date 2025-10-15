const headerBurger = document.querySelector(".header__burger");
const burgerLines = document.querySelectorAll(".header__burger-line");
const headerMobileMenu = document.querySelector(".header__mobile-menu");

headerBurger.addEventListener("click", () => {
  // console.log("Бургер натиснуто!");
  headerBurger.classList.toggle("show");
  headerMobileMenu.classList.toggle("show");
});
