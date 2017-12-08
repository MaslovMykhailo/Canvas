'use strict';

class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.draw = (ctx, color) => {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(this.x, this.y, this.radius, 0, 2*PI, true);
      ctx.fill();
      ctx.closePath();
    }
  }
}