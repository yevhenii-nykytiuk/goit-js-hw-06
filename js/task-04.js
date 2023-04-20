const incrementUp = document.querySelector('button[data-action="increment"]');
const value = document.getElementById("value");
const decrementDown = document.querySelector('button[data-action="decrement"]');


let counterValue = 0;

incrementUp.addEventListener("click", hendlerIncrementCounter); 
  
  function hendlerIncrementCounter () {
  counterValue += 1;
  value.textContent = counterValue;
}

decrementDown.addEventListener("click", hendlerDecrementCounter)
  
function hendlerDecrementCounter () {
  counterValue -= 1;
  value.textContent = counterValue;   
}


    // const counter = {

    //   counterValue: 0,

    //   decrement() {
    //     counter.counterValue -= 1;
    //   },

    //   increment() {
    //     counter.counterValue += 1;
    //   }
    // }

    // decrementDown.addEventListener("click", () => {
    //   counter.decrement();
    //   value.textContent = counter.counterValue;
    // })

    // incrementUp.addEventListener("click", () => {
    //   counter.increment();
    //   value.textContent = counter.counterValue;
    // })






