var number = 1;
var number = 1; //redeclaring number no error

// variable declaratoin and enum
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, 'str', true, false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red, Green, Blue };
let backgroundColor = Color.Blue;
// console.log(backgroundColor);


// Typeassertion 
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternative = (message as string).endsWith('c');


// Arrow function
let log = function (message) {
  console.log(message);
}
let doLog = (message) => {
  console.log(message);
}


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
import { Point } from './point'
let point = new Point(1, 0);
console.log(point);