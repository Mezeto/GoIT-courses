define(
	 "View",
	 ['jQuery'],
	 function ($) {

		 return function View (model) {
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

	 }
);
