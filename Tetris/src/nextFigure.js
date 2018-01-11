'use strict';

const newNextFigure = () => {
  let shape = getShape(randomNumber(1, 7).toString());
  
  shape._sq.forEach(sq => {
    sq.setx = sq.x - 50;
    sq.sety = sq.y + 75;
  });
  
  if(shape.kind === 6) {
    shape._sq.forEach(sq => {
      sq.setx = sq.x - 25;
    });
  }
  
  return shape;
};

let nextFigure = newNextFigure();

const rect = new Rectangle(0, 0, 125, 150);

const drawNextFigure = () => {
  rect.draw(smallCtx, 'black');
  nextFigure.draw(smallCtx);
  grid.draw(smallCtx, 1, 'gray');
};