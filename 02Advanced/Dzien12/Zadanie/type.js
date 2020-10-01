let fontSize = 60

$('.interface').on('click', function () {
    if ($(this).hasClass('orange')) {
        // $('body').toggleClass('orange')
        // $('body').css({
        //     'background-color': 'orange'
        // })
        $('body').attr('class', 'orange')
    }
    if ($(this).hasClass('green')) {
        // $('body').toggleClass('green')
        // $('body').css({
        //     'background-color': 'green'
        // })
        $('body').attr('class', 'green')
    }

    if ($(this).hasClass('increase')) {
        fontSize++;
        $('.text').css({
            'font-size': fontSize + 'px'
        })
    }

    if ($(this).hasClass('move')) {
        fontSize++;
        $('.text').css({
            'transform': 'translate(' + fontSize + '%, -50%'
        })
    }
})