let val;

const list=document.querySelector('ul.collection');
const listitem=document.querySelector('li.collection-item:first-child');

val=listitem;
val=list;

// get child nodes
val=list.childNodes;
val=list.childNodes[0];
val=list.childNodes[0].nodeName;
val=list.childNodes[2].nodeType;

// 1- element 
// 2- attribute (deprecated)
// 3- text node
// 8- comment
// 9- Document itselt
// 10-Doctype

val=list.children;
val=list.children[0];
val=list.children[1];
list.children[1].textContent='Hello';

// childern of children
val=list.children[2].children[0].id='test-link';
val=list.children[2].children[0];
val=list.firstChild;
val=list.firstElementChild;
val=list.lastElementChild;

// count child elements
val=list.childElementCount;

// get parent node
val=listitem.parentNode;
val=listitem.parentElement;
val=listitem.parentElement.parentElement;

// next sibling
val=listitem;
val=listitem.nextSibling;
val=listitem.nextSibling.nextSibling;
val=listitem.nextSibling.nextElementSibling.previousElementSibling;
console.log(val);