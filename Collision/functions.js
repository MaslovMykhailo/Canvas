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
    let typeIntersection = intersectionOfMovingAndStaticRect(moveSq, stat);
    if (!typeIntersection) {
      stat.fillStyle = 'black';
    } else {
      stat.fillStyle = 'red';

      collisionHandler(moveSq, stat, typeIntersection);
    }
  });
  moveSq.cx = moveSq.x + moveSq.width / 2;
  moveSq.cy = moveSq.y + moveSq.height / 2;
}

// handler collision of squares

const collisionHandler = (moveSq, stat, type) => {
  switch (type) {
    case '1': {
      if (stat.x + stat.width - moveSq.x > stat.y + stat.height - moveSq.y) {
        moveSq.y = stat.y + stat.height;
      } else {
        moveSq.x = stat.x + stat.width;
      }
      break;
    }
    case '2': {
      if (moveSq.x + moveSq.width - stat.x > stat.y + stat.height - moveSq.y) {
        moveSq.y = stat.y + stat.height;
      } else {
        moveSq.x = stat.x - moveSq.width;
      }
      break;
    }
    case '3': {
      if (stat.x + stat.width - moveSq.x > moveSq.y + moveSq.height - stat.y) {
        moveSq.y = stat.y - moveSq.height;
      } else {
        moveSq.x = stat.x + stat.width;
      }
      break;
    }
    case '4': {
      if (moveSq.x + moveSq.width - stat.x > moveSq.y + moveSq.height - stat.y) {
        moveSq.y = stat.y - moveSq.height;
      } else {
        moveSq.x = stat.x - moveSq.width;
      }
      break;
    }
    case '12': {
      moveSq.y = stat.y + stat.height;
      break;
    }
    case '24': {
      moveSq.x = stat.x - moveSq.width;
      break;
    }
    case '34': {
      moveSq.y = stat.y - moveSq.height;
      break;
    }
    case '13': {
      moveSq.x = stat.x + stat.width;
      break;
    }
  }
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