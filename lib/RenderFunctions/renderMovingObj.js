'use strict';

const renderMovingObj = (ctx, moving, arrOfObj) => {
  ctx.clearRect(0, 0, width, height);

  collisionDetection(moving, arrOfObj);

  moving.draw(ctx, 'black');
  arrOfObj.forEach(obj => {
    obj.draw(ctx, 'black');
  });
  renderDirectingVector(ctx, pointOfDisplaced(moving));
}