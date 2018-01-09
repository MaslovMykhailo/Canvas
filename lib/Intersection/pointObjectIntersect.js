'use strict';

const pointSegmentIntersect = (point, segment) => {
  if(point.proto === 'segment') return pointSegmentIntersect(segment, point);

  let l = segment.length;
  let l1 = new Segment(segment.x0, segment.y0, point.x, point.y).length;
  let l2 = new Segment(segment.x1, segment.y1, point.x, point.y).length;

  return Math.abs(l1 + l2 - l) < 0.05 ? [point] : null;
}


const pointRectangleIntersect = (point, rect) => {
  if(point.proto === 'rectangle') return pointRectangleIntersect(rect, point);

  let xmin = rect.x;
  let xmax = rect.x + rect.width;
  let ymin = rect.y;
  let ymax = rect.y + rect.height;

  if(point.x > xmin && point.x < xmax &&
     point.y > ymin && point.y < ymax) {
    return [point];
  } else {
    return null;
  }
}


const pointCircleIntersect = (point, circle) => {
  if(point.proto === 'circle') return pointCircleIntersect(circle, point);

  let l = new Segment(point.x, point.y, circle.x, circle.y).length;

  return l < circle.radius ? [point] : null;
}