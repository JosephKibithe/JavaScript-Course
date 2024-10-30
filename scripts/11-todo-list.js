/*
create array to store todos
when we click add
get text from textbox
add it to array
console.log the array

V2
Loops= run code over and over
*/

const todoList = []; //epmty array

function renderTodoList() {
  let todolistHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todolistHtml += html;
  }
  console.log(todolistHtml);
  document.querySelector(".js-todo-list").innerHTML = todolistHtml;
}
function addTodo() {
  const inputElements = document.querySelector(".input-elem");
  const InputName = inputElements.value;

  if (inputName.trim() !== "") {
    // Avoid empty entries
    todoList.push(InputName);
    console.log(todoList);
    inputElements.value = "";
    renderTodoList();
  }
}
function handleCostKey(event) {
  if (event.key === "Enter") console.log(event.key);
  {
    addTodo();
  }
}
