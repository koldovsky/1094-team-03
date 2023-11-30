document.getElementById('header__menu--dropdown').addEventListener('click', showSubMenu);
document.getElementById('header__menu--dropdown.active').addEventListener('click', hideSubMenu);

function showSubMenu() {
    document.querySelector('.header__submenu__item').classList.add('active');
    console.log('showing Submenu');
    
}
function hideSubMenu() {
    document.querySelector('.header__submenu__item').classList.remove('active');
    console.log('hiding Submenu');
    
}