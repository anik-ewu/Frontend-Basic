let val;
// number to string
val = String(5);
val = String(5 + 6);
// bool to string 
val = String(true);
// date to string
val = String(new Date());
// array to string
val = String([1, 2, 3]);
// to string
val = (5).toString();

// string to number
val = Number('5')
val = Number(true);
val = Number(null);
val = Number('hello'); //nan not a number
val = Number([1, 2, 3]); ///nan too
val = parseInt('100.12');
val = parseFloat('100.12');


// output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));

// type corstion 

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(sum);