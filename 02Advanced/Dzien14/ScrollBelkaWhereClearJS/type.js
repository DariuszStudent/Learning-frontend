$('nav li').on('click', function () {
    const goToSection = '[data-section=' + $(this).attr('class') + ']';

    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - 59
    }, 1000)
})


function changeText() {
    const scrollPx = window.scrollY;
    const heighSection1 = document.querySelector('.s1').clientHeight;
    const heighSection2 = document.querySelector('.s2').clientHeight;
    const heighSection3 = document.querySelector('.s3').clientHeight;
    const heighSection4 = document.querySelector('.s4').clientHeight;

    const startSection1 = document.querySelector('.s1').offsetTop;
    const startSection2 = document.querySelector('.s2').offsetTop;
    const startSection3 = document.querySelector('.s3').offsetTop;
    const startSection4 = document.querySelector('.s4').offsetTop;

    document.querySelector('.abacus').textContent = scrollPx + ' px';

    const toSection1 = heighSection1 + startSection1;
    const toSection2 = heighSection2 + startSection2;
    const toSection3 = heighSection3 + startSection3;
    const toSection4 = heighSection4 + startSection4;

    const divInfo = document.querySelector('div.info');

    document.querySelector('.section1Px').textContent = toSection1;
    document.querySelector('.section2Px').textContent = toSection2;
    document.querySelector('.section3Px').textContent = toSection3;
    document.querySelector('.section4Px').textContent = toSection4;

    if (scrollPx < toSection1 - 60) {
        divInfo.textContent = 'O mnie';
    } else if (scrollPx < toSection2 - 60) {
        divInfo.textContent = 'Portfolio';
    } else if (scrollPx < toSection3 - 60) {
        divInfo.textContent = 'Oferta';
    } else {
        divInfo.textContent = 'Kontakt';
    }
}

window.addEventListener('scroll', changeText);