const formInputValidation = document.getElementById("validation-input");
const sumbolLength = formInputValidation.getAttribute("data-length");

formInputValidation.addEventListener("blur", onInputValidation);


function onInputValidation() {
  if (formInputValidation.value.length === Number(sumbolLength)) {
    formInputValidation.classList.add("valid");
    formInputValidation.classList.remove("invalid");
  } else {
    formInputValidation.classList.add("invalid");
    formInputValidation.classList.remove("valid");
  }
}



