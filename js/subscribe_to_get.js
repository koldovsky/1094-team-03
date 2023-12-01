document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('emailInput');
    emailInput.addEventListener('input', function () {
      validateEmail(emailInput.value);
    });
  });

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValidation = emailRegex.test(email)
    if (emailValidation==false){
        applyFocusStyles();
    }
  }

  emailInput.addEventListener('blur', function () {
    applyBlurStyles();
  });

  function applyFocusStyles() {
    const element = document.querySelector('.subscribe__form__email');
    element.style.outlinecolor = 'red';
  }
  
  function applyBlurStyles() {
    const element = document.querySelector('.subscribe__form__email');
    element.style.outlinecolor = ''; 
  }