// "use strict"

const todos = [];

const form = document.querySelector(".todo_form");
const todo = document.querySelector(".todo_input");
const container = document.querySelector(".todo_items_container");

form.addEventListener("submit", handleCreate);

function renderTodos() {
  container.innerHTML = "";
  todos.forEach((item, index) => {
    container.innerHTML += `
      <li class="flex justify-between items-center p-2 border-b">
        <span>${item}</span>
        <div>
          <button onclick="handleUpdate(${index})">
            <i class="fa fa-edit text-green-500 text-sm"></i>
          </button>
          <button onclick="handleDelete(${index})">
            <i class="fa fa-trash text-red-500 text-sm"></i>
          </button>
        </div>
      </li>`;
  });
}

function handleCreate(e) {
  e.preventDefault();
  todos.push(todo.value);
  todo.value = "";
  renderTodos();
}

function handleDelete(index) {
  todos.splice(index, 1);
  renderTodos();
}

function handleUpdate(index) {
  const updatedTodo = prompt("Enter the updated value", todos[index]);
  todos[index] = updatedTodo;
  renderTodos();
}
