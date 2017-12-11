'use strict';

const renderMovingRect = (ctx, rect) => {
  ctx.clearRect(0, 0, width, height);

  let coordChange = moveToMouse(rect.x + rect.width/2, rect.y + rect.height/2, 5);

  rect.setx = rect.x + coordChange[0];
  rect.sety = rect.y + coordChange[1];

  rect.draw(ctx, 'black');
  renderDirectingVector(ctx,new Point(rect.x + rect.width/2, rect.y + rect.height/2));
}