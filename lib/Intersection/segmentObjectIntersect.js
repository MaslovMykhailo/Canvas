'use strict';

const segmentsIntersect = (segment1, segment2) => {
    const p = pointOfLineIntersect(segment1, segment2);
    if(p) {
        if(pointSegmentIntersect(p, segment1) && pointSegmentIntersect(p, segment2)) {
            return [p];
        } else {
            return null;
        }
    }
    const p0 = new Point(segment1.x0, segment1.y0);
    const p1 = new Point(segment1.x1, segment1.y1);

    if(pointSegmentIntersect(p0, segment2)) return [p0];
    if(pointSegmentIntersect(p1, segment2)) return [p1];

    return null;
}


const segmentRectangleIntersect = (segment, rect) => {
  if(segment.proto === 'rectangle') return segmentRectangleIntersect(rect, segment);

  const points = [];

  const arrOfSegments = rect.arrOfSegments;
  for(let i = 0 ; i < arrOfSegments.length ; i++) {
    let p = segmentsIntersect(arrOfSegments[i], segment);
    if(p) {
      points.push(...p);
    }
  }

  let p1 = new Point(segment.x0, segment.y0);
  if(pointRectangleIntersect(p1, rect)) points.push(p1);
  let p2 = new Point(segment.x1, segment.y1);
  if(pointRectangleIntersect(p2, rect)) points.push(p2);

  return points.length ? points : null;
}


const segmentCircleIntersect = (segment, circle) => {
  if(segment.proto === 'circle') return segmentCircleIntersect(circle, segment);

  let a = segment.y1 - segment.y0;
  let b = segment.x0 - segment.x1;

  let x1 = 1;
  let y1 = x1 - (circle.x * b) / a + circle.y;

  let y2 = 1;
  let x2 = y2 - (circle.y * a) / b + circle.x;

  const normal1 = new Segment(circle.x, circle.y, x1, y1);
  const normal2 = new Segment(circle.x, circle.y, x2, y2);

  let p1 = pointOfLineIntersect(normal1, segment);
  let p2 = pointOfLineIntersect(normal2, segment);

  p1 = p1 ? p1 : new Point(circle.x, circle.y);
  p2 = p2 ? p2 : new Point(circle.x, circle.y);

  if(!pointCircleIntersect(p1, circle) &&
     !pointCircleIntersect(p2, circle)) return false;

  let l1 = new Segment(circle.x, circle.y, segment.x0, segment.y0).length;
  let l2 = new Segment(circle.x, circle.y, segment.x1, segment.y1).length;

  const points = [];

  if(l1 < circle.radius) points.push(new Point(segment.x0, segment.y0));
  if(l2 < circle.radius) points.push(new Point(segment.x1, segment.y1));
  if(pointSegmentIntersect(p1, segment)) points.push(p1);
  if(pointSegmentIntersect(p2, segment)) points.push(p2);

  return points.length ? points : null;
}

const pointOfLineIntersect = (segment1, segment2) => {
  let A1 = segment1.y1 - segment1.y0;
  let B1 = segment1.x0 - segment1.x1;
  let C1 = A1 * segment1.x0 + B1 * segment1.y0;

  let A2 = segment2.y1 - segment2.y0;
  let B2 = segment2.x0 - segment2.x1;
  let C2 = A2 * segment2.x0 + B2 * segment2.y0;

  let denominator = A1 * B2 - A2 * B1;

  if(denominator === 0) return null;

  let x = (B2 * C1 - B1 * C2) / denominator;
  let y = (A1 * C2 - A2 * C1) / denominator;

  return new Point(x, y);
}