$('nav li').on('click', function () {
    const goToSection = '[data-section=' + $(this).attr('class') + ']';

    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 1000)
})


function changeText() {
    const scrollPx = $(document).scrollTop().toFixed();
    const heighSection1 = $('.s1').height();
    const heighSection2 = $('.s2').height();
    const heighSection3 = $('.s3').height();
    const heighSection4 = $('.s4').height();

    const startSection1 = $('.s1').offset().top;
    const startSection2 = $('.s2').offset().top;
    const startSection3 = $('.s3').offset().top;
    const startSection4 = $('.s4').offset().top;

    $('.abacus').text(scrollPx + ' px');

    const toSection1 = heighSection1 + startSection1;
    const toSection2 = (heighSection2 + startSection2);
    const toSection3 = (heighSection3 + startSection3);
    const toSection4 = (heighSection4 + startSection4);

    $('.section1Px').text(toSection1.toFixed())
    $('.section2Px').text(toSection2.toFixed())
    $('.section3Px').text(toSection3.toFixed())
    $('.section4Px').text(toSection4.toFixed())

    if (scrollPx < toSection1 - 1) {
        $('.info').text("O mnie")
    } else if (scrollPx < toSection2 - 1) {
        $('.info').text('Portfolio')
    } else if (scrollPx < toSection3 - 1) {
        $('.info').text('Oferta')
    } else {
        $('.info').text('Kontakt')
    }
}

$(document).on('scroll', changeText)