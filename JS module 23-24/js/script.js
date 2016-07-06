function Model () {
	var self = this;

	self.data = ['test 1','test 2','test 3'];

	self.addItem = function (item) {
		if (item.length === 0) {
			return;
		}

		self.data.push(item);
	};
	self.removeItem = function (item) {
		var index = self.data.indexOf(item);

		if (index === -1) {
			return;
		}

		self.data.splice(index, 1);
	};
}

function View (model) {
	var self = this;

	function init () {
		var content = tmpl($('#tmpl-todo-list-wrap').html());

		$('body').append(content);
		self.elements = {
			addBtn: $('.todo-list__btn'),
			input: $('.todo-list__field'),
			listContainer: $('.todo-list__list')
		};
		self.renderList(model.data);
	}

	self.renderList = function (data) {
		var content = tmpl($('#tmpl-todo-list-item').html(), {data: data});
		self.elements.listContainer.html(content);
	};

	init();
}

function Controller (model, view) {
	view.elements.addBtn.on('click', addItem);
	view.elements.listContainer.on('click', '.todo-list__delete', removeItem);

	function addItem () {
		var newItem = view.elements.input.val();

		model.addItem(newItem);
		view.renderList(model.data);
		view.elements.input.val('');
	}

	function removeItem () {
		var item = $(this).attr('data-value');

		model.removeItem(item);
		view.renderList(model.data);
	}
}

$(function () {

	var model = new Model();
	var view = new View(model);
	var controller = new Controller(model, view);

	//console.log(view);



});// Ready