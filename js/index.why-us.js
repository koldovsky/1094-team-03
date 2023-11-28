const slides = [
    `<div><img src="img/why-us/hand-made.svg" alt="hand-made"><h5 class="whyus__proof">Handmade</h5><p class="whyus__cool">Our craftsmen work with each client individually to create bespoke one-of-a-kind product
      that reflects their unique taste.</p>
</div>`,
    `<div>
  <img src="img/why-us/top-quality-leather.svg" alt="top-quality-leather">
    <h5 class="whyus__proof">Top-Quality Leather</h5>
    <p class="whyus__cool">We want our work to last for generations, and therefore use only the highest quality
      leather and findings.</p>
</div>`,
    `<div>
  <img src="img/why-us/irish-waxed-linen.svg" alt="irish-waxed-linen">
    <h5 class="whyus__proof">Irish Waxed Linen</h5>
    <p class="whyus__cool">We've sourced the finest quality European linen and other contemporary materials for our
      products.</p>
</div>`,
    `<div>
  <img src="img/why-us/craftsmanship.svg" alt="craftsmanship">
    <h5 class="whyus__proof">Craftsmanship</h5>
    <p class="whyus__cool">We combine traditional techniques and modern manufacturing technologies to create exquisite
      yet durable pieces.</p>
</div>`
];

let currentSlideIndx = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.whyus__container__inner');
    slideContainer.innerHTML = slides[currentSlideIndx];
    if (window.matchMedia('(min-width:768px)').matches) {
        const secondSlideIndex = currentSlideIndx + 1 >= slides.length ? 0 : currentSlideIndx + 1;
        slideContainer.innerHTML += slides[secondSlideIndex];
    }
}

function nextSlide() {
    currentSlideIndx = currentSlideIndx + 1 >= slides.length ? 0 : currentSlideIndx + 1;
    renderSlide();
}

function prevSlide() {
    currentSlideIndx = currentSlideIndx - 1 < 0 ? slides.length - 1 : currentSlideIndx - 1;
    renderSlide();
}

renderSlide();

const nextBtn = document.querySelector('.whyus__carousel__btn-next');
nextBtn.addEventListener('click', nextSlide);

const prevBtn = document.querySelector('.whyus__carousel__btn-prev');
prevBtn.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);