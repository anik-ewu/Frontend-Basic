let val;

const today = new Date();
let birthday = new Date('12-29-1995 11:25:00');
birthday = new Date('Septermber 10 1981');
birthday = new Date('9/10/1995');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getSeconds();

birthday.setMonth(3);
birthday.setDate(3);
val = birthday;

console.log(val);