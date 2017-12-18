'use strict';

const tgOfAngleBetweenSegmentAndOX = (segment) => {
  let deltaX = Math.abs(segment.x0 - segment.x1);
  if(deltaX === 0) return 'right';
  let deltaY = Math.abs(segment.y0 - segment.y1);

  return deltaY/deltaX;
}