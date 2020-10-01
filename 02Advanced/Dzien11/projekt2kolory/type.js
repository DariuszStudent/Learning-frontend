const firstElement = document.querySelector('.s1');
const secondElement = document.querySelector('.s2');

function changeColor() {
    // firstElement.classList.toggle('red');
    // secondElement.classList.toggle('red');
    this.classList.toggle('red');
}


firstElement.addEventListener('click', changeColor);
secondElement.addEventListener('click', changeColor);