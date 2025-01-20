const todoList = [];

function addTodo() {
    const inputElement = document.querySelector(".todo-list-js");
    const name = inputElement.value;
    todoList.push(name)
    inputElement.value = " "
    printList()
}
function printList() {
    let htmlList = ""
   for (let i=0; i<todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p> ${todo}</p>`
        htmlList += html
    }
    document.querySelector(".todo-lists-html").innerHTML = htmlList
}