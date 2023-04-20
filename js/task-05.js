const formNameInput = document.getElementById("name-input");
const nameOutputSpan = document.getElementById("name-output");


formNameInput.addEventListener("input", onFormInput);


function onFormInput (event) {
  nameOutputSpan.textContent = event.currentTarget.value.trim();
  if (nameOutputSpan.textContent === "") {
    nameOutputSpan.textContent = "Anonymous";
  }
}
