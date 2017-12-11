'use strict';

const renderDirectingVector = (ctx, point) => {
  ctx.beginPath();
  ctx.setLineDash([100, 3000]);
  ctx.moveTo(point.x, point.y);
  ctx.lineTo(mouse.x, mouse.y);
  ctx.stroke();
  ctx.closePath();
}