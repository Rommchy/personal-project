const headerBurger = document.querySelector(".header__burger");
const burgerLines = document.querySelectorAll(".header__burger-line");
const headerMobileMenu = document.querySelector(".header__mobile-menu");
const headerMenuLink = document.querySelectorAll(".header__menu-link");
const headerMenuBtn = document.querySelector(".header__menu-btn");

console.log(headerMenuLink);

headerBurger.addEventListener("click", () => {
  // console.log("Бургер натиснуто!");
  headerBurger.classList.toggle("show");
  headerMobileMenu.classList.toggle("show");
  document.body.classList.toggle("no-scroll");
});

headerMenuLink.forEach((link) => {
  link.addEventListener("click", () => {
    headerBurger.classList.toggle("show");
    headerMobileMenu.classList.toggle("show");
    document.body.classList.toggle("no-scroll");
  });
});

headerMenuBtn.addEventListener("click", () => {
  headerBurger.classList.toggle("show");
  headerMobileMenu.classList.toggle("show");
  document.body.classList.toggle("no-scroll");
});
