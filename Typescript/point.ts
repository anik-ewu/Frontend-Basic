export class point {
  x = 10;
  y = 15;
  constructor(private _x?: number, private _y?: number) {
  }
  draw() {
    console.log('X: ' + this._x + ' Y: ' + this._y);
  }
}