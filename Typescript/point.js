"use strict";
exports.__esModule = true;
exports.point = void 0;
var point = /** @class */ (function () {
    function point(_x, _y) {
        this._x = _x;
        this._y = _y;
        this.x = 10;
        this.y = 15;
    }
    point.prototype.draw = function () {
        console.log('X: ' + this._x + ' Y: ' + this._y);
    };
    return point;
}());
exports.point = point;
