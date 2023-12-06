document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("emailInput");
  emailInput.addEventListener("input", function () {
    validateEmail(emailInput.value);
  });

  document
    .querySelector(".subscribe__form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      subscribe(event);
    });
});

var emailList = [];

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function subscribe(event) {
  event.preventDefault();

  var emailInput = document.getElementById("emailInput");
  var emailValue = emailInput.value;

  if (validateEmail(emailValue)) {
    emailList.push(emailValue);
    emailInput.value = "";
    alert(
      "Thanks for subscribing to Handmade Shop, dear! Email List: " + emailValue,
    );
  } else {
    alert(
      "Wrong email address. Subscription failed. Email List: " + emailValue + " All emails:" + emailList,
    );
  }
}
