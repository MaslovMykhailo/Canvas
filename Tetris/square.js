'use strict';

class Square extends Rectangle {
  constructor(x, y, color) {
    super(x, y, 25, 25);
    
    this.color = color;
  }
  
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this._x, this._y, this._w, this._h);
    ctx.closePath();
  }
}

let statSquares = [];

for(let i = 0 ; i < 250 ; i += 25) {
  statSquares.push(new Square(i, 500, 'black'));
}