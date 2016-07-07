define(
	 "Controller",
	 ['jQuery'],
	 function ($) {

		 return function Controller (model, view) {
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


	 }
);

