// create the element

const li = document.createElement('li');


// add a class 
li.className = 'collection-item';
// add id
li.id = 'new-item';
// add attribute
li.setAttribute('title', 'New Item');

// create nw link element

const link = document.createElement('a');
link.className = 'delete-item secondary-content';
// add icon
link.innerHTML = '<i class="fa fa-remove"></i>';

// append link into li
li.appendChild(link);

// create text node and append
li.appendChild(document.createTextNode('Hello WOrld'));
// append li as child to ul

document.querySelector('ul.collection').appendChild(li);

console.log(li);