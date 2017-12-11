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

  get arrOfPoints() {
    const p1 = new Point(this._x, this._y);
    const p2 = new Point(this._x + this._w, this._y);
    const p3 = new Point(this._x, this._y + this._h);
    const p4 = new Point(this._x + this._w, this._y + this._h);

    return [p1, p2, p3, p4];
  }

  get arrOfSegments() {
    const s1 = new Segment(this._x, this._y, this._x + this._w, this._y);
    const s2 = new Segment(this._x + this._w, this._y, this._x + this._w, this._y + this._h);
    const s3 = new Segment(this._x, this._y, this._x, this._y + this._h);
    const s4 = new Segment(this._x, this._y + this._h, this._x + this._w, this._y + this._h);

    return [s1, s2, s3, s4];
  }

  get proto() {
    return 'rectangle';
  }
}
