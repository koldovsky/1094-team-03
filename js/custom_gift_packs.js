document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.custom-gift-packs__form-items');
    form.addEventListener('submit', function (event) {
        validateForm(event);
    });
});

function validateForm(event) {
    const nameInput = document.querySelector('[name="Name"]');
    const emailInput = document.querySelector('[name="Email"]');

    if (!isValidInput(nameInput, /^[a-zA-Z]+$/)) {
        alert('Please enter a valid name with Latin letters only.');
        event.preventDefault();
    }

    if (!isValidInput(emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
}

function isValidInput(inputElement, regex) {
    const inputValue = inputElement.value.trim();
    return regex.test(inputValue);
}

