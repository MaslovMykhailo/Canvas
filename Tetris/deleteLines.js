'use strict';

const lines = {
  count: 0,
  getCount() {
    return lines.count;
  },
  incCount() {
    lines.count++;
  },
  clear() {
    lines.count = 0;
  }
};

const score = {
  scoreValue: lines.getCount() * 100,
  level: 1 + (lines.getCount() - lines.getCount() % 5) / 5,
  get getScoreValue() {
    return score.scoreValue;
  },
  get getLevel() {
    return score.level;
  },
  clear() {
    score.countOfLines = 0;
  }
};

const upDateScore = () => {
  lines.incCount();
  score.scoreValue = lines.getCount() * 100;
  score.level = 1 + (lines.getCount() - lines.getCount() % 5) / 5;
};

const shiftLines = (arrOfLines) => {
  let indexOfFullLines = [];
  
  arrOfLines.forEach(l => {
    if(l.isFull) indexOfFullLines.push(l.i);
  });
  
  arrOfLines.forEach(l => {
    indexOfFullLines.forEach(i => {
      if(l.i < i) {
        l.arrOfSq.forEach(sq => {
          sq.sety = sq.y + 25;
        });
      }
    });
  });
  
  return arrOfLines;
};

const findFullLines = (statSqs) => {
  const arrOfLines = [];
  for(let i = 0 ; i <= 20 ; i++) {
    let y = 10 + 25 * (i - 1);
    let segment = new Segment(0, y, 250, y);
    
    let arrOfSq = [];
    statSqs.forEach(sq => {
      if(intersect(segment, sq)) arrOfSq.push(sq);
    });
    
    let isFull = false;
    if(arrOfSq.length >= 10) {
      isFull = true;
      arrOfSq = [];
      upDateScore();
    }
    
    arrOfLines.push({i, isFull, arrOfSq});
  }
  return arrOfLines;
};

const create = (alwaysStat, arrOfLines) => {
  let res = alwaysStat.slice();
  
  arrOfLines.forEach(l => {
    res = res.concat(l.arrOfSq);
  });
  
  return res;
};

const newStatSquares = (statSqs, alwaysStat) => {
  return create(alwaysStat, shiftLines(findFullLines(statSqs)));
};