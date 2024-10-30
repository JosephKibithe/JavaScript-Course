/*
create array to store todos
when we click add
get text from textbox
add it to array
console.log the array

V2
Loops= run code over and over
*/

const todoList = ["clap", "sing"]; //epmty array
function renderTodoList() {
  let todolistHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}<p>`;
    todolistHtml += html;
  }
  console.log(todolistHtml);
  document.querySelector(".js-todo-list").innerHTML = todolistHtml;
}
function addTodo() {
  const inputElements = document.querySelector(".input-elem");
  const InputName = inputElements.value;

  todoList.push(InputName);
  console.log(todoList);
  inputElements.value = "";
  renderTodoList();
}
