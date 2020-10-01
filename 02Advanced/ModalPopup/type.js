const activeElements = document.querySelectorAll('.active');

for (i = 0; i < activeElements.length; i++) {
    activeElements[i].addEventListener('click', function () {
        document.querySelector('.modal_wrap').classList.toggle('show_hide');
    })
}