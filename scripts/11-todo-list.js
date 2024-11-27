const todoList = ["watch tv", "clup hands"];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    //const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    // const { name, dueDate } = todoObject;
    const todo = todoList[i];
    const html = `
      <p>${todo}</p>
    `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
console.log(todoListHTML);

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  //const dateInputElement = document.querySelector(".js-due-date-input");
  //const dueDate = dateInputElement.value;

  /*todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate,
  });*/
  todoList.push(name);
  console.log(todoList);
  inputElement.value = "";

  renderTodoList();
}
