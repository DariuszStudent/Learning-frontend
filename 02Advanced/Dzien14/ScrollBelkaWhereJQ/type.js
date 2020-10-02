$('nav li').on('click', function () {
    const goToSection = '[data-section=' + $(this).attr('class') + ']';

    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - 59
    }, 1000)
})

function changeText() {
    const scrollPx = $(document).scrollTop();
    const heighSection1 = $('.s1').height();
    const heighSection2 = $('.s2').height();
    const heighSection3 = $('.s3').height();

    const startSection2 = $('.s2').offset().top;
    const startSection3 = $('.s3').offset().top;

    if (scrollPx < heighSection1 + 69) {
        $('.info').text("O mnie")
    } else if (scrollPx < heighSection2 + startSection2 + 69) {
        $('.info').text('Portfolio')
    } else if (scrollPx < heighSection3 + startSection3) {
        $('.info').text('Oferta')
    } else {
        $('.info').text('Kontakt')
    }
}

$(document).on('scroll', changeText)