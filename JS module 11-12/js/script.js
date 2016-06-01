$(function () {
    // карусель
    $('window').myCarousel();


    // шаблонизатор

    var tmplHtml = $('#tmpl').html();
    var data = {
        title: 'Персиков Игорь Сергеевич',
        photo: 'img/IMG_4432.jpg',
        education: 'Выпускник ЭИГМУ факультет экономики',
        phone: '+38(066)-37-37-677',
        profileVk: 'http://vk.com/id16594597',
        feedback: 'Если нужно, сверстаю Вам такую же страничку :)'
    };

    var content = tmpl(tmplHtml, data);

    $('body').append(content);

});//ready;