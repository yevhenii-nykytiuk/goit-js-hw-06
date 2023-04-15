const incrementDown = document.querySelector('button[data-action="increment"]');
const value = document.getElementById("value");
const decrementUp = document.querySelector('button[data-action="decrement"]');


const counter = {

  counterValue: 0,

  decrement() {
    counter.counterValue -= 1;
  },

  increment() {
    counter.counterValue += 1;
  }
}

decrementUp.addEventListener("click", () => {
  counter.decrement();
  value.textContent = counter.counterValue;
})

incrementDown.addEventListener("click", () => {
  counter.increment();
  value.textContent = counter.counterValue;
})



