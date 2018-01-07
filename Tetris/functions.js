'use strict';

const shapeInGrid = (shape) => {
  if(shape.xmin >= 0 && shape.xmax <= 225) return true;
  return false;
};

const shiftInGrid = (shape) => {
  let min = shape.xmin;
  let max = shape.xmax;
  
  if(min < 0) {
    shape._sq.forEach(s => {
      s.setx = s.x - min;
    });
  }
  if(max > 225) {
    shape._sq.forEach(s => {
      s.setx = s.x - (max - 225);
    });
  }
};

const intersectWithLastSq = (shape) => {
  for(let i = 0 ; i < 10 ; i++){
    if(shape.arrOfSq.some(sq => intersect(sq, lastSquares[i]))) return true;
  }
  return false;
}