'use strict';

class Square extends Rectangle {
  constructor(x, y, side) {
    super(x, y, side, side);
    
    this.isLast = false;
  }
}

class Shape {
  constructor() {
    this.arrOfSq = [];
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
