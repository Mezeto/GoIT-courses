function pow(base, exp) {
	var result = base;

	for (var i = 1; i < exp; i++) {
		result *= base;
	}

	return result || 'аргументы не определены';
}

//var base = prompt('Введите базовое число');
//var exp = prompt('Введите степень');

//console.log( pow(base, exp) );

module.exports = pow;
