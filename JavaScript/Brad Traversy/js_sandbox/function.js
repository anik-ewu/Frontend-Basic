// Function declaration
function sum(a = 2, b = 3) {
  return a + b;
}
let val = sum(1, 2);
console.log(val);

// Function expresions
const square = function (x) {
  return x * x;
}
console.log(square(8));

// immidately invokable expression - IIFEs
(function (name) {
  console.log(name + 'Hi there')
})('Anik ');

// property methods

const todo = {
  add: function () {
    console.log('Add todo..');
  },
  edit: function (id) {
    console.log(`edit todo ${id} `);
  }
}

todo.delete = function (params) {
  console.log(`delete todo`);
}

todo.add();
todo.edit(5);
todo.delete();