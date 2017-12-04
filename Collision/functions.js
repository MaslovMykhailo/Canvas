'use strict';

// render functions

const renderStaticRect = (arrOfSt) => {
  arrOfSt.forEach(rect => {
    rect.draw(ctx);
  });
}

const renderMovingSq = (moveSq) => {
  moveSq.draw(ctx, mouseCoords, checkBox);
}

// detection of collision

const collisionDetection = (moveSq, arrOfStat) => {
  arrOfStat.forEach(stat => {
    if(intersectionOfMovingAndStaticRect(moveSq, stat)) {
      stat.fillStyle = 'red';
    } else {
      stat.fillStyle = 'black';
    }
  });
}

