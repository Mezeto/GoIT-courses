var timer = document.querySelector('.timer');
timer = timer.innerHTML;

var ms = document.querySelector('.ms');
ms = ms.innerHTML;

var arr = timer.split(':');
var h = arr[0];
var m = arr[1];
var s = arr[2];

function timerUp () {
    ms++;
    if (ms == 99) {
        s++;
        ms = 0;
        if (s < 10) {
            s = '0' + s;
        }
    }
    if (s == 59) {
        s = '0' + 0;
        m++;
        if (m < 10) {
            m = '0' + m;
        }
    }
    if (m == 59) {
        m = '0' + 0;
        h++;
        if (h < 10) {
            h = '0' + h;
        }
    }

    document.querySelector('.timer').innerHTML = h+':'+m+':'+s;
    document.querySelector('.ms').innerHTML = ms * 10;
}

var btnStart = document.querySelector('.start');
var idTimer;
var idTimer2;

btnStart.addEventListener( 'click', function () {
    if (btnStart.getAttribute('data-start') == 'start') {
        idTimer = setInterval(timerUp, 10);
        btnStart.setAttribute('data-start', 'pause');
        btnStart.innerHTML = 'pause';

        return
    }
    if (btnStart.getAttribute('data-start') == 'pause') {
        clearInterval(idTimer);
        clearInterval(idTimer2);
        btnStart.setAttribute('data-start', 'cont');
        btnStart.innerHTML = 'cont..';

        return
    }
    idTimer2 = setInterval(timerUp, 10);
    btnStart.setAttribute('data-start', 'pause');
    btnStart.innerHTML = 'pause';
} );

var btnClean = document.querySelector('.clean');

btnClean.addEventListener('click', function () {
    clearInterval(idTimer);
    clearInterval(idTimer2);
    h = '0' + 0;
    m = '0' + 0;
    s = '0' + 0;
    ms = 0;

    btnStart.setAttribute('data-start', 'start');
    btnStart.innerHTML = 'start';

    document.querySelector('.timer').innerHTML = h+':'+m+':'+s;
    document.querySelector('.ms').innerHTML = ms;

} );
