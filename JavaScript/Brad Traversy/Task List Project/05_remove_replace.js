// Replace element

const newHeading = document.createElement('h2');
// 
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('My List'));

// get old heading
const oldHeading = document.getElementById('task-title');

//get parent 
const cardAction = document.querySelector('.card-action');
// replace old with new
cardAction.replaceChild(newHeading, oldHeading);
// const lis=document.querySelectorAll('li');
let newx = document.createElement('li');
newx.appendChild(document.createTextNode('Temp'));
newx.id = 'temp';

let old = document.querySelector('ul');

old.appendChild(newx);
// const old=document.
// console.log(old);


// remove element 
let lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// remove list item
lis[5].remove();
list.removeChild(lis[3]);


// link
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
let val;
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link.classList;

// Attribute

val = link.setAttribute('herf', "http://google.com");
val = link.getAttribute('herf');
val = link.hasAttribute('title');

val = link;
console.log(val);