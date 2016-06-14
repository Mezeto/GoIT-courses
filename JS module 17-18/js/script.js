$(function () {
    // Поиск и вывод на страницу картинок
    var tmplHtml = $('#tmpl').html();

    $('.search__btn').click(function (e) {
        var search__field = $('.search__field');
        var query = search__field.val();

        $('main').html('');
        search__field.val('')
                     .blur();

        $.ajax({
            method: 'GET',
            url: 'https://pixabay.com/api/',
            data: 'key=2701940-50686df15687ed4665dfca084&q=' + query + '&image_type=photo&lang=ru,en',
            success: function (obj) {
                for (var i = 0; i < obj.hits.length; i++) {
                    var objImages = obj.hits[i];
                    var content = tmpl(tmplHtml, objImages);

                    $('main').append(content);
                }
            }
        });

        e.preventDefault();
    });


    // Создание прототипного наследования
    function Human () {
        this.name = 'Vasya';
        this.age = 21;
        this.sex = 'man';
        this.stature = 170;
        this.weight = 75;
    }

    function Worker () {
        var plan = 25;

        this.workingPlace = 'Заборостроитель';
        this.salary = 2000;
        this.working = function () {
            plan--;
            alert('Осталось постороить еще ' + plan + ' км забора');
        };
    }

    function Student () {
        this.placeStudy = 'КПИ';
        this.scholarship = 900;
        this.watchingTV = function () {
            alert('Сегодня смотрим Интернов 122 серию');
        };
    }

    Worker.prototype = new Human();
    Student.prototype = new Human();

    var worker = new Worker();
    var student = new Student();

    console.log(worker);
    console.log(student);

});//ready;
