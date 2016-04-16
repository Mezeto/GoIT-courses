//Задача - 2

var arrNames = [];

function fillArrNames () {

    for (var i = 0; i <= 4; i++) {
        arrNames[i] = prompt('Введите 5 имен');
    }
}

function checkAccess (ask) {

    for (var i = 0; i < arrNames.length; i++) {

        if (arrNames[i] == ask) {
            alert('Вы успешно вошли!');
            return;
        }
    }
    alert('Вам отказано в доступе!');
}

fillArrNames();

var ask = prompt('Введите имя');

checkAccess(ask);

