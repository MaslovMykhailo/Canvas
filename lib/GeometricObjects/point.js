'use strict';

class Point {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  draw(ctx, size, color) {
    ctx.beginPath();
    ctx.arc(this._x, this._y, size, 0, 2*Math.PI, true);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  set setx(x) {
    this._x = x;
  }

  set sety(y) {
    this._y = y;
  }

  get proto() {
    return 'point';
  }
}
