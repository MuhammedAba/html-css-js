const todoList = [];

function addTodoFirst() {
    const inputElement = document.querySelector('.js-name-input-first');
    const name = inputElement.value;
    todoList.push(name);
    console.log(todoList);
     inputElement.value= '';
}
