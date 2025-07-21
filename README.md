# Frontend Mentor - Newsletter sign-up form with success message solution

This is my solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Screenshot](./screenshot.png)

### Links

- Solution URL: [My solution](https://www.frontendmentor.io/solutions/form-validation-with-vanilla-js-BuHNwKJ4ff)
- Live Site URL: [Live site URL](https://newsletter-signup-form-jiah.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript

### What I learned

I learned how to create a sign-up form using HTML, CSS, and vanilla JavaScript — especially how to implement custom form validation messages using the Constraint Validation API.

```js
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

    formWrapper.style.display = "none";
    successWrapper.style.display = "flex";
  }
});
```

### Continued development

Next time, I'd like to explore validating forms without using the built-in Constraint Validation API — by writing all the logic from scratch.

### Useful resources

- [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation#validating_forms_using_javascript)

## Author

- Frontend Mentor - [@JiaHe35354](https://www.frontendmentor.io/profile/JiaHe35354)
