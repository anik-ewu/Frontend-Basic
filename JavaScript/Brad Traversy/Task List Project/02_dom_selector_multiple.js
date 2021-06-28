// // document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
//  console.log(items);
//  console.log(items[0]);
//  items[1].style.color='blue';

//  const listItems=document.querySelector('ul').getElementsByClassName('colection-item');
//  console.log(listItems);

// // document.getElementByTagName

// let lis = document.getElementsByTagName('li');
//  console.log(lis);
// console.log(lis[0]);

// for(let i=0; i<lis.length; i++){
//   lis[i].style.color='yellow';
// }

// // lis is not an array yet, lets convert it from HTML collection to an arry
// lis= Array.from(lis);
// lis.reverse(); //now reverse method will work
// console.log(lis);
// lis[0].style.color='green';


const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function (li, index) {
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});


const liodd = document.querySelectorAll('li:nth-child(odd)');

liodd.forEach(function (li, index) {
  li.style.background = '#ccc';
});

console.log(liodd);
