'use strict';

const moveToMouse = (x, y ,step) => {
  let length = Math.sqrt(
    Math.pow((mouse.x - x), 2) + Math.pow((mouse.y - y), 2)
  );

  let dx;
  let dy;

  if(length !== 0) {
    dx = ((mouse.x - x) * step) / length;
    dy = ((mouse.y - y) * step) / length;
  } else {
    dx = dy = 0;
  }

  return [dx, dy];
}