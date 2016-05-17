
$(function () {
    // Карусель
    $('.jcarousel').jcarousel();

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

    // custom selects
    $('select').niceSelect();

    // custom checkbox
    $(".custom-checkbox-js input[type='radio'], .custom-checkbox-js input[type='checkbox']").ionCheckRadio();


});//ready;








