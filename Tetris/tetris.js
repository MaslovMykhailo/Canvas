'use strict';

const tetris = {
  moving: getShape(randomNumber(1, 7).toString()),
  grid,
  score,
  lines,
  moveLeft() {
    let def = copy(tetris.moving);
    tetris.moving.moveLeft();
    tetris.moving = correctShift(tetris.moving, def, statSquares, 'moveLeft');
    tetris.moving = intersectHandler(tetris.moving);
  },
  moveRight() {
    let def = copy(tetris.moving);
    tetris.moving.moveRight();
    tetris.moving = correctShift(tetris.moving, def, statSquares, 'moveRight');
    tetris.moving = intersectHandler(tetris.moving);
  },
  turn() {
    let def = copy(tetris.moving);
    tetris.moving.turn();
    tetris.moving = correctShift(tetris.moving, def, statSquares, 'turn');
  },
  drop() {
    while(!intersectWithStatSqs(tetris.moving)) {
      tetris.moving.moveDown();
    }
    tetris.moving = intersectHandler(tetris.moving);
  },
  draw() {
    ctx.clearRect(0, 0, width, height);
  
    tetris.moving.draw(ctx);
    statSquares.forEach(sq => sq.draw(ctx));
  
    tetris.grid.draw(ctx, 2, 'gray');
    
    tetris.moving = intersectHandler(tetris.moving);
    tetris.moving.moveDown();
    console.log(tetris.lines, tetris.score);
  },
  start() {
    alert('start game');
    tetris.moving.draw(ctx);
    statSquares = [].concat(alwaysStatSqs);
    statSquares.forEach(sq => sq.draw(ctx));
  
    tetris.grid.draw(ctx, 2, 'gray');
  }
};