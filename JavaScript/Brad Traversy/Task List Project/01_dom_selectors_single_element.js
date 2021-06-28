// document.getElementById()

console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);

const taskTitle=document.getElementById('task-title');

// change style
taskTitle.style.background ='#333';
taskTitle.style.color ='#fff';
taskTitle.style.padding ='1rem';


// change content
taskTitle.textContent='Task List';
taskTitle.innerText='My List';
taskTitle.innerHTML='<span style="color:red">My Task</span>';

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('ul li').style.color='red';
document.querySelector('ul li').style.color='blue';
document.querySelector('li:last-child').style.color='blue';
document.querySelector('li:nth-child(3)').style.color='blue';
document.querySelector('li:nth-child(4)').textContent="Hello World";
document.querySelector('li:nth-child(even)').style.color='yellow';