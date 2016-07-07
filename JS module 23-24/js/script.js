function Model () {
	var self = this;

	self.data = ['test 1','test 2','test 3'];

	self.addItem = function (item) {
		if (item.length === 0 || item === ' ') {
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

	self.editItem = function (currentItem, editedItem) {
		var index = self.data.indexOf(currentItem);

		self.data.splice(index, 1, editedItem);
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

	self.showEditor = function (that) {
		$('.todo-list__edit').hide();
		$(that).next().show()
				.find('input').focus();
	};

	self.closeEditor = function  (e) {
		if (!$(e.target).hasClass('todo-list__field-edit')) {
			$('.todo-list__edit').hide();
		}
	};
}

function Controller (model, view) {
	view.elements.addBtn.on('click', addItem);
	view.elements.listContainer.on('click', '.todo-list__delete', removeItem);
	view.elements.listContainer.on('dblclick', '.todo-list__item', showEditor);
	view.elements.listContainer.on('click', '.todo-list__btn-edit', editItem);
	$('html').on('click', view.closeEditor);

	var currentItem;

	function editItem (e) {
		var editedItem = $(this).siblings('.todo-list__field-edit').val();

		model.editItem(currentItem, editedItem);
		view.renderList(model.data);
		$('.todo-list__edit').hide();

		e.preventDefault();
	}

	function showEditor () {
		currentItem = $(this).find('span').attr('data-value');

		view.showEditor(this);
	}

	function addItem (e) {
		var newItem = view.elements.input.val();

		model.addItem(newItem);
		view.renderList(model.data);
		view.elements.input.val('');

		e.preventDefault();
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


});// Ready