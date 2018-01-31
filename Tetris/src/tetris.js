'use strict';

const tetris = {
  firstRender: true,
  moving: getShape(newNextFigure().kind),
  grid,
  moveDown() {
    tetris.moving = intersectHandler(tetris.moving);
    tetris.moving.moveDown();
    // tetris.moving = intersectHandler(tetris.moving);
    tetris.draw();
  },
  moveLeft() {
    let def = copy(tetris.moving);
    tetris.moving.moveLeft();
    tetris.moving = correctShift(tetris.moving, def, statSquares, 'moveLeft');
    tetris.draw();
    tetris.moving = intersectHandler(tetris.moving);
  },
  moveRight() {
    let def = copy(tetris.moving);
    tetris.moving.moveRight();
    tetris.moving = correctShift(tetris.moving, def, statSquares, 'moveRight');
    tetris.draw();
    tetris.moving = intersectHandler(tetris.moving);
  },
  turn() {
    let def = copy(tetris.moving);
    tetris.moving.turn();
    tetris.moving = correctShift(tetris.moving, def, statSquares, 'turn');
    tetris.draw();
  },
  drop() {
    while(!intersectWithStatSqs(tetris.moving)) {
      tetris.moving.moveDown();
    }
    tetris.moving = intersectHandler(tetris.moving);
    tetris.draw();
  },
  draw() {
    ctx.clearRect(0, 0, width, height);
  
    smallCtx.clearRect(0, 0, w, h);
    drawNextFigure();
    
    tetris.moving.draw(ctx);
    statSquares.forEach(sq => sq.draw(ctx));
  
    tetris.grid.draw(ctx, 1, 'gray');
  },
  start() {
    // alert('start game');
    statSquares = [].concat(alwaysStatSqs);
  
    lines.clear();
    score.clear();
    upDateScore();
    
    if(tetris.firstRender) {
      timer.newInterval();
    } else {
      timer.clear();
      timer.newInterval();
    }
    tetris.firstRender = false;
  },
};