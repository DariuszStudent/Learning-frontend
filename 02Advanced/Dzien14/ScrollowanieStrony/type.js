// $('.me').on('click', function () {
//     $('body, html').animate({
//         scrollTop: $('.section1').offset().top - 80
//     }, 2000)
// })

$('nav a').on('click', function () {
    console.log($(this).attr('class'))
    const goToSection = '[data-section="' + $(this).attr('class') + '"]';
    console.log(goToSection)
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - 80
    })
})