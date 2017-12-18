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

      if(tryAgainX && tryAgainY && i === 1) {
        let mouseCoord = [mouse.x, mouse.y];

        const l = intersect(new Segment(moving.x, moving.y, mouse.x, mouse.y), arr[0]);

        if(tgOfAngleBetweenSegmentAndOX(l) < 1) {
          mouse.sety = mouse.y - 2*(mouse.y - moving.y);
          changeX(moving, beforeMove, arr, i);
          changeY(moving, beforeMove, arr, i);
          mouse.sety = mouseCoord[1];
        } else {
          mouse.setx = mouse.x - 2*(mouse.x - moving.x);
          changeX(moving, beforeMove, arr, i);
          changeY(moving, beforeMove, arr, i);
          mouse.setx = mouseCoord[0];
        }
      }
    }
  } else {
    changeCoord(moving);
  }
}