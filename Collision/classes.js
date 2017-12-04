'use strict';

class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.fillStyle = 'black';
    this.draw = (context) => {
      context.beginPath();
      context.fillStyle = this.fillStyle;
      context.fillRect(this.x, this.y, this.width, this.height);
      context.closePath();
    };
  }
}

class movingSquare extends Rectangle {
  constructor(x, y, side) {
    super(x, y, side, side);

    this.step = 5;
    this.cx = this.x + this.width/2;
    this.cy = this.y + this.width/2;
    this.draw = (context, mouseCoords, checkBox) => {
      context.beginPath();
      context.fillStyle = this.fillStyle;
      context.fillRect(this.x, this.y, this.width, this.height);

      if(checkBox.checked) {
        context.setLineDash([100, 3000]);
        context.moveTo(this.cx, this.cy);
        context.lineTo(mouseCoords.x, mouseCoords.y);
        context.stroke();
      }

      context.closePath();
    }
  }
}