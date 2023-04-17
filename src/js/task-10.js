function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const numberInputEl = document.querySelector('input[type="number"]');

const amountValueBoxes = document.getElementById("boxes");


createBtnEl.addEventListener("click", hendleCreateBtnEl);
destroyBtnEl.addEventListener("click", hendlerRemoveEl);


function hendleCreateBtnEl () {
  createBoxes(numberInputEl.value);
}
 
function hendlerRemoveEl () {
  amountValueBoxes.innerHTML = "";
  numberInputEl.value = "";
}


const createBoxes = (amount) => {
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const boxEl = document.createElement("div");
    boxEl.style.width = `${size}px`;
    boxEl.style.height = `${size}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    amountValueBoxes.prepend(boxEl);
  }
  return amountValueBoxes;
}



