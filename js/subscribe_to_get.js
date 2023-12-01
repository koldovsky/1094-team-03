document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("emailInput");
  
    emailInput.addEventListener("input", function () {
      validateEmail(emailInput.value);
    });
  
    emailInput.addEventListener("blur", function () {
      applyBlurStyles();
    });
  });
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValidation = emailRegex.test(email);
  
    if (!emailValidation) {
      applyFocusStyles(true);
    } else {
      applyFocusStyles(false);
    }
  }
  
  function applyFocusStyles(hasError) {
    const element = document.querySelector(".subscribe__form__email");
  
    if (hasError) {
      element.style.outlineColor = "red";
    } else {
      element.style.outlineColor = "";
    }
  }
  
  function applyBlurStyles() {
    const element = document.querySelector(".subscribe__form__email");
    element.style.outlineColor = "";
  }
  