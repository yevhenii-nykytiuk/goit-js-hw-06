const formInputValidation = document.getElementById("validation-input");


formInputValidation.addEventListener("blur", onInputValidation);

function onInputValidation() {
  if (formInputValidation.value.length === 6) {
    formInputValidation.classList.add("valid");
  } else {
    formInputValidation.classList.add("invalid");
  }
}



