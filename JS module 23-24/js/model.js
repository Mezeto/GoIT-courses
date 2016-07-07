define(
	 "Model",
	 ['jQuery'],
	 function ($) {

		 return function Model () {
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

	 }
);
