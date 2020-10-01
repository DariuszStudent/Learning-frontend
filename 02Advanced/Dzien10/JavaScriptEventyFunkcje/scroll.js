// window.addEventListener('scroll', function () {
//     console.log('skrolujesz')
// })

// konkatenacja
// document.addEventListener('scroll', function () {
//     console.log('scrolujesz o ' + window.scrollY + 'px');
// })

// function showScrollSize() {
//     console.log('scrolujesz o ' + window.scrollY + 'px');
// }

// window.addEventListener('scroll', showScrollSize);

const spanResult = document.querySelector('span');

document.addEventListener('scroll', function () {
    spanResult.textContent = window.scrollY;
})