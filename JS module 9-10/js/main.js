
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

    // Выпадающая меню
    var $navLi = $('nav li');

    // * добавляем стрелочки
    $navLi.find('ul').eq(0).siblings('a').addClass('arrow-down');
    $('.sub-menu').find('ul').siblings('a').addClass('arrow');

    
    $navLi.hover(function () {
        if ($(this).find('ul').eq(0)) {
            $(this).find('ul').eq(0).slideDown(200)
        }
    }, function () {
        if ($(this).find('ul').eq(0)) {
            $(this).find('ul').eq(0).slideUp(200)
        }
    });

});//ready;








