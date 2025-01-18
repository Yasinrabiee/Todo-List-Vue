new Vue({
	el: "#app",

	data: {
		defaultTodo: localStorage.getItem(`todos`) == null ? 
		[] : JSON.parse(localStorage.getItem(`todos`)),
		newTodo: ''
	},

	methods: {
		addTodo: function() {
			if (this.newTodo !== '') {
				this.defaultTodo.push(this.newTodo);
				localStorage.setItem(`todos`, JSON.stringify(this.defaultTodo));
				this.newTodo = '';
			}
		},

		removeTodo: function(e) {
			e.target.remove();
			const todo = e.target.id;
			const getTodosBylocalStorage = JSON.parse(localStorage.getItem(`todos`));
			getTodosBylocalStorage.splice(todo, 1);
			localStorage.setItem(`todos`, JSON.stringify(getTodosBylocalStorage));
		}
	}
});