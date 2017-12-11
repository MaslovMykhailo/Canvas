'use strict';

const polygonContainPoint = (polygon, point) => {
  const l = new Segment(0, 0, point.x, point.y);
  const arrOfSegments = polygon.arrOfSegments;
  let count = 0;

  for(let i = 0 ; i < arrOfSegments.length ; i++) {
    if(segmentsIntersect(l, arrOfSegments[i])) {
      count++;
    }
  }

  if(count % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

const polygonContainSegment = (polygon, segment) => {
  const p1 = new Point(segment.x0, segment.y0);
  const p2 = new Point(segment.x1, segment.y1);

  if(polygonContainPoint(polygon, p1) && polygonContainPoint(polygon, p2)) {
    return true;
  } else {
    return false;
  }
}

const polygonContainRect = (polygon, rect) => {
  const p1 = new Point(rect.x, rect.y);
  const p2 = new Point(rect.x + rect.width, rect.y);
  const p3 = new Point(rect.x, rect.y + rect.height);
  const p4 = new Point(rect.x + rect.width, rect.y + rect.height);
  const arrOfPoints = [p1, p2, p3, p4];

  for(let i = 0 ; i < 4 ; i++) {
    if(!polygonContainPoint(polygon, arrOfPoints[i])) {
      return false;
    }
  }
  return true;
}

const polygonContainCircle = (polygon, circle) => {
  const l1 = new Segment(circle.x - circle.radius, circle.y, circle.x + circle.radius, circle.y);
  const l2 = new Segment(circle.x, circle.y - circle.radius, circle.x, circle.y + circle.radius);

  const arrOfSegments = [l1, l2];

  if(polygonContainSegment(polygon, l1) && polygonContainSegment(polygon, l2)) {
    return true;
  } else {
    return false;
  }
}

const polygonContainPolygon = (polygon1, polygon2) => {
  const arrOfPoints = polygon2.arrOfPoints;

  for(let i = 0 ; i < arrOfPoints.length; i++) {
    if(!polygonContainPoint(polygon1, arrOfPoints[i])) {
      return false;
    }
  }
  return true;
};
