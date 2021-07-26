"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Welcome Back';
var isBeginner = true;
var total = 10;
var name = 'Anik';
var sentence = "My name is " + name + "\nI am a beginner in Typescript";
var randomValue = 10;
randomValue = 'Sabbir';
randomValue = true;
var myVariable = 10;
myVariable = true;
myVariable = 'anik';
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
myVariable.toUpperCase();
var a;
a = 10;
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5); //handle undefined  
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Sabbir'
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good MOrning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Anik');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWOrk = function () {
        console.log("Manager delegating tasks " + this.employeeName);
    };
    return Manager;
}(Employee));
var m1 = new Manager('Anik');
m1.delegateWOrk();
m1.greet();
console.log(m1.employeeName);
