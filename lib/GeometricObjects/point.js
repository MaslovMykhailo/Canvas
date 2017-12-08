'use strict';

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.draw = (ctx, size, color) => {
      ctx.beginPath();
      ctx.arc(this.x, this.y, size, 0, 2*PI, true);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.closePath();
    }
  }
}
