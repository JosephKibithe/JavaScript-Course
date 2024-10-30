/*
create array to store todos
when we click add
get text from textbox
add it to array
console.log the array
*/

const todoList = []; //epmty array
function addTodo() {
  const inputElements = document.querySelector(".input-elem");
  const InputName = inputElements.value;

  todoList.push(InputName);
  console.log(todoList);
  inputElements.value = "";
}
