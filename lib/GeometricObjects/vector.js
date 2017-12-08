'use strict';

class Vector {
  constructor(x0, y0, x1, y1) {
    this._x = x1 - x0;
    this._y = y1 - y0;
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

  get length() {
    return Math.sqrt(this._x * this._x + this._y * this._y);
  }

  cross(vector) {
    return this.x * vector.y - this.y * vector.x;
  }

  dot(vector) {
    return this.x * vector.x + this.y * vector.y;
  }
}