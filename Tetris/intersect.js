'use strict';

const intersection = (moveSq, statSq) => {
  let res = rectanglesIntersect(moveSq, statSq);
  if(res) {
    if ((res.length < 5) ||
      (res.length === 7 && res[0].y !== res[6].y)) return null;
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
  statSquares = statSquares.concat(shape.arrOfSq);
};

const generateShape = () => {
  return new Shape1();
};

const intersectHandler = (moveShape) => {
  if(!intersectWithStatSqs(moveShape)) return moveShape;
  addShapeToStat(moveShape);
  return generateShape();
};



