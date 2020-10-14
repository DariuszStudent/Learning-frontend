// Parametry 
let activeElement = 0;

// Pobieramy cztery elementy na których pracujemy
const colorImgHtml = document.querySelector('.color');
const grayImgHtml = document.querySelector('.gray');
const namesHtml = document.querySelector('.member h1');
const professionsHtml = document.querySelector('.member h2');

// Informacje w tablicach o elementach podmiotu
const colorImages = ['img/s1.png', 'img/s2.png', 'img/s3.png'];
const grayImages = ['img/s1a.png', 'img/s2a.png', 'img/s3a.png'];
const names = ['Lena Wroniak', 'Dariusz Wroniak', 'Piotr Wroniak'];
const professions = ['Programista JS', 'Web developer', 'UX i UI Designer'];

function changeElement() {
    activeElement++;
    if (activeElement == names.length) {
        activeElement = 0;
    }

    colorImgHtml.src = colorImages[activeElement];
    grayImgHtml.src = grayImages[activeElement];
    namesHtml.textContent = names[activeElement];
    professionsHtml.textContent = professions[activeElement];
    // setTimeout(changeElement, 4000)
}

// changeElement()

setInterval(changeElement, 4000)