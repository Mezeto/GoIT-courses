$(function () {
    //************* TABS ***************
    var $tabs = $('.tabs');

    $tabs.on('click', function (e) {
        var $li1 = $('#tabs__li-tab-1');
        var $li2 = $('#tabs__li-tab-2');
        var $li3 = $('#tabs__li-tab-3');

        var $div1 = $('.tabs__div-tab-1');
        var $div2 = $('.tabs__div-tab-2');
        var $div3 = $('.tabs__div-tab-3');

        var target = e.target.id;
        target = '#' + target;

        // Первый ТАБ
        if (target == $li1.selector) {
            $div3.hide();
            $div2.hide();
            $div1.show();

            $li3.removeClass('tabs__li-tab-1--click');
            $li2.removeClass('tabs__li-tab-1--click');
            $li1.removeClass('tabs__li-tab-1--default');
            $li1.addClass('tabs__li-tab-1--click');

           return;
        }

        // Второй ТАБ
        if (target == $li2.selector) {
            $div1.hide();
            $div3.hide();
            $div2.show();

            $li1.removeClass('tabs__li-tab-1--click');
            $li1.removeClass('tabs__li-tab-1--default');
            $li3.removeClass('tabs__li-tab-1--click');
            $li2.addClass('tabs__li-tab-1--click');

            return;
        }

        // Третий ТАБ
        if (target == $li3.selector) {
            $div1.hide();
            $div2.hide();
            $div3.show();

            $li1.removeClass('tabs__li-tab-1--click');
            $li1.removeClass('tabs__li-tab-1--default');
            $li2.removeClass('tabs__li-tab-1--click');
            $li3.addClass('tabs__li-tab-1--click');
        }
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