const todoList = [];

function addTodo() {
    const inputElement = document.querySelector(".todo-list-js");
    const name = inputElement.value;
    todoList.push(name)
    inputElement.value = " "
    printList()
}
function printList() {
    let p = document.querySelector(".todo-lists-p");
    p.innerText = " "
   for (let i=0; i<todoList.length; i++) {
        const todo = todoList[i];
        p.innerText += todo + "\n" ;
    }
}