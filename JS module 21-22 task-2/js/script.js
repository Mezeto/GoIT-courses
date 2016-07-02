$(function () {
	'use strict';

	let objTests = {
		question1: '1. 2 + 2 = х, чему равен х ?',
		answer1_1: 2,
		answer1_2: 4,
		answer1_3: 3,
		question2: '2. 2 + 10 = х, чему равен х ?',
		answer2_1: 33,
		answer2_2: 23,
		answer2_3: 12,
		question3: '3. 7 - 2 = х, чему равен х ?',
		answer3_1: 5,
		answer3_2: 11,
		answer3_3: 31
	};

	let tests = JSON.stringify(objTests);
	localStorage.setItem('tests', tests);

	let testsStorage = localStorage.getItem('tests');
	testsStorage = JSON.parse(testsStorage);


	let tmplHtml = $('#tests').html();
	let content = tmpl(tmplHtml, testsStorage);

	$('.wrapper').append(content);

	$('#btn').click(() => {
		let $radioQuestion1 = $('form input[name="question-1"]:checked').val();
		let $radioQuestion2 = $('form input[name="question-2"]:checked').val();
		let $radioQuestion3 = $('form input[name="question-3"]:checked').val();

		if ($radioQuestion1 == testsStorage.answer1_2) {
			$('.checkAnswer1').html('Верно')
				 .css({color: 'green'});
		} else {
			$('.checkAnswer1').html('Ответ не верный')
				 .css({color: 'red'});
		}
		if ($radioQuestion2 == testsStorage.answer2_3) {
			$('.checkAnswer2').html('Верно')
				 .css({color: 'green'});
		} else {
			$('.checkAnswer2').html('Ответ не верный')
				 .css({color: 'red'});
		}
		if ($radioQuestion3 == testsStorage.answer3_1) {
			$('.checkAnswer3').html('Верно')
				 .css({color: 'green'});
		} else {
			$('.checkAnswer3').html('Ответ не верный')
				 .css({color: 'red'});
		}

		$('.overlay').show();
		$('.module-window').show();
	});

	$('.module-window__btn').click(() => {
		$('.module-window').hide();
		$('.overlay').hide();

		$('form input[type="radio"]').prop('checked', false);
	});

});//ready;
