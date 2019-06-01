var list = document.querySelector('#app ul');
var input = document.querySelector('#app input');
var button = document.querySelector('#app button');

// var todos = ['Tomar café', 'Estudar JS', 'Programar'];
var todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
	list.innerHTML = '';
	for (todo of todos) {
		var todoEl = document.createElement('li');
		var todoText = document.createTextNode(todo);

		var linkEl = document.createElement('a');
		var linkText = document.createTextNode('Excluir');

		linkEl.setAttribute('href', '#');

		var pos = todos.indexOf(todo);
		linkEl.setAttribute('onclick', 'removeTodo(' + pos + ')');

		linkEl.appendChild(linkText);

		todoEl.appendChild(todoText);
		todoEl.appendChild(linkEl);

		list.appendChild(todoEl);
	}
}

renderTodos();

function addTodo() {
	var todoText = input.value;

	todos.push(todoText);
	input.value = '';
	renderTodos();
	saveToStorage();
}

function removeTodo(idx) {
	todos.splice(idx, 1);
	renderTodos();
	saveToStorage();
}

button.onclick = addTodo;

function saveToStorage() {
	localStorage.setItem('todos', JSON.stringify(todos));
}
