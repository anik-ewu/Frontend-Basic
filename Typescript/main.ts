export { }
let message = 'Welcome Back';


let isBeginner: boolean = true;
let total: number = 10;
let name: string = 'Anik';

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

let randomValue: any = 10;
randomValue = 'Sabbir';
randomValue = true;

let myVariable: unknown = 10;
myVariable = true;
myVariable = 'anik';


function hasName(obj: any): obj is { name: string } {
  return !!obj &&
    typeof obj === "object" &&
    "name" in obj;
}

if (hasName(myVariable)) {
  console.log(myVariable.name);
}
(myVariable as string).toUpperCase();


let a;
a = 10;


let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;

function add(num1: number, num2: number = 0): number {
  if (num2)
    return num1 + num2;
  else
    return num1;
}


add(5, 10);
add(5); //handle undefined  


interface Person {
  firstName: string;
  lastName?: string;
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: 'Sabbir',

}
fullName(p);


class Employee {
  protected employeeName: string;
  constructor(name: string) {
    this.employeeName = name;
  }
  greet() {
    console.log(`Good MOrning ${this.employeeName}`);
  }

}

let emp1 = new Employee('Anik');
console.log(emp1.employeeName);
emp1.greet();


class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWOrk() {
    console.log(`Manager delegating tasks ${this.employeeName}`);
  }
}

let m1 = new Manager('Anik');

m1.delegateWOrk();
m1.greet();
console.log(m1.employeeName);