document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("emailInput");
    emailInput.addEventListener("input", function () {
      validateEmail(emailInput.value);
    });
  });
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  