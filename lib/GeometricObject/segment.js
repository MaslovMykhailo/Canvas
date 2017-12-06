'use strict';

class Segment {
  constructor(x0, y0, x1, y1) {
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;

    this.length = () => {
      return Math.sqrt(Math.pow((x1-x0), 2) + Math.pow((y1-y0), 2));
    }

    this.draw = (ctx, width, color) => {
      ctx.beginPath();
      ctx.moveTo(this.x0, this.y0);
      ctx.lineTo(this.x1, this.y1);
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.stroke();
      ctx.closePath();
    }
  }
}
