'use strict';

class Shape {
  constructor(arrOfSq) {
    this._sq = arrOfSq;
  }
  
  get arrOfSq() {
    return this._sq;
  }
  
  set setSq(arrOfSq) {
    this._sq = arrOfSq.slice();
  }
  
  draw(ctx) {
    this.arrOfSq.forEach(sq => sq.draw(ctx));
  }
  
  moveDown() {
    this._sq.forEach(sq => {sq.sety = sq.y + 25});
  }
  moveLeft() {
    this._sq.forEach(sq => {sq.setx = sq.x - 25});
  }
  moveRight() {
    this._sq.forEach(sq => {sq.setx = sq.x + 25});
  }
  
  get xmin() {
    return getCoord(this.arrOfSq, 'x', 'min');
  }
  get ymin() {
    return getCoord(this.arrOfSq, 'y', 'min');
  }
  get xmax() {
    return getCoord(this.arrOfSq, 'x', 'max');
  }
  get ymax() {
    return getCoord(this.arrOfSq, 'y', 'max');
  }
}

class Shape1 extends Shape {
  constructor() {
    super([
      new Square(100, -25, '#FFFF00'),
      new Square(125, -25, '#FFFF00'),
      new Square(100, 0, '#FFFF00'),
      new Square(125, 0, '#FFFF00')
    ]);
    this.position = 1;
    this.kind = 1;
  }
  
  turn() {
    // do nothing :)
  }
}

class Shape2 extends Shape {
  constructor() {
    super([
      new Square(100, -50, '#00BFFF'),
      new Square(100, -25, '#00BFFF'),
      new Square(100, 0, '#00BFFF'),
      new Square(100, 25, '#00BFFF')
    ]);
    this.position = 1;
    this.kind = 2;
  }
  
  turn() {
    switch (this.position) {
      case 1 : {
        this.position = 2;
        turn(this, 'plus', 'plus');
        this._sq[0].setx = this._sq[0].x + 50;
        this._sq[0].sety = this._sq[0].y + 50;
        break;
      }
      case 2 : {
        this.position = 3;
        turn(this, 'minus', 'plus');
        this._sq[0].setx = this._sq[0].x - 50;
        this._sq[0].sety = this._sq[0].y + 50;
        break;
      }
      case 3 : {
        this.position = 4;
        turn(this, 'plus', 'minus');
        this._sq[0].setx = this._sq[0].x + 50;
        this._sq[0].sety = this._sq[0].y - 50;
        break;
      }
      case 4 : {
        this.position = 1;
        turn(this, 'minus', 'minus');
        this._sq[0].setx = this._sq[0].x - 50;
        this._sq[0].sety = this._sq[0].y - 50;
        break;
      }
    }
  }
}

class Shape3 extends Shape {
  constructor() {
    super([
      new Square(125, 0, '#6A0888'),
      new Square(100, -25, '#6A0888'),
      new Square(100, 0, '#6A0888'),
      new Square(100, 25, '#6A0888'),
    ]);
    this.position = 1;
    this.kind = 3;
  }
  
  turn() {
    switch (this.position) {
      case 1 : {
        this.position = 2;
        turn(this, 'plus', 'plus');
        this._sq[0].setx = this._sq[0].x - 25;
        this._sq[0].sety = this._sq[0].y + 25;
        break;
      }
      case 2 : {
        this.position = 3;
        turn(this, 'minus', 'plus');
        this._sq[0].setx = this._sq[0].x - 25;
        this._sq[0].sety = this._sq[0].y - 25;
        break;
      }
      case 3 : {
        this.position = 4;
        turn(this, 'plus', 'minus');
        this._sq[0].setx = this._sq[0].x + 25;
        this._sq[0].sety = this._sq[0].y - 25;
        break;
      }
      case 4 : {
        this.position = 1;
        turn(this, 'minus', 'minus');
        this._sq[0].setx = this._sq[0].x + 25;
        this._sq[0].sety = this._sq[0].y + 25;
        break;
      }
    }
  }
}

