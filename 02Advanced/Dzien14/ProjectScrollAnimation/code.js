$(document).on('scroll', function () {
    const scrollValue = $(this).scrollTop()

    const windowHeight = $(window).height();

    const $firstPartShow = $('.art2').offset().top + $('.art2').outerHeight() - windowHeight;
    const $secondPartShow = $('.art3').offset().top + $('.art3').outerHeight() - windowHeight;
    const $thirdPartShow = $('.art4').offset().top + $('.art4').outerHeight() - windowHeight;

    const $fourthPartShow = $('.op1').offset().top + $('.op1').outerHeight() / 2.5 - windowHeight;
    const $fifthPartShow = $('.op2').offset().top + $('.op2').outerHeight() / 2.5 - windowHeight;


    if (scrollValue > $firstPartShow) {
        $('.art2').addClass('active');
    }

    if (scrollValue > $secondPartShow) {
        $('.art3').addClass('active');
    }

    if (scrollValue > $thirdPartShow) {
        $('.art4').addClass('active');
    }

    if (scrollValue > $fourthPartShow) {
        $('.op1').addClass('active');
    }

    if (scrollValue > $fifthPartShow) {
        $('.op2').addClass('active');
    }

    if (scrollValue == 0) {
        $('article').removeClass('active');
    }
})



