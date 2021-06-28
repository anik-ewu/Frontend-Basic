// while
// let j=0;
// while(j < 10){
//   console.log('Number '+ j);
//   j++;
// }

const cars = ['toyota', 'ferrari', 'gini'];

// for(let i=0; i<cars.length; i++){
//   console.log(cars[i]);
// }

// cars.forEach(function(params) {
//   console.log(params);
// });

// Map
// const users =[
//   {id:1, name: 'sabbir'},
//   {id:2, name: 'uzzal'},
//   {id:3, name: 'ishita'}
// ];
// const ids=users.map(function(user) {
//   return user.id;
// });
// console.log(ids);


const userx = {
  firstName: 'john',
  lastName: 'doe',
  age: 40
}

for (let x in userx) {
  console.log(`${x}: ${userx[x]}`);
}