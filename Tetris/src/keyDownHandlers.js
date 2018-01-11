'use strict';

const keyPressedHandler = (e) => {
  if(e.keyCode === 37) {
    tetris.moveLeft();
  }
  if(e.keyCode === 39) {
    tetris.moveRight();
  }
  if(e.keyCode === 38) {
    tetris.turn();
  }
  if(e.keyCode === 32) {
    tetris.drop();
  }
  if(e.keyCode === 40) {
    tetris.moveDown();
  }
};

document.addEventListener('keydown', keyPressedHandler);