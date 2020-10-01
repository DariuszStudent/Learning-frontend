const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//     console.log("kilk!")
// })

// btn.addEventListener('mouseover', function () {
//     console.log("najechanie")
// })

// btn.addEventListener('mousemove', function () {
//     console.log("ruch myszką")
// })

let clicksNumber = 0;
btn.addEventListener('click', function () {
    // clicksNumber += 1;
    clicksNumber++;
    console.log("klik numer: ", clicksNumber)
})

const paragraph = document.querySelector('p')

btn.addEventListener('click', function () {
    paragraph.style.opacity = 1;
})

let firstNumer;
let secondNumber;
const body = document.querySelector('body');

btn.addEventListener('click', function () {
    body.style.backgroundColor = '#333333';
    paragraph.style.fontSize = '90px'
    clicksNumber++;
})