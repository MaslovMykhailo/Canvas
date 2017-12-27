'use strict';

class Segment {
  constructor(x0, y0, x1, y1) {
    this._x0 = x0;
    this._y0 = y0;
    this._x1 = x1;
    this._y1 = y1;
  }

  draw(ctx, width, color) {
    ctx.beginPath();
    ctx.moveTo(this._x0, this._y0);
    ctx.lineTo(this._x1, this._y1);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
    ctx.closePath();
  }

  normalToPoint(point) {
    let directx = this._y1 - this._y0;
    let directy = this._x0 - this._x1;

    let normalx;
    let normaly;

    if(directx !== 0) {
      normalx = 100;
      normaly = (directy/directx) * (normalx - point.x) + point.y;
    } else {
      normaly = 100;
      normalx = (directx/directy) * (normaly - point.y) + point.x;
    }

    return new Segment(point.x, point.y, normalx, normaly);
  }

  get length() {
    return Math.sqrt(Math.pow((this._x1 - this._x0), 2) + Math.pow((this._y1 - this._y0), 2));
  }

  get x0() {
    return this._x0;
  }

  get x1() {
    return this._x1;
  }

  get y0() {
    return this._y0;
  }

  get y1() {
    return this._y1;
  }

  set setx0(x) {
    this._x0 = x;
  }

  set setx1(x) {
    this._x1 = x;
  }

  set sety0(y) {
    this._y0 = y;
  }

  set sety1(y) {
    this._y1 = y;
  }

  get proto() {
    return 'segment';
  }
}
