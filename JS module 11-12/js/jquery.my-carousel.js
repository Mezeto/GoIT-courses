(function ($) {
    $.fn.myCarousel = function () {
        var $leftUI = $('.carousel__arrow-left');
        var $rightUI = $('.carousel__arrow-right');
        var $elementList = $('.carousel__list');

        var pixelsOffset = 125;
        var currentLeftValue = 0;
        var elementCount = $elementList.find('li').length;
        var minimumOffset = - ((elementCount - 5) * pixelsOffset);
        var maximumOffset = 0;

        $leftUI.click(function () {
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += 125;
                $elementList.animate({ left: currentLeftValue + 'px'}, 500);
            }
        });

        $rightUI.click(function () {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 125;
                $elementList.animate({ left: currentLeftValue + 'px'}, 500);
            }
        });

        return this;
    };
})(jQuery);