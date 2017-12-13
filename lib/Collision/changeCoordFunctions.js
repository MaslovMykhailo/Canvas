'use strict';

const changeCoord = (moving) => {
  const coord = moveToMouse(moving.center, moving.step);
  moving.setx = moving.x + coord[0];
  moving.sety = moving.y + coord[1];
}

const changeX = (moving, coordBefore, arrOfObj, step) => {
  let x = moveToMouse(moving.center, step)[0];
  moving.setx = moving.x + x;
  if(arrOfObj.some(obj => intersect(moving, obj))) {
    moving.setx = coordBefore[0];
    return true
  } else {
    return false;
  }
}

const changeY = (moving, coordBefore, arrOfObj, step) => {
  let y = moveToMouse(moving.center, step)[1];
  moving.sety = moving.y + y;
  if(arrOfObj.some(obj => intersect(moving, obj))) {
    moving.sety = coordBefore[1];
    return true
  } else {
    return false;
  }
}