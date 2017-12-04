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
      if(checkCollisionMouse(movingSq, mouseCoords)) {

        changeCoordsSq(movingSq, mouseCoords, 'forward');
        collisionDetection(movingSq, arrOfStatic);

        ctx.clearRect(0, 0, width, height);
        renderMovingSq(movingSq);
        renderStaticRect(arrOfStatic);
      }
      break;
    }
    case 115: {
      if(checkCollisionMouse(movingSq, mouseCoords)) {

        changeCoordsSq(movingSq, mouseCoords, 'back');
        collisionDetection(movingSq, arrOfStatic);

        ctx.clearRect(0, 0, width, height);
        renderMovingSq(movingSq);
        renderStaticRect(arrOfStatic);
      }
      break;
    }
  }
}

// listeners

document.body.addEventListener('load', onloadDraw());
canvas.addEventListener('mousemove', changeMouseCoords);
document.addEventListener('keypress', keyPressedHandler);