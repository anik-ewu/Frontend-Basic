const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // add task event
  form.addEventListener('submit', addTask);
  // remove task event
  taskList.addEventListener('click', removeTask);
  // Clear Task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter Task Events
  filter.addEventListener('keyup', filterTasks);
}

// Get tasks from LS

function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') == null) {
    tasks = [];
  }
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
    // create li element
    const li = document.createElement('li');
    // add class for better look
    li.className = 'collection-item';
    // create text node and append to the li
    li.appendChild(document.createTextNode(task));
    // create new link element 
    const link = document.createElement('a');
    // add class 
    link.className = 'delete-item secondary-content';
    // icon html
    link.innerHTML = ' <i class="fas fa-trash-alt"></i>';
    // append the link to li 
    li.appendChild(link);

    // APPEND LI TO UL
    taskList.appendChild(li);
  });
}

// add task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }
  // create li element
  const li = document.createElement('li');
  // add class for better look
  li.className = 'collection-item';
  // create text node and append to the li
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element 
  const link = document.createElement('a');
  // add class 
  link.className = 'delete-item secondary-content';
  // icon html
  link.innerHTML = ' <i class="fas fa-trash-alt"></i>';
  // append the link to li 
  li.appendChild(link);

  // APPEND LI TO UL
  taskList.appendChild(li);

  // Store in local storage
  storeTaskInLocalStorage(taskInput.value);

  // clear input
  taskInput.value = '';

  e.preventDefault();
}

// store task
function storeTaskInLocalStorage(task) {

  let tasks;
  if (localStorage.getItem('tasks') == null) {
    tasks = [];
  }
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

}


// Remove Task
function removeTask(e) {

  if (e.target.parentElement.classList.contains('delete-item')) {
    // console.log(e.target);
    if (confirm('Are you sure ?')) {
      e.target.parentElement.parentElement.remove();

      //remove from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove task from local storage
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') == null) {
    tasks = [];
  }
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));

}



// Clar Task

function clearTasks() {
  // innerHTML slower
  // taskList.innerHTML ='';

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  // claer from local storage
  clearTasksFromLocalStorage();
}

//claer ls
function clearTasksFromLocalStorage(){
  localStorage.clear();
}


// filter Tasks

function filterTasks(e) {
  const txt = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(txt) != -1) {
      task.style.display = 'block';
    }
    else {
      task.style.display = 'none';
    }
  });
}