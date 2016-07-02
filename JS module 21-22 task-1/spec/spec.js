var pow = require('../js/main');

describe("какая-то проверка", function () {
	it("проверка возврата значения", function () {
		//prepare

		//act
		var result = pow();

		//assert
		expect(result).toBe('аргументы не определены');
	});
});