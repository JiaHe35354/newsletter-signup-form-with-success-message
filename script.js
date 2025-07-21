const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector(".error-text");
const userEmail = document.getElementById("user-email");
const btnSignup = document.querySelector(".btn-signup");
const btnDismiss = document.querySelector(".btn-dismiss");

const formWrapper = document.querySelector(".wrapper-form");
const successWrapper = document.querySelector(".wrapper-success");

let formSubmitted = false;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formSubmitted = true;

  if (!email.validity.valid) {
    showError();
    email.classList.add("error");
    btnSignup.classList.remove("btn-valid");
    return;
  } else {
    emailError.textContent = "";
    email.classList.remove("error");
    btnSignup.classList.add("btn-valid");

    userEmail.textContent = email.value;

    formWrapper.style.display = "none";
    successWrapper.style.display = "flex";
  }
});

email.addEventListener("input", () => {
  if (email.validity.valid) {
    btnSignup.classList.add("btn-valid");
  } else {
    btnSignup.classList.remove("btn-valid");
  }

  if (!formSubmitted) return;

  if (email.validity.valid) {
    emailError.textContent = "";
    email.classList.remove("error");
  } else {
    showError();
    email.classList.add("error");
  }
});

btnDismiss.addEventListener("click", function () {
  email.value = "";
  btnSignup.classList.remove("btn-valid");
  formWrapper.style.display = "flex";
  successWrapper.style.display = "none";
  formSubmitted = false;
});

function showError() {
  if (email.validity.valueMissing || email.validity.typeMismatch) {
    emailError.textContent = "Valid email required";
  }

  if (email.validity.tooShort) {
    emailError.textContent = "Please enter at least 8 characters";
  }
}
