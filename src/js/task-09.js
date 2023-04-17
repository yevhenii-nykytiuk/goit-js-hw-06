function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeRandomColors = document.querySelector(".change-color");
const valueColor = document.querySelector(".color");


changeRandomColors.addEventListener("click", hendleChangeRandomColors);

function hendleChangeRandomColors() {
  document.body.style.background = getRandomHexColor();
  valueColor.textContent = getRandomHexColor();
}

