'use strict';

class Mouse {
  constructor() {
    this._x = 0;
    this._y = 0;
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
}

/*

 Initialization

const mouse = new Mouse();

const changeMouse = (e) => {
  mouse.setx = e.pageX;
  mouse.sety = e.pageY;
}

document.canvas.addEventListener('mousemove', changeMouse);

*/