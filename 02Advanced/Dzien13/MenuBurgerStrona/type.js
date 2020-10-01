// Javascritp

// const burger = document.querySelector('.burger');
// const nav = document.querySelector('nav');
// const iconHamburgerClose = document.querySelector('.fa-bars')
// const iconHamburgerOpen = document.querySelector('.fa-times')
// const wrapper = document.querySelector('.wrapper');

// burger.addEventListener('click', function () {
//     nav.classList.toggle('show');
//     iconHamburgerClose.classList.toggle('show');
//     iconHamburgerOpen.classList.toggle('show');
//     wrapper.classList.toggle('show');
// })

const burger = document.querySelector('.burger');
const activeElement = document.querySelectorAll('.active')

burger.addEventListener('click', function () {
    for (i = 0; activeElement.length; i++) {
        activeElement[i].classList.toggle('show');
        console.log(activeElement[i])
    }
})