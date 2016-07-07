require.config({
	paths: {
		'jQuery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min'
	},
	shim: {
		'jQuery': {
			exports: 'jQuery'
		}
	}
});

require(
	['jQuery', 'model', 'View', 'Controller'],
	function ($, Model, View, Controller) {

		$(function () {

			var model = new Model();
			var view = new View(model);
			var controller = new Controller(model, view);

		});// Ready
	}
);
