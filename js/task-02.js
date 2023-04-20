const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientList = document.querySelector("#ingredients");

const createIngredients = ingredients.map(element => {
  const addIngredient = document.createElement("li");
  addIngredient.textContent = element;
  addIngredient.classList.add("item");
  addIngredient.style.listStyleType = "none";
  return addIngredient;
})


console.log(createIngredients);
ingredientList.append(...createIngredients);























