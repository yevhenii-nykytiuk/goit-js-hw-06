const loginForm = document.querySelector(".login-form");



loginForm.addEventListener("submit", onSubmitLoginForm);
 


 function onSubmitLoginForm (event) {

  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    alert("Поля пусті! Заповніть їх будь ласка!");
  } else {
    loginForm.reset();
    return console.log({
      email,
      password,
    })
  }
}

