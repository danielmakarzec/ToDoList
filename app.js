// SELECTORS
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.todo-filter')

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

const handleClick = e => {
  const item = e.target;
  const itemParent = item.parentElement;

  if (item.classList[0] == 'trash-btn') {
    removeLocalTodos(itemParent);
    itemParent.remove();
  } else {
    itemParent.classList.toggle('checked');
  }
}

const handleFilter = e => {
  const todos = new Array(...todoList.childNodes);
  todos.shift();
  todos.forEach(function(todo) {
      switch (e.target.value) {
        case 'all':
          todo.style.display = "flex";
          break;
        case 'done':
          if (todo.classList.contains('checked')) {
            todo.style.display = 'flex';
          } else {
            todo.style.display = 'none';
          }
          break;
        case 'pending':
          if (todo.classList.contains('checked')) {
            todo.style.display = 'none';
          } else {
            todo.style.display = 'flex';
          }
          break;
      }
  });
}




// EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', handleClick);
filterOption.addEventListener('click', handleFilter)
