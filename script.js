const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos') // referencing HTML ID's

function addTodo(todo) {
    let todoText = input.nodeValue;

    if(todo) {
        todoText = todo.text
    }
     if(todoText) {
         const todoEl = document.getElementById('li');
         if(todo && todo.completed) {
             todoEl.innerText = todoText
         }
     }
}