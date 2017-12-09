'use strict';

const circlesIntersect = (circle1, circle2) => {
  let l = new Segment(circle1.x, circle1.y, circle2.x, circle2.y).length;

  return l < circle1.radius + circle2.radius ? INTERSECT : NO_INTERSECT;
}


const circleRectangleIntersect = (circle, rect) => {
  if(circle.proto === 'rectangle') return circleRectangleIntersect(rect, circle);

  let xmin = rect.x;
  let ymin = rect.y;
  let xmax = rect.x + rect.width;
  let ymax = rect.y + rect.height;

  if(circle.x < xmax && circle.x > xmin && circle.y < ymax && circle.y > ymin) return INTERSECT;
  if(segmentCircleIntersect(new Segment(xmin, ymin, xmax, ymin), circle)) return INTERSECT;
  if(segmentCircleIntersect(new Segment(xmin, ymin, xmin, ymax), circle)) return INTERSECT;
  if(segmentCircleIntersect(new Segment(xmax, ymax, xmin, ymax), circle)) return INTERSECT;
  if(segmentCircleIntersect(new Segment(xmax, ymax, xmax, ymin), circle)) return INTERSECT;

  return NO_INTERSECT
}