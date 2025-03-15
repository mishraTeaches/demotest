let paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const container = document.querySelector("#container");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors += letters[Math.floor(Math.random() * 16)];
  }
  return colors;
}

// SPLIT

const words = paragraph
  .split(" ")
  .map((word) => `<span>${word}</span>`)
  .join(" ");

container.innerHTML = words;

const spans = document.querySelectorAll("span");

function changeColors() {
  spans.forEach((span) => {
    span.style.color = getRandomColor();
  });
}

setInterval(changeColors, 1000);