class Shape4 extends Shape {
  constructor() {
    super([
      new Square(125, -25, '#013ADF'),
      new Square(100, -25, '#013ADF'),
      new Square(100, 0, '#013ADF'),
      new Square(100, 25, '#013ADF'  )
    ]);
    this.position = 1;
    this.kind = 4;
  }
  
  turn() {
    switch (this.position) {
      case 1 : {
        this.position = 2;
        turn(this, 'plus', 'plus');
        this._sq[0].sety = this._sq[0].y + 50;
        break;
      }
      case 2 : {
        this.position = 3;
        turn(this, 'minus', 'plus');
        this._sq[0].setx = this._sq[0].x - 50;
        break;
      }
      case 3 : {
        this.position = 4;
        turn(this, 'plus', 'minus');
        this._sq[0].sety = this._sq[0].y - 50;
        break;
      }
      case 4 : {
        this.position = 1;
        turn(this, 'minus', 'minus');
        this._sq[0].setx = this._sq[0].x + 50;
        break;
      }
    }
  }
}

class Shape5 extends Shape {
  constructor() {
    super([
      new Square(100, -25, '#DF7401'),
      new Square(125, -25, '#DF7401'),
      new Square(125, 0, '#DF7401'),
      new Square(125, 25, '#DF7401'  )
    ]);
    this.position = 1;
    this.kind = 5;
  }
  
  turn() {
    switch (this.position) {
      case 1 : {
        this.position = 2;
        turn(this, 'plus', 'plus');
        this._sq[0].setx = this._sq[0].x + 50;
        break;
      }
      case 2 : {
        this.position = 3;
        turn(this, 'minus', 'plus');
        this._sq[0].sety = this._sq[0].y + 50;
        break;
      }
      case 3 : {
        this.position = 4;
        turn(this, 'plus', 'minus');
        this._sq[0].setx = this._sq[0].x - 50;
        break;
      }
      case 4 : {
        this.position = 1;
        turn(this, 'minus', 'minus');
        this._sq[0].sety = this._sq[0].y - 50;
        break;
      }
    }
  }
}

class Shape6 extends Shape {
  constructor() {
    super([
      new Square(100, -25, '#B40404'),
      new Square(125, -25, '#B40404'),
      new Square(125, 0, '#B40404'),
      new Square(150, 0, '#B40404'),
    ]);
    this.position = 1;
    this.kind = 6;
  }
  
  turn() {
    switch (this.position) {
      case 1 : {
        this.position = 2;
        this._sq[0].sety = this._sq[0].y + 50;
        this._sq[3].setx = this._sq[3].x - 50;
        break;
      }
      case 2 : {
        this.position = 1;
        this._sq[0].sety = this._sq[0].y - 50;
        this._sq[3].setx = this._sq[3].x + 50;
        break;
      }
    }
  }
}

class Shape7 extends Shape {
  constructor() {
    super([
      new Square(100, -25, '#31B404'),
      new Square(125, -25, '#31B404'),
      new Square(75, 0, '#31B404'),
      new Square(100, 0, '#31B404'),
    ]);
    this.position = 1;
    this.kind = 7;
  }
  
  turn() {
    switch (this.position) {
      case 1 : {
        this.position = 2;
        this._sq[3].sety = this._sq[3].y - 50;
        this._sq[2].setx = this._sq[2].x + 50;
        break;
      }
      case 2 : {
        this.position = 1;
        this._sq[3].sety = this._sq[3].y + 50;
        this._sq[2].setx = this._sq[2].x - 50;
        break;
      }
    }
  }
}

const turn = (shape, changeX, changeY) => {
  const methods = {
    plus(a, b) {
      return a + b;
    },
    minus(a, b) {
      return a - b;
    }
  };
  let d = 25;
  for (let i = 1; i < 4; i++) {
    shape._sq[i].setx = methods[changeX](shape._sq[i].x, d);
    shape._sq[i].sety = methods[changeY](shape._sq[i].y, d);
    d -= 25;
  }
};

const copy = (shape) => {
  const arrOfSq = [];
  shape.arrOfSq.forEach(sq => {
    arrOfSq.push(new Square(sq.x, sq.y, sq.color));
  });
  const copyShape = getShape(shape.kind);
  copyShape.setSq = arrOfSq;
  return copyShape;
};