let addButton = document.getElementById("btn");
let input = document.getElementById("input");

addButton.addEventListener("click", add);

function add() {
  let inputValue = input.value.trim();
  if (inputValue == "") {
    alert("Please write something to add task");
    return;
  }

  let ul = document.getElementById("tasklist");
  let listItem = document.createElement("li");

  let taskText = document.createElement("span");
  taskText.innerText = inputValue;

  ul.appendChild(listItem);

  input.value = "";

  let span = document.createElement("span");

  let removeButton = document.createElement("button");
  let renameButton = document.createElement("button");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox";

  checkbox.addEventListener("change", check);

  function check() {
    taskText.style.textDecoration = checkbox.checked ? "line-through" : "none";
  }

  removeButton.innerHTML = `<img src="delete.png" width="14px">`;
  removeButton.addEventListener("click", remove);

  renameButton.innerHTML = `<img src="edit.png" width="14px">`;
  renameButton.addEventListener("click", rename);

  listItem.appendChild(taskText);
  listItem.appendChild(span);
  span.appendChild(checkbox);
  span.appendChild(removeButton);
  span.appendChild(renameButton);

  function remove() {
    listItem.remove();
  }
  function rename() {
    let newName = prompt("Enter new task name : ", taskText.innerText);
    if (newName && newName.trim() !== "") {
      taskText.innerText = `${newName}`;
    } else {
      alert("Enter a valid task name");
    }
  }
}
