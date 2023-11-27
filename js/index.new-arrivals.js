const slides = [
   `<li class="carousel__slide">
        <a href="#" class="carousel__link">
            <img src="img/new-arrivals/old-classic-eather.jpg" alt="The Old Classic Leather Wallet">
        </a>
        <a href="#" class="carousel__title">The Old Classic Leather Wallet</a>
        <p class="carousel__price">$43,00</p>
        <button class="carousel__buy" type="button">Buy</button>
    </li>`,
    `<li class="carousel__slide">
        <a href="#" class="carousel__link">
            <img src="img/new-arrivals/prometheus-case.jpg" alt="The Prometheus Case">
        </a>
        <a href="#" class="carousel__title">The Prometheus Case</a>
        <p class="carousel__price">$107,00</p>
        <button class="carousel__buy" type="button">Buy</button>
    </li>`,
    `<li class="carousel__slide">
        <a href="#" class="carousel__link">
            <img src="img/new-arrivals/norma-leather-tote.jpg" alt="The Norma Leather Tote">
        </a>
        <a href="#" class="carousel__title">The Norma Leather Tote</a>
        <p class="carousel__price">$325,00</p>
        <button class="carousel__buy" type="button">Buy</button>
    </li>`,
    `<li class="carousel__slide">
        <a href="#" class="carousel__link">
            <img src="img/new-arrivals/morton-traveler.jpg" alt="The M.T. Morton Traveler">
        </a>
        <a href="#" class="carousel__title">The Norma Leather Tote</a>
        <p class="carousel__price">$370,00</p>
        <button class="carousel__buy" type="button">Buy</button>
    </li>`
];

let currentSlideIndex = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.carousel__track');
    slideContainer.innerHTML = slides[currentSlideIndex];
    if (window.matchMedia('(min-width:768px)').matches) {
        const secondSlideIndex = currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;
        slideContainer.innerHTML += slides[secondSlideIndex];
        if (window.matchMedia('(min-width:992px)').matches) {
            const thirdSlideIndex = secondSlideIndex + 1 >= slides.length ? 0 : secondSlideIndex + 1;
            slideContainer.innerHTML += slides[thirdSlideIndex];
        }
    }
}

function nextSlide() {
    currentSlideIndex = currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;
    renderSlide();
}

function prevSlide() {
    currentSlideIndex = currentSlideIndex - 1 < 0 ? slides.length - 1 : currentSlideIndex - 1;
    renderSlide();
}

renderSlide();

const nextBtn = document.querySelector('.carousel__btn-next');
nextBtn.addEventListener('click', nextSlide);

const prevBtn = document.querySelector('.carousel__btn-prev');
prevBtn.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);