const slides = [
    `<figure class="gift-pack__card">
            <img class="gift-pack__card-img" src="img/gift-packs/big-floral.webp" alt="The Big Floral Pack">
            <figcaption class="gift-pack__card-discription">The Big Floral Pack</figcaption>
            <figcaption class="gift-pack__card-price">$100</figcaption>
        </figure>`,
    `<figure class="gift-pack__card">
            <img class="gift-pack__card-img" src="img/gift-packs/autumn-landscape.webp"
                alt="The Autumn Landscape Pack">
            <figcaption class="gift-pack__card-discription">The Autumn Landscape Pack</figcaption>
            <figcaption class="gift-pack__card-price">$120</figcaption>
        </figure>`,
    `<figure class="gift-pack__card">
            <img class="gift-pack__card-img" src="img/gift-packs/urban-view.webp" alt="The Urban View Pack">
            <figcaption class="gift-pack__card-discription">The Urban View Pack</figcaption>
            <figcaption class="gift-pack__card-price">$150</figcaption>
        </figure>`,
    `<figure class="gift-pack__card">
            <img class="gift-pack__card-img" src="img/gift-packs/big-vintage.webp" alt="The Big Vintage Pack">
            <figcaption class="gift-pack__card-discription">The Big Vintage Pack</figcaption>
            <figcaption class="gift-pack__card-price">$200</figcaption>
        </figure>`,
    `<figure class="gift-pack__card">
            <img class="gift-pack__card-img" src="img/gift-packs/summer-village.webp" alt="The Summer Village Pack">
            <figcaption class="gift-pack__card-discription">The Summer Village Pack</figcaption>
            <figcaption class="gift-pack__card-price">$150</figcaption>
        </figure>`,
    `<figure class="gift-pack__card">
            <img class="gift-pack__card-img" src="img/gift-packs/exotic-leather.webp" alt="Exotic Leather Pack">
            <figcaption class="gift-pack__card-discription">Exotic Leather Pack</figcaption>
            <figcaption class="gift-pack__card-price">$120</figcaption>
        </figure>`
];

let currentSlideIdx = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.gift-packs-carousel__slide-container');
    slideContainer.innerHTML = slides[currentSlideIdx];
    if (window.matchMedia('(min-width:768px)').matches) {
        const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width:1024px)').matches) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
            slideContainer.innerHTML = slideContainer.innerHTML + slides[thirdSlideIdx] + slides[fourthSlideIdx];
        }
    }
}

renderSlide();

function nextSlide() {
    currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderSlide();
}

function prevSlide() {
    currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
}


const nextBtn = document.querySelector('.gift-packs-carousel__btn-next');
nextBtn.addEventListener('click', nextSlide);

const prevBtn = document.querySelector('.gift-packs-carousel__btn-prev');
prevBtn.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);