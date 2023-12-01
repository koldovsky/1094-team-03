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
        const element=document.querySelector('.subscribe__form__email');
        element.style.backgroundColor = 'var(--color-for-main-text-on-dark-bg)';
    }
  }
