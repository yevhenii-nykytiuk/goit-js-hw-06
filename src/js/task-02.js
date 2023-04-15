const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientList = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();

for (const ingredient of ingredients) {
  const addItem = document.createElement("li");
  addItem.textContent = ingredient;
  addItem.classList.add("item");
  addItem.style.listStyleType = "none";
  fragment.append(addItem);
}

ingredientList.append(fragment);












