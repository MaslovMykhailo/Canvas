'use strict';

// point-object intersection

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

// segment-object intersection

const segmentsIntersect = (segment1, segment2) => {
  let vec1 = new Vector(segment1.x0, segment1.x1, segment1.y0, segment1.y1);
  let vec2 = new Vector(segment2.x0, segment2.x1, segment2.y0, segment2.y1);

  let vec11 = new Vector(segment1.x0, segment1.y0, segment2.x0, segment2.y0);
  let vec12 = new Vector(segment1.x0, segment1.y0, segment2.x1, segment2.y1);
  let vec22 = new Vector(segment2.x0, segment2.y0, segment1.x0, segment1.y0);
  let vec21 = new Vector(segment2.x0, segment2.y0, segment1.x1, segment1.y1);

  if(vec1.cross(vec11)*vec1.cross(vec12) < 0 &&
     vec2.cross(vec22)*vec2.cross(vec21) < 0) {
    return INTERSECT;
  } else {
    return NO_INTERSECT;
  }
}

const segmentRectangleIntersect = (segment, rect) => {
  if (segmentsIntersect(
        segment, new Segment(rect.x0, rect.y0, rect.x0 + rect.width, rect.y0)
      )) {
    return INTERSECT;
  }
  if (segmentsIntersect(
        segment, new Segment(rect.x0, rect.y0, rect.x0, rect.y0 + rect.height)
    )) {
    return INTERSECT;
  }
  if (segmentsIntersect(
        segment, new Segment(rect.x0 + rect.width, rect.y0, rect.x0 + rect.width, rect.y0 + rect.height)
    )) {
    return INTERSECT;
  }
  if (segmentsIntersect(
        segment, new Segment(rect.x0, rect.y0 + rect.height, rect.x0 + rect.width, rect.y0 + rect.height)
    )) {
    return INTERSECT;
  }
  return NO_INTERSECT;
}

const segmentCircleIntersect = (segment, circle) => {

}

// circle-object intersection

const circlesIntersect = (circle1, circle2) => {
  let l = new Segment(circle1.x, circle1.y, circle2.x, circle2.y).length();

  return l < circle1.radius + circle2.radius ? INTERSECT : NO_INTERSECT;
}

const circleRectangleIntersect = (circle, rect) => {

}

// rectangles intersection

const rectanglesIntersect = (rect1, rect2) => {
  let minx1 = rect1.x;
  let miny1 = rect1.y;
  let maxx1 = rect1.x + rect1.width;
  let maxy1 = rect1.y + rect1.height;

  let minx2 = rect2.x;
  let miny2 = rect2.y;
  let maxx2 = rect2.x + rect2.width;
  let maxy2 = rect1.y + rect2.height;

  if((maxx1 > minx2 && maxy1 > miny2) ||
      minx1 < maxx2 && miny1 < maxy2) {
    return INTERSECT;
  } else {
    return NO_INTERSECT;
  }
}

