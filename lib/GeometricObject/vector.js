'use strict';

class Vector {
  constructor(x0, y0, x1, y1) {
    this.x = x1 - x0;
    this.y = y1 - y0;

    this.length = () => {
      return Math.sqrt(this.x*this.x + this.y*this.y);
    }

    this.cross = (vector) => {
      return this.x*vector.y - this.y*vector.x;
    }

    this.dot = (vector) => {
      return this.x*vector.x + this.y*vector.y;
    }
  }
}