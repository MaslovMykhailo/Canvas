'use strict';

class Rectangle {
  constructor(x, y, width, height) {
    this._x = x;
    this._y = y;
    this._w = width;
    this._h = height;
  }

  draw(ctx, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(this._x, this._y, this._w, this._h);
    ctx.closePath();
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get width() {
    return this._w;
  }

  get height() {
    return this._h;
  }

  set setx(x) {
    this._x = x;
  }

  set sety(y) {
    this._y = y;
  }

  set setWidth(width) {
    this._w = width;
  }

  set setHeight(height) {
    this._h = height;
  }

  get proto() {
    return 'rectangle';
  }
}
