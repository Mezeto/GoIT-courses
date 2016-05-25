$(function () {
    //************* TABS ***************
    var $tabs = $('.tabs > ul > li > span');

    $tabs.eq(0).addClass('active');
    $tabs.next().eq(0).show();

    $tabs.on('click', function () {
        $tabs.removeClass('active');
        $(this).addClass('active');
        $tabs.next().hide();
        $(this).next().show();
    });

    //*********** FORM **************
    var $input = $('.form input');

    $input.hover(function () {
        $(this).next().show(200);

    }, function () {
        $(this).next().hide(200);
    });


    var btnHelp = $('.form__btn-help');

    // Обработчик для кнопки
    btnHelp.on('click', function () {
        $input.next().show(200);

        return false
    });
});//ready;
