'use strict';

const segmentsIntersect = (segment1, segment2) => {
  let A1 = segment1.y1 - segment1.y0;
  let B1 = segment1.x0 - segment1.x1;
  let C1 = A1 * segment1.x0 + B1 * segment1.y0;

  let A2 = segment2.y1 - segment2.y0;
  let B2 = segment2.x0 - segment2.x1;
  let C2 = A2 * segment2.x0 + B2 * segment2.y0;

  let denominator = A1 * B2 - A2 * B1;

  if(denominator === 0) {
    if(pointSegmentIntersect(new Point(segment1.x0, segment1.y0), segment2)) return INTERSECT;
    if(pointSegmentIntersect(new Point(segment1.x1, segment1.y1), segment2)) return INTERSECT;
    return NO_INTERSECT;
  }

  let x = (B2 * C1 - B1 * C2) / denominator;
  let y = (A1 * C2 - A2 * C1) / denominator;

  return pointSegmentIntersect(new Point(x, y), segment1) &&
         pointSegmentIntersect(new Point(x, y), segment2);
}


const segmentRectangleIntersect = (segment, rect) => {

  if(pointRectangleIntersect(new Point(segment.x0, segment.y0), rect)) return INTERSECT;
  if(pointRectangleIntersect(new Point(segment.x1, segment.y1), rect)) return INTERSECT;

  if (segmentsIntersect(
      segment, new Segment(rect.x, rect.y, rect.x + rect.width, rect.y)
    )) {
    return INTERSECT;
  }
  if (segmentsIntersect(
      segment, new Segment(rect.x, rect.y, rect.x, rect.y + rect.height)
    )) {
    return INTERSECT;
  }
  if (segmentsIntersect(
      segment, new Segment(rect.x + rect.width, rect.y, rect.x + rect.width, rect.y + rect.height)
    )) {
    return INTERSECT;
  }
  if (segmentsIntersect(
      segment, new Segment(rect.x, rect.y + rect.height, rect.x + rect.width, rect.y + rect.height)
    )) {
    return INTERSECT;
  }
  return NO_INTERSECT;
}


const segmentCircleIntersect = (segment, circle) => {
  let a = segment.y1 - segment.y0;
  let b = segment.x0 - segment.x1;

  let x = 1;
  let y = x - (circle.x * b) / a + circle.y;

  const normal = new Segment(circle.x, circle.y, x, y);

  let A1 = segment.y1 - segment.y0;
  let B1 = segment.x0 - segment.x1;
  let C1 = A1 * segment.x0 + B1 * segment.y0;

  let A2 = normal.y1 - normal.y0;
  let B2 = normal.x0 - normal.x1;
  let C2 = A2 * normal.x0 + B2 * normal.y0;

  let denominator = A1 * B2 - A2 * B1;

  let xp = (B2 * C1 - B1 * C2) / denominator;
  let yp = (A1 * C2 - A2 * C1) / denominator;

  const p = new Point(xp, yp);

  if(!pointCircleIntersect(p, circle)) return NO_INTERSECT;

  let l1 = new Segment(circle.x, circle.y, segment.x0, segment.y0).length();
  let l2 = new Segment(circle.x, circle.y, segment.x1, segment.y1).length();

  if((l1 < circle.radius || l2 < circle.radius) ||
    pointSegmentIntersect(p, segment)) {
    return INTERSECT;
  } else {
    return NO_INTERSECT;
  }
}