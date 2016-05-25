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
    var $inputFirsName = $('.form__first-name');
    var $inputLastName = $('.form__last-name');
    var $inputAddress = $('.form__address');

    var $help1 = $('.form__help-1');
    var $help2 = $('.form__help-2');
    var $help3 = $('.form__help-3');

    // Обработчик для input
    $inputFirsName.hover(function (e) {
        var target = e.target.className;
        target = '.' + target;

        if (target == $inputFirsName.selector) {
            $help1.show(200);
        }

    }, function (e) {
        var target = e.target.className;
        target = '.' + target;

        if (target == $inputFirsName.selector) {
            $help1.hide(200);
        }
    });

    // Обработчик для input
    $inputLastName.hover(function (e) {
        var target = e.target.className;
        target = '.' + target;

        if (target == $inputLastName.selector) {
            $help2.show(200);
        }

    }, function (e) {
        var target = e.target.className;
        target = '.' + target;

        if (target == $inputLastName.selector) {
            $help2.hide(200);
        }
    });

    // Обработчик для input
    $inputAddress.hover(function (e) {
        var target = e.target.className;
        target = '.' + target;

        if (target == $inputAddress.selector) {
            $help3.show(200);
        }

    }, function (e) {
        var target = e.target.className;
        target = '.' + target;

        if (target == $inputAddress.selector) {
            $help3.hide(200);
        }
    });

    var btnHelp = $('.form__btn-help');

    // Обработчик для кнопки
    btnHelp.on('click', function () {
        $help1.show(200);
        $help2.show(200);
        $help3.show(200);

    });
});//ready;
