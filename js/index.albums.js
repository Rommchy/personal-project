const previousBtn = document.querySelectorAll(".albums__arrow-btn")[0];
const nextBtn = document.querySelectorAll(".albums__arrow-btn")[1];
const track = document.querySelector(".albums__gallery");
const items = document.querySelectorAll(".albums__gallery-item");
const viewport = document.querySelector(".albums__viewport");

let position = 0;

function getStep() {
  return items[0].offsetWidth + 20;
}

console.log(getStep());

function getVisibleCount() {
  return Math.round(viewport.offsetWidth / getStep());
}

console.log(getVisibleCount());

function getMaxPosition() {
  return items.length - getVisibleCount();
}

console.log(getMaxPosition());

function updateCarousel() {
  track.style.transform = `translateX(-${position * getStep()}px)`;
}

nextBtn.addEventListener("click", () => {
  if (position < getMaxPosition()) {
    position++;
    updateCarousel();
  }
});

previousBtn.addEventListener("click", () => {
  if (position > 0) {
    position--;
    updateCarousel();
  }
});

window.addEventListener("resize", () => {
  if (position > getMaxPosition()) {
    position = getMaxPosition();
  }
  updateCarousel();
});
