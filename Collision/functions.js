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

// check collision with mouse pointer

const checkCollisionMouse = (moving, mouse) => {
  return Math.abs(mouse.x - moving.cx) > moving.width/4 ||
         Math.abs(mouse.y - moving.cy) > moving.height/4;
}

// change coords of moving square

const changeCoordsSq = (sq, mouse, type) => {
  let res = type === 'forward' ?
    move(sq.cx, sq.cy, mouse.x, mouse.y, sq.step).forward() :
    move(sq.cx, sq.cy, mouse.x, mouse.y, sq.step).back();

  sq.cx = res[0];
  sq.cy = res[1];
  sq.x = sq.cx - sq.width/2;
  sq.y = sq.cy - sq.height/2;
}