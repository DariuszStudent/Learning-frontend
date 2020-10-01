// $('.nav_me').on('click', function () {
//     $('body, html').animate({
//         scrollTop: $('.s1').offset().top - 60
//     }, 2000)
// })

// $('.nav_portfolio').on('click', function () {
//     $('body, html').animate({
//         scrollTop: $('.s2').offset().top - 60
//     }, 2000)
// })

// $('.nav_offer').on('click', function () {
//     $('body, html').animate({
//         scrollTop: $('.s3').offset().top - 60
//     }, 2000)
// })

// $('.nav_contact').on('click', function () {
//     $('body, html').animate({
//         scrollTop: $('.s4').offset().top - 60
//     }, 2000)
// })

$('nav li').on('click', function () {
    const goToSection = '[data-section=' + $(this).attr('class') + ']';

    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - 59
    }, 1000)
})