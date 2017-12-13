'use strict';

const collisionDetection = (moving, arrOfObj) => {

  const arr = arrOfObj.filter(obj => intersect(moving.outerRect, obj));

  if(arr.length) {
    const beforeMove = [moving.x, moving.y];

    let tryAgainX = changeX(moving, beforeMove, arr, moving.step);
    let tryAgainY = changeY(moving, beforeMove, arr, moving.step);

    for (let i = moving.step - 1; i > 0; i--) {
      if (tryAgainX) tryAgainX = changeX(moving, beforeMove, arr, i);
      if (tryAgainY) tryAgainY = changeY(moving, beforeMove, arr, i);
    }
  } else {
    changeCoord(moving);
  }
}