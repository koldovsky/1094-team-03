const slides = [
    '<li class="carousel__slide"><img src="img/new-arrivals/old-classic-eather.jfif" alt="The Old Classic Leather Wallet"></li>',
    '<li class="carousel__slide"><img src="img/new-arrivals/prometheus-case.jfif" alt="The Prometheus Case"></li>' 
];

let currentSlideIndex = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.carousel__track');
    slideContainer.innerHTML = slides[currentSlideIndex];
    if (window.matchMedia('(min-width:768px)').matches) {
        const secondSlideIndex = currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;
        slideContainer.innerHTML += slides[secondSlideIndex];
        if (window.matchMedia('(min-width:1024px)').matches) {
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

// setInterval(nextSlide, 3000);
renderSlide();

const nextBtn = document.querySelector('.carousel__button right');
nextBtn.addEventListener('click', nextSlide);

const prevBtn = document.querySelector('.carousel__button left');
prevBtn.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);