'use strict';

const correctShift = (shape, def, arrOfStatSq, type) => {

  if(behindBorder(shape)) offsetBorder(shape);
  
  let overlapSqs = overlapSq(shape, arrOfStatSq);
  if(overlapSqs) offsetStat(shape, def, overlapSqs, type);
  
  if(behindBorder(shape) || overlapSq(shape, arrOfStatSq)) return def;
  return shape;
};

const behindBorder = (shape) => {
  if(shape.xmin < 0 || shape.xmax > 225) return true;
  return false;
};

const overlapSq = (shape, arrOfStatSq) => {
  let overlapSqs = [];
  
  for(let i = 0 ; i < arrOfStatSq.length ; i++) {
    let arr = shape.arrOfSq;
    for(let j = 0 ; j < arr.length ; j++) {
      if(arr[j].x === arrOfStatSq[i].x &&
         arr[j].y === arrOfStatSq[i].y)
        overlapSqs.push(arrOfStatSq[i]);
    }
  }
  
  return overlapSqs.length ? overlapSqs : null;
};

const countOfShift = (arrOfSq, coord) => {
  let count = 1;
  
  let min = getCoord(arrOfSq, coord, 'min');
  let max = getCoord(arrOfSq, coord, 'max');
  
  count += (max - min) / 25;
  return count;
};

const offsetBorder = (shape) => {
  let xmin = shape.xmin;
  let xmax = shape.xmax;
  
  if (xmin < 0) {
    shape._sq.forEach(s => {
      s.setx = s.x - xmin;
    });
  }
  if (xmax > 225) {
    shape._sq.forEach(s => {
      s.setx = s.x - (xmax - 225);
    });
  }
};

const offsetStat = (shape, def, overlapSqs, type) => {
  const methods = {
    moveRight() {
      shape._sq.forEach(sq => sq.setx = sq.x - 25);
    },
    moveLeft() {
      shape._sq.forEach(sq => sq.setx = sq.x + 25);
    },
    turn() {
      if(def.ymin >= shape.ymax) {
        let dy = countOfShift(overlapSqs, 'y');
        shape._sq.forEach(sq => sq.setx = sq.x - 25 * dy);
      } else {
        let dx = countOfShift(overlapSqs, 'x');
        if (def.xmax < shape.xmin) {
          shape._sq.forEach(sq => sq.setx = sq.x - 25 * dx);
        } else {
          shape._sq.forEach(sq => sq.setx = sq.x + 25 * dx);
        }
      }
    }
  };
  
  methods[type]();
};
