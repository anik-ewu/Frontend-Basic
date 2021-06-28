const person = {
  firstName: 'Sabbir',
  lastName:  'Hasan',
  age: 25,
  email: 'sabbirhasan@gmail.com',
  hobbies: ['music', 'sports'],
  adress:{
    city: 'dhaka',
    town: 'banasree'
  },

  getBirthyear: function(){
    return 1965- this.age;
  }
}


let val;
val=person;
// get spacefic value
val=person.firstName;
val=person['lastName'];
val=person.age;
val=person.hobbies[1];
val=person.adress['city'];
val=person.getBirthyear();

console.log(val);


const people =[
  {name: 'sabbir', age: 25},
  {name: 'uzzal',  age: 26},
  {name: 'ishita',  age: 25},
  {name: 'toma',  age: 25}
]

for(let i=0; i<people.length; i++){
  console.log(people[i].name);
}