"use strict";
exports.__esModule = true;
var number = 1;
var number = 1; //redeclaring number no error
// variable declaratoin and enum
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, 'str', true, false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
// console.log(backgroundColor);
// Typeassertion 
var message;
message = 'abc';
var endsWithC = message.endsWith('c');
var alternative = message.endsWith('c');
// Arrow function
var log = function (message) {
    console.log(message);
};
var doLog = function (message) {
    console.log(message);
};
//************X****************************
//interfaces: puerly for declaration
// interface Point{
//   x: number,
//   y: number,
//   // draw: () =>void
// }
// //inline annotation
// let drawPoint = (point: Point) =>{
//   console.log(point);
// }
// drawPoint({
//   x: 1, 
//   y: 2
// })
// Class : for coheation
// class Point{
//   x: number;
//   y: number;
//   //optional
//   constructor(x?: number, y?:number){
//     this.x=x;
//     this.y=y;
//   }
//   draw(){
//      console.log('X: ' + this.x + ' Y: ' + this.y);
//   }
// }
// let point: Point =new Point();
// let point =new Point(1,2); //with constructor
// point.y=1;
//point.y=
//point.z=
//point.y=
//... ???? introduce constructor
// point.draw();
// Access MOdifiers to control actress
//public | private | protected
// class Point {
// private x: number;
// private y: number;
//optional ?
// constructor(x?: number, y?:number){
//   this.x=x;
//   this.y=y;
// }
//shortcut
//   constructor(private _x?: number, private _y?: number) {
//   }
//   draw() {
//     console.log('X: ' + this._x + ' Y: ' + this._y);
//   }
//   get x() {
//     return this._x;
//   }
//   // setX(value ){
//   //   if(value<0)
//   //     throw new Error('value can not be less than 0');
//   //   this.x = value;
//   // }
//   set x(value) {
//     if(value<0)
//     throw new Error('value can not be less than 0');
//     this._x = value;
//   }
// }
var point_1 = require("./point");
var point = new point_1.Point(1, 0);
console.log(point);
