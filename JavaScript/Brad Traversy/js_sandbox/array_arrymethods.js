// create sum arrays
const numbers = [4, 5, 7, 8, 9];
const numbers2 = new Array(1, 2, 3,);
const fruit = ['apple', 'orrange', 'banana'];
const mixed = ['Hello', 'eta ki ', 2441139];


let val;
//get array length
val = numbers.length;

// check if is aray
val = Array.isArray(numbers);

// get single value
val = numbers[3];
numbers[3] = 100;

// Mutating array
numbers.push(10); //add end
numbers.unshift(-10); //add front
numbers.pop();
numbers.shift();///pop front
numbers.splice(1, 2); // delete 1 ->2
numbers.reverse();

val = numbers.concat(numbers2);//concat
val = fruit.sort();//sort 

//sort numbers using compare fun
val = numbers.sort(function (x, y) {
  return x - y;
});
//sort numbers using compare fun
val = numbers.sort(function (x, y) {
  return y - x;
});

// find 
function under5(num) {
  return num < 5;
}

val = numbers.find(under5);
console.log(numbers);
console.log(val);