'use strict';

const pointSegmentIntersect = (point, segment) => {
  let l = segment.length();

  let l1 = new Segment(segment.x0, segment.y0, point.x, point.y).length();
  let l2 = new Segment(segment.x1, segment.y1, point.x, point.y).length();

  return Math.abs(l1 + l2 - l) < 0.1 ? INTERSECT : NO_INTERSECT;
}


const pointRectangleIntersect = (point, rect) => {
  let xmin = rect.x;
  let xmax = rect.x + rect.width;
  let ymin = rect.y;
  let ymax = rect.y + rect.height;

  if(point.x > xmin && point.x < xmax &&
    point.y > ymin && point.y < ymax) {
    return INTERSECT;
  } else {
    return NO_INTERSECT;
  }
}


const pointCircleIntersect = (point, circle) => {
  let l = new Segment(point.x, point.y, circle.x, circle.y).length();

  return l < circle.radius ? INTERSECT : NO_INTERSECT;
}