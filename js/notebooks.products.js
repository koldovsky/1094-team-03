console.log("testing connection to JS");

let currentIndex = 0;
console.log(`current index = ${currentIndex}`);
const products = document.querySelectorAll('.notebooks-carousel__product');
console.log(`all products list ${products}`);
const totalProducts = products.length;
// console.log(`total amount of products ${totalProducts}`);
let totalItemsInViewPort = 0;
if(window.innerWidth < 767) {
    totalItemsInViewPort = 1;

} else if(window.innerWidth < 991) {
    totalItemsInViewPort = 2;
} else {
    totalItemsInViewPort = 3;
}
// console.log(`items displayed ${totalItemsInViewPort}`);

document.getElementById('next-button').addEventListener('click', showNext);
document.getElementById('prev-button').addEventListener('click', showPrev);

function showNext() {
    products[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalProducts;
    updateCarousel();
}

function showPrev() {
    products[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalProducts) % totalProducts;
    updateCarousel();
}

function updateCarousel() {
    for (let i = 0; i < totalProducts; i++) {
        products[i].classList.remove('active');
    }

    let startIdx = currentIndex;
    let endIdx = (currentIndex + totalItemsInViewPort - 1) % totalProducts;

    if (endIdx < startIdx) {
        endIdx += totalProducts;
    }

    for (let i = startIdx; i <= endIdx; i++) {
        let adjustedIdx = i % totalProducts;
        products[adjustedIdx].classList.add('active');
    }
}