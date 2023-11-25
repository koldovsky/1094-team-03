const textElements = document.querySelectorAll('.great-products__text');
const textToType = `Since our foundation, we've been crafting practical, modern, and stylish leather accessories at exceptional prices. Our mission is to make each of our customers happy by delivering quality leather goods that match their tastes and needs to the last stitch. Here at Leather Crafties, we design and manufacture our products with the expectation that they will last for years and improve with age, like a good wine. Our experienced craftsmen are true artisans who love to work on custom orders. No matter how complex and challenging it is, they are ready to meet and then exceed your expectations!`;

textElements.forEach(textElement => {
    let charIndex = 0;
    function typeText() {
        const currentText = textToType.substring(0, charIndex + 1);
        textElement.innerHTML = currentText;
        charIndex++;
        if (charIndex < textToType.length) {
            setTimeout(typeText, 10);
        }
    }
    typeText();
});