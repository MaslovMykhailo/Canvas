'use strict';

class Circle {
  constructor(x, y, radius) {
    this._x = x;
    this._y = y;
    this._r = radius;
  }

  draw(ctx, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(this._x, this._y, this._r, 0, 2*Math.PI, true);
    ctx.fill();
    ctx.closePath();
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get radius() {
    return this._r;
  }

  set setx(x) {
    this._x = x;
  }

  set sety(y) {
    this._y = y;
  }

  get proto() {
    return 'circle';
  }

  set setRadius(radius) {
    this._r = radius;
  }
}