const arrow = document.querySelector('.arrow');
const activeElement = document.querySelectorAll('.activeElement');

function activeElementToggle() {
    for (let i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.toggle('on');
    }
}

arrow.addEventListener('click', activeElementToggle)