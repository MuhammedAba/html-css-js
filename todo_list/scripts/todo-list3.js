const todoList = JSON.parse(localStorage.getItem("todoList")) || [];

function addTodo() {
    const inputName = document.querySelector(".todo-list-js");
    const inputDate = document.querySelector(".todo-date-js");
    const name = inputName.value;
    const dueDate = inputDate.value;
    if (name != ""){
        //todoList.push({name: name, dueDate: dueDate})
        todoList.push({name, dueDate});
        inputName.value = ""
        localStorage.setItem("todoList", JSON.stringify(todoList));

    }
    printList()
}
function printList() {
    let htmlList = ""
   for (let i=0; i<todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const {name, dueDate} = todoObject;
        const html = `
            <div> ${name}</div>
            <div>${dueDate}</div>
            <button onclick="
            todoList.splice(${i},1);
            localStorage.setItem('todoList', JSON.stringify(todoList));
            printList();
        " class="delete-todo-button">Delete</button>`
        htmlList += html
    }
    document.querySelector(".todo-lists-html").innerHTML = htmlList
}
document.addEventListener("DOMContentLoaded", printList);