'use strict';

class MovingCircle extends Circle {
  constructor(x, y, radius, step) {
    super(x, y, radius);

    this._step = step;
  }

  get center() {
    return pointOfDisplaced(this);
  }

  get step() {
    return this._step;
  }

  set setStep(step) {
    this._step = step;
  }

  get outerRect() {
    return new Rectangle(this._x - this._r - this._step, this._y - this._r - this._step,
                         2*this._r + 2*this._step, 2*this._r + 2*this._step);
  }
}

class MovingRect extends Rectangle {
  constructor(x, y, width, height, step) {
    super(x, y, width, height);

    this._step = step;
  }

  get center() {
    return pointOfDisplaced(this);
  }

  get step() {
    return this._step;
  }

  set setStep(step) {
    this._step = step;
  }

  get outerRect() {
    return new Rectangle(this._x - this._step, this._y - this._step,
                         this._w + 2*this._step, this._h + 2*this._step);
  }
}