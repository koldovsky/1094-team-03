document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("emailInput");
  emailInput.addEventListener("input", function () {
    validateEmail(emailInput.value);
  });
});
var emailList = [];
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)===true) {
    event.preventDefault();
    var emailInput = document.getElementById("emailInput");
    var emailValue = emailInput.value;
    emailList.push(emailValue);
    console.log("Thanks for subscribe Handmade Shop dear" + emailList);
  }
  return emailRegex.test(email);
}
