'use strict';

const collisionDetection = (moving, arrOfObj) => {
  const beforeMove = [moving.x, moving.y];

  let tryAgainX = false, tryAgainY = false;
  let step = 5;

  const changeX = (step) => {
    let x = moveToMouse(pointOfDisplaced(moving), step)[0];
    moving.setx = moving.x + x;
    if(arrOfObj.some(obj => intersect(moving, obj))) {
      moving.setx = beforeMove[0];
      tryAgainX = true
    } else {
      tryAgainX = false;
    }
  }

  const changeY = (step) => {
    let y = moveToMouse(pointOfDisplaced(moving), step)[1];
    moving.sety = moving.y + y;
    if(arrOfObj.some(obj => intersect(moving, obj))) {
      moving.sety = beforeMove[1];
      tryAgainY = true
    } else {
      tryAgainY = false;
    }
  }

  changeX(step);
  changeY(step);

  for(let i = step - 1 ; i > 1 ; i--) {
    if(tryAgainX) changeX(i);
    if(tryAgainY) changeY(i);
  }
}