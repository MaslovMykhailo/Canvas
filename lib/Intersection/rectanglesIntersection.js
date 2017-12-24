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

  let intersect;

  if((maxx1 >= minx2 && minx1 <= maxx2) &&
    (maxy1 >= miny2 && miny1 <= maxy2)) {
    intersect = true;
  } else {
    intersect = false;
  }

  if(intersect) {
    const points = []
    let arr1 = rect1.arrOfSegments;
    let arr2 = rect2.arrOfSegments;

    for(let i = 0 ; i < arr1.length ; i++) {
      for(let j = 0 ; j < arr2.length ; j++) {
        let p = segmentsIntersect(arr1[i], arr2[j]);
        if(p) points.push(...p);
      }
    }

    return points;
  } else {
    return null;
  }
}