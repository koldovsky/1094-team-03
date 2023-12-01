// let dropDown = document.getElementById('header__menu--dropdown');

// dropDown.addEventListener('click', function() {
//     document.querySelector('.header__submenu__item').classList.toggle('active');
//     console.log('showing Submenu');
// });

const hoverElement = document.getElementById('hoverArea');
const modalPopup = document.getElementById('modal');

hoverElement.addEventListener('mouseover', function() {
    modalPopup.style.display = 'flex';
})

hoverElement.addEventListener('mouseout', function() {
    modalPopup.style.display = 'none';
})

//burger menu
const burgerIcon = document.querySelector('.header__burger-menu');

burgerIcon.addEventListener('click', function() {
    document.querySelector('.header__nav').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
})