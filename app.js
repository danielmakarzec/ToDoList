// SELECTORS
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

// FUNCTIONS
const addTodo = e => {
  e.preventDefault();
  // create
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const todoLi = document.createElement('li');
  todoLi.innerText = todoInput.value;
  todoLi.classList.add('todo-item');
  todoDiv.appendChild(todoLi);
  // SAVE TO LOCAL STORAGE
  saveLocalTodos(todoInput.value);
  // check
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('completed-btn');
  todoDiv.appendChild(completedButton);
  // delete
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  // display
  todoList.appendChild(todoDiv);
  // clear input
  todoInput.value = '';
}

// EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
