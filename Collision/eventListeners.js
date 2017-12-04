'use strict';

// functions

const onloadDraw = () => {
  renderMovingSq(movingSq);
  renderStaticRect(arrOfStatic);
}

const changeMouseCoords = (e) => {
  mouseCoords.x = e.pageX;
  mouseCoords.y = e.pageY;

  ctx.clearRect(0, 0, width, height);
  renderMovingSq(movingSq);
  renderStaticRect(arrOfStatic);
}

const keyPressedHandler = (e) => {
  switch(e.keyCode) {
    case 119: {
      if(Math.abs(mouseCoords.x - movingSq.cx) > movingSq.width/4 ||
         Math.abs(mouseCoords.y - movingSq.cy) > movingSq.height/4) {

        let res =
          move(movingSq.cx, movingSq.cy, mouseCoords.x, mouseCoords.y, movingSq.step)
            .forward();

        movingSq.cx = res[0];
        movingSq.cy = res[1];
        movingSq.x = movingSq.cx - movingSq.width/2;
        movingSq.y = movingSq.cy - movingSq.height/2;

        collisionDetection(movingSq, arrOfStatic);

        ctx.clearRect(0, 0, width, height);
        renderMovingSq(movingSq);
        renderStaticRect(arrOfStatic);
        break;
      }
    }
    case 115: {
      if(Math.abs(mouseCoords.x - movingSq.cx) > movingSq.width/4 ||
         Math.abs(mouseCoords.y - movingSq.cy) > movingSq.height/4) {

        let res =
          move(movingSq.cx, movingSq.cy, mouseCoords.x, mouseCoords.y, movingSq.step)
            .back();

        movingSq.cx = res[0];
        movingSq.cy = res[1];
        movingSq.x = movingSq.cx - movingSq.width/2;
        movingSq.y = movingSq.cy - movingSq.height/2;

        ctx.clearRect(0, 0, width, height);
        renderMovingSq(movingSq);
        renderStaticRect(arrOfStatic);
        break;
      }
    }
  }
}

// listeners

document.body.addEventListener('load', onloadDraw());
canvas.addEventListener('mousemove', changeMouseCoords);
document.addEventListener('keypress', keyPressedHandler);