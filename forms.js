const ul = document.querySelector("ul");
const todo = document.querySelector("#todo");
let todoItems = [];

document.querySelector("#todoListForm").addEventListener("submit", function(event) {
    event.preventDefault();

    todoItems.push(todo.value);

    const template = todoItems.map(item => 
    `
        <li>${item}</li>
    `);

ul.innerHTML = template.join("");
})