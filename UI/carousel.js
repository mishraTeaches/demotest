const track = document.querySelector(".carouselTracker");
const slides = Array.from(track.children);
const prevButton = document.querySelector(".carouselButtonLeft");
const nextButton = document.querySelector(".carouselButtonRight");
const dotsNav = document.querySelector(".carouselNavigation");
const dots = Array.from(dotsNav.children);

// get each slide width
const slideWidth = slides[0].getBoundingClientRect().width;

// arrange slides next to each other
const setSlidePosition = (slide, index) => {
  slide.style.width = `${slideWidth * index}px`;
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("currentSlide");
  targetSlide.classList.add("currentSlide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("currentSlide");
  targetDot.classList.add("currentSlide");
};

const hideShowArrows = (targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("displayNone");
    nextButton.classList.remove("displayNone");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("displayNone");
    nextButton.classList.add("displayNone");
  } else {
    prevButton.classList.remove("displayNone");
    nextButton.classList.remove("displayNone");
  }
};
//on click right, move slides to right
nextButton.addEventListener("click", (event) => {
  const currentSlide = track.querySelector(".currentSlide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".currentSlide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(nextIndex);
});

prevButton.addEventListener("click", (event) => {
  const currentSlide = track.querySelector(".currentSlide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".currentSlide");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(prevIndex);
});

dotsNav.addEventListener("click", (event) => {
  const targetDot = event.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".currentSlide");
  const currentDot = dotsNav.querySelector(".currentSlide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(targetIndex);
});
