document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("emailInput");
  emailInput.addEventListener("input", function () {
    validateEmail(emailInput.value);
  });
});

document.querySelector(".subscribe__form").addEventListener("submit", function (event) {
  event.preventDefault();
  subscribe(emailInput.value);
});

var emailList = [];

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function subscribe(subscribePush){
    if (validateEmail(subscribePush)){
      subscribePush.preventDefault();
      var emailInput = document.getElementById('emailInput');
      var emailValue = emailInput.value;
      emailList.push(emailValue);
      emailInput.value = '';
      console.log("Thanks for subscribe Handmade Shop dear" + emailList);
    }
    else{
      console.log("Wrong email adress" + emailList);
    }
}
