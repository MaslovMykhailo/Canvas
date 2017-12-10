'use strict';

const rectanglesIntersect = (rect1, rect2) => {
  let minx1 = rect1.x;
  let miny1 = rect1.y;
  let maxx1 = rect1.x + rect1.width;
  let maxy1 = rect1.y + rect1.height;

  let minx2 = rect2.x;
  let miny2 = rect2.y;
  let maxx2 = rect2.x + rect2.width;
  let maxy2 = rect2.y + rect2.height;

  if((maxx1 >= minx2 && minx1 <= maxx2) &&
    (maxy1 >= miny2 && miny1 <= maxy2)) {
    return true;
  } else {
    return false;
  }
}