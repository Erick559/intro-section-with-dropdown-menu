const openNavigationMenu = document.querySelector('.hamburger-menu');
const closeNavigationMenu = document.querySelector('.close-menu');
const mobileNavigationMenu = document.querySelector('.mobile-nav')
const overlay = document.querySelector('.overlay');


openNavigationMenu.addEventListener('click',openMenu);
closeNavigationMenu.addEventListener('click',closeMenu);


function openMenu() {
    overlay.classList.add('active');
    mobileNavigationMenu.classList.add('active');
}

function closeMenu() {
    overlay.classList.remove('active');
    mobileNavigationMenu.classList.remove('active');
}

