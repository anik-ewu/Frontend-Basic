const firstName='Sabbir';
const lastName= 'Hasan';

let val;
val= firstName+' '+lastName;

// append
val = 'Sabbir';
val+= ' Hasan';

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Lenght
val = val.length;

// change case
val = firstName.toUpperCase();
val = firstName[1];

// indexOf()
val = firstName.indexOf('b');

// charAT()
val = firstName.charAt('2');

// substring out of string
val = firstName.substring(0,3);
val = firstName.slice(-3);

// split
const str= 'sabbir hasan anik';
const tags= ' webbb desibbgn, form, value'
val = str.split(' ');
val = tags.split(',');

// replace
val= str.replace('bb', 'x');

// include
val = str.includes('b');

console.log(val);