'use strict';

const moveToMouse = (point, step) => {
  let length = Math.sqrt(
    Math.pow((mouse.x - point.x), 2) + Math.pow((mouse.y - point.y), 2)
  );

  let dx;
  let dy;

  if(length > 5) {
    dx = ((mouse.x - point.x) * step) / length;
    dy = ((mouse.y - point.y) * step) / length;
  } else {
    dx = dy = 0;
  }

  return [dx, dy];
}