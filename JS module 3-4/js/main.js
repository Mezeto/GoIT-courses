var obj = {
    // создает элемент и к нему внутренний HTML
    create : function (elem, text) {
        var newTag = document.createElement(elem);
        newTag.innerHTML = text || '';

        return newTag
    },
    // поиск элемента
    find : function (elem) {
        var a = document.querySelector(elem);

        return a;
    },
    // вставляет элемент в родителя
    insert : function (elem, parent) {
        var a = document.querySelector(parent);
        a.appendChild(elem)
    }
};


var parentElem;
var elem;

elem = obj.create('div');
elem.classList.add('wrapper');
parentElem = obj.find('body');
parentElem.insertBefore(elem, parentElem.firstChild);

elem = obj.create('h1', 'Тест по программированию');
obj.insert(elem, '.wrapper');

elem = obj.create('form');
obj.insert(elem, '.wrapper');

//block 1
elem = obj.create('div');
elem.classList.add('question-1');
obj.insert(elem, 'form');

elem = obj.create('h2', '1. Вопрос №1');
elem.classList.add('question-1__title');
obj.insert(elem, '.question-1');

elem = obj.create('ul');
elem.classList.add('question-1__ul');
obj.insert(elem, '.question-1');

elem = obj.create('li', 'Вариант ответа №1');
elem.classList.add('question-1__answer-1');
obj.insert(elem, '.question-1__ul');

elem = obj.create('input');
elem.setAttribute('type', 'checkbox');
parentElem = obj.find('.question-1__answer-1');
parentElem.insertBefore(elem, parentElem.firstChild);

elem = obj.create('li', 'Вариант ответа №2');
elem.classList.add('question-1__answer-2');
obj.insert(elem, '.question-1__ul');

elem = obj.create('input');
elem.setAttribute('type', 'checkbox');
parentElem = obj.find('.question-1__answer-2');
parentElem.insertBefore(elem, parentElem.firstChild);

elem = obj.create('li', 'Вариант ответа №3');
elem.classList.add('question-1__answer-3');
obj.insert(elem, '.question-1__ul');

elem = obj.create('input');
elem.setAttribute('type', 'checkbox');
parentElem = obj.find('.question-1__answer-3');
parentElem.insertBefore(elem, parentElem.firstChild);


//block 2
elem = obj.create('div');
elem.classList.add('question-2');
obj.insert(elem, 'form');

elem = obj.create('h2', '2. Вопрос №2');
elem.classList.add('question-2__title');
obj.insert(elem, '.question-2');

elem = obj.create('ul');
elem.classList.add('question-2__ul');
obj.insert(elem, '.question-2');

elem = obj.create('li', 'Вариант ответа №1');
elem.classList.add('question-2__answer-1');
obj.insert(elem, '.question-2__ul');

elem = obj.create('input');
elem.setAttribute('type', 'checkbox');
parentElem = obj.find('.question-2__answer-1');
parentElem.insertBefore(elem, parentElem.firstChild);

elem = obj.create('li', 'Вариант ответа №2');
elem.classList.add('question-2__answer-2');
obj.insert(elem, '.question-2__ul');

elem = obj.create('input');
elem.setAttribute('type', 'checkbox');
parentElem = obj.find('.question-2__answer-2');
parentElem.insertBefore(elem, parentElem.firstChild);

elem = obj.create('li', 'Вариант ответа №3');
elem.classList.add('question-2__answer-3');
obj.insert(elem, '.question-2__ul');

elem = obj.create('input');
elem.setAttribute('type', 'checkbox');
parentElem = obj.find('.question-2__answer-3');
parentElem.insertBefore(elem, parentElem.firstChild);

//block 3
elem = obj.create('div');
elem.classList.add('question-3');
obj.insert(elem, 'form');

elem = obj.create('h2', '3. Вопрос №3');
elem.classList.add('question-3__title');
obj.insert(elem, '.question-3');

elem = obj.create('ul');
elem.classList.add('question-3__ul');
obj.insert(elem, '.question-3');

elem = obj.create('li', 'Вариант ответа №1');
elem.classList.add('question-3__answer-1');
obj.insert(elem, '.question-3__ul');

elem = obj.create('input');
elem.setAttribute('type', 'checkbox');
parentElem = obj.find('.question-3__answer-1');
parentElem.insertBefore(elem, parentElem.firstChild);

elem = obj.create('li', 'Вариант ответа №2');
elem.classList.add('question-3__answer-2');
obj.insert(elem, '.question-3__ul');

elem = obj.create('input');
elem.setAttribute('type', 'checkbox');
parentElem = obj.find('.question-3__answer-2');
parentElem.insertBefore(elem, parentElem.firstChild);

elem = obj.create('li', 'Вариант ответа №3');
elem.classList.add('question-3__answer-3');
obj.insert(elem, '.question-3__ul');

elem = obj.create('input');
elem.setAttribute('type', 'checkbox');
parentElem = obj.find('.question-3__answer-3');
parentElem.insertBefore(elem, parentElem.firstChild);


elem = obj.create('input');
elem.setAttribute('type', 'submit');
elem.setAttribute('value', 'Проверить мои результаты');
elem.classList.add('btn');
elem.classList.add('btn-primary');
obj.insert(elem, 'form');