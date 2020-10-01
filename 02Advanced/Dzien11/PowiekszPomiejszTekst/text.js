const bigger = document.querySelector('.bigger');
const smaller = document.querySelector('.smaller');
const paragraph = document.querySelector('p')

let textSize = 20;

paragraph.style.fontSize = textSize + 'px';

function fontBigger() {
    textSize++;
    paragraph.style.fontSize = textSize + 'px';
    paragraph.style.backgroundColor = 'gray'
}

function fontSmaller() {
    textSize--;
    paragraph.style.fontSize = textSize + 'px';
    paragraph.style.backgroundColor = 'yellow'
}

bigger.addEventListener('click', fontBigger)
smaller.addEventListener('click', fontSmaller)