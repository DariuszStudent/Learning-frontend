$('nav li').on('click', function () {
    const goToSection = '[data-section=' + $(this).attr('class') + ']';

    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - 59
    }, 1000)
})

$(document).on('scroll', function () {
    let scroll = $(document).scrollTop().toFixed();

    $('.info').text('Obecna pozycja scrolla to: ' + $(window).scrollTop() + 'px')

    if (scroll > 200) {
        $('.info').addClass('active');
    } else {
        $('.info').removeClass('active');
    }
})