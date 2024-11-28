import { elTodoForm, elTodoTemplate, elTodosParent } from "./html-selection.js";

elTodoForm.onsubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const todoName = formData.get("todoName").trim();
  const todoBody = formData.get("todoBody").trim();

  if (!todoName || !todoBody) {
    alert("Iltimos, barcha maydonlarni to'ldiring!");
    return;
  }

  const todoElement = elTodoTemplate.content.cloneNode(true);
  const todoTitle = todoElement.querySelector("#todoTitle");
  const todoBodyEl = todoElement.querySelector("#todoBody");
  const todoCheckbox = todoElement.querySelector("#todoCheckbox");
  const deleteButton = todoElement.querySelector("#deleteTodo");

  todoTitle.textContent = todoName;
  todoBodyEl.textContent = todoBody;

  todoCheckbox.onchange = (e) => {
    todoBodyEl.classList.toggle("line-through", e.target.checked);
    todoBodyEl.classList.toggle("opacity-70", e.target.checked);
  };

  deleteButton.onclick = () => {
    todoElement.parentElement.removeChild(deleteButton.closest("li"));
  };

  elTodosParent.appendChild(todoElement);

  e.target.reset();
};
