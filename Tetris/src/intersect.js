'use strict';

const intersection = (moveSq, statSq) => {
  let res = rectanglesIntersect(moveSq, statSq);
  if(res) {
    if((res.length < 5) ||
      (res.length === 7 && res[0].y !== res[6].y)) return null;
    if(moveSq.y > statSq.y) return null;
    return new Point(statSq.x, statSq.y);
  } else {
    return null;
  }
};

const intersectWithStatSqs = (shape) => {
  for(let i = 0 ; i < statSquares.length ; i++) {
    if(shape.arrOfSq.some(sq => intersection(sq, statSquares[i]))) return true;
  }
  return false;
};

const addShapeToStat = (shape) => {
  statSquares = statSquares.concat(shape.arrOfSq.slice());
};

const getShape = (n) => {
  const shape = {
    '1'() {
      return new Shape1();
    },
    '2'() {
      return new Shape2();
    },
    '3'() {
      return new Shape3();
    },
    '4'() {
      return new Shape4();
    },
    '5'() {
      return new Shape5();
    },
    '6'() {
      return new Shape6();
    },
    '7'() {
      return new Shape7();
    }
  };
  return shape[n]();
};

const intersectHandler = (moveShape) => {
  if(!intersectWithStatSqs(moveShape)) return moveShape;
  
  addShapeToStat(moveShape);
  statSquares = newStatSquares(statSquares.slice(), alwaysStatSqs);
  
  let newShape = getShape(nextFigure.kind);
  nextFigure = newNextFigure();
  
  let def = copy(newShape);
  newShape = correctShift(newShape, def, statSquares, 'turn');
  correctStart(newShape, statSquares);
  
  return newShape;
};

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const correctStart = (moveShape, arrOfStat) => {
  let d = 0;
  for(let i = 0 ; i <= 3 ; i++) {
    let y = 10 + 25 * (i - 1);
    let segment = new Segment(0, y, 250, y);

    for(let j = 0 ; j < arrOfStat.length ; j++) {
      if(intersect(segment, arrOfStat[j])) {
        if(i === 0) {
          alert('game over');
          tetris.start();
        }
        d++;
        break;
      }
    }
  }
  
  moveShape._sq.forEach(sq => {
    sq.sety = sq.y - 25 * d;
  });
};