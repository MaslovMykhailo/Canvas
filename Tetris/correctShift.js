'use strict';

const correctShift = (shape, arrOfStatSq, type) => {
  let defSqs = shape.arrOfSq.slice();
  
  if(behindBorder(shape)) offsetBorder(shape);
  
  let overlapSqs = overlapSq(shape, arrOfStatSq);
  if(overlapSqs) offsetStat(shape, overlapSqs, defSqs, type);
  
  if(behindBorder(shape) || overlapSq(shape, arrOfStatSq)) shape.setSq = defSqs.slice();
};

const behindBorder = (shape) => {
  if(shape.xmin < 0 || shape.xmax > 225) return true;
  return false;
};

const overlapSq = (shape, arrOfStatSq) => {
  let overlapSqs = [];
  
  for(let i = 0 ; i < arrOfStatSq.length ; i++) {
    let arr = shape.arrOfSq;
    for(let j = 0 ; j < 4 ; j++) {
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

const offsetStat = (shape, overlapSqs, defSqs, type) => {
  const methods = {
    moveRight() {
      shape._sq.forEach(sq => sq.setx = sq.x - 25);
    },
    moveLeft() {
      shape._sq.forEach(sq => sq.setx = sq.x + 25);
    },
    turn() {
      console.log(getCoord(defSqs, 'y', 'max'), getCoord(overlapSqs, 'y', 'max'));
      if(getCoord(defSqs, 'y', 'max') >= getCoord(overlapSqs, 'y', 'max')) {
        let dx = countOfShift(overlapSqs, 'x');
        console.log(dx);
        if(getCoord(defSqs, 'x', 'max') < getCoord(overlapSqs, 'x', 'max')) {
          shape._sq.forEach(sq => sq.setx = sq.x - dx * 25);
        } else {
          shape._sq.forEach(sq => sq.setx = sq.x + dx * 25);
        }
      } else {
        let dy = countOfShift(overlapSqs, 'y');
        console.log(dy);
        shape._sq.forEach(sq => sq.sety = sq.y - dy * 25);
      }
    }
  };
  
  methods[type]();
};
