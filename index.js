// Open Mobile Navigation
const openNavigationMenu = document.querySelector('.hamburger-menu');
const closeNavigationMenu = document.querySelector('.close-menu');
const mobileNavigationMenu = document.querySelector('.mobile-nav')
const overlay = document.querySelector('.overlay');

openNavigationMenu.addEventListener('click',openMenu);
closeNavigationMenu.addEventListener('click',closeMenu);

// DropDown
const navListItem = document.querySelectorAll('.nav-list-item')
navListItem.forEach(item => {
    const navListTitle = item.querySelector('.nav-list-item-title');
    const dropDown = item.querySelector('.nav-list-item-list');

    navListTitle.addEventListener('click',()=>{
        item.classList.toggle('active');
    })
})


function openMenu() {
    overlay.classList.add('active');
    mobileNavigationMenu.classList.add('active');
}

function closeMenu() {
    overlay.classList.remove('active');
    mobileNavigationMenu.classList.remove('active');
}