const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const iconHamburgerClose = document.querySelector('.fa-bars')
const iconHamburgerOpen = document.querySelector('.fa-times')

burger.addEventListener('click', function () {
    nav.classList.toggle('show');
    iconHamburgerClose.classList.toggle('show');
    iconHamburgerOpen.classList.toggle('show');
})