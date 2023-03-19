let color = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");
const body = document.querySelector("body");

function getRandomHexColor() {
  let change = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  console.log(change);
  color.textContent = change;
  body.style.backgroundColor = `${change}`;
}

changeColor.addEventListener("click", getRandomHexColor);
