'use strict';

class Shape {
  constructor() {
    this._sq = [];
  }
  
  get arrOfSq() {
    return this._sq;
  }
  
  draw(ctx) {
    this.arrOfSq.forEach(sq => sq.draw(ctx));
  }
  
  moveDown() {
    this._sq.forEach(sq => {sq.sety = sq.y + 25});
  }
  moveLeft() {
    this._sq.forEach(sq => {sq.setx = sq.x - 25});
    correctTurn(this);
  }
  moveRignt() {
    this._sq.forEach(sq => {sq.setx = sq.x + 25});
    correctTurn(this);
  }
  
  get xmin() {
    let min = 1000;
    this.arrOfSq.forEach(s => {
      min = min < s.x ? min : s.x;
    });
    return min;
  }
  get ymin() {
    let min = 1000;
    this.arrOfSq.forEach(s => {
      min = min < s.y ? min : s.y;
    });
    return min;
  }
  get xmax() {
    let max = -1000;
    this.arrOfSq.forEach(s => {
      max = max > s.x ? max : s.x;
    });
    return max;
  }
  get ymax() {
    let max = -1000;
    this.arrOfSq.forEach(s => {
      max = max > s.y ? max : s.y;
    });
    return max;
  }
}

class Shape1 extends Shape {
  constructor() {
    super();
    
    this._sq = [
      new Square(100, 0, 'yellow'),
      new Square(125, 0, 'yellow'),
      new Square(100, 25, 'yellow'),
      new Square(125, 25, 'yellow')
    ];
  }
  
  turn() {
    // do nothing :)
  }
}

class Shape2 extends Shape {
  constructor() {
    super();
    
    this._sq = [
      new Square(100, 0, 'blue'),
      new Square(100, 25, 'blue'),
      new Square(100, 50, 'blue'),
      new Square(100, 75, 'blue')
    ];
  }
  
  turn() {
    if(this.arrOfSq[0].x === this.arrOfSq[1].x) {
      let d = 50;
      for(let i = 0 ; i < 4 ; i++) {
        this._sq[i].setx = this._sq[i].x + d;
        this._sq[i].sety = this._sq[i].y + d;
        d -= 25;
      }
      correctTurn(this);
    } else {
      let d = -50;
      for(let i = 0 ; i < 4 ; i++) {
        this._sq[i].setx = this._sq[i].x + d;
        this._sq[i].sety = this._sq[i].y + d;
        d += 25;
      }
      correctTurn(this);
    }
  }
}