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

  let points = [];

  const arrOfSegments = rect.arrOfSegments;
  for(let i = 0 ; i < arrOfSegments.length ; i++) {
    let p = segmentsIntersect(arrOfSegments[i], segment);
    if(p) {
      points = points.concat(p);
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

  const points = [];

  let normal = segment.normalToPoint(new Point(circle.x, circle.y));
  let p = pointOfLineIntersect(normal, segment);
  if(p && pointSegmentIntersect(p, segment) && pointCircleIntersect(p, circle)) points.push(p);

  let p0 = new Point(segment.x0, segment.y0);
  if(pointCircleIntersect(p0, circle)) points.push(p0);
  let p1 = new Point(segment.x1, segment.y1);
  if(pointCircleIntersect(p1, circle)) points.push(p1);

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

  let x = Math.round((B2 * C1 - B1 * C2) / denominator);
  let y = Math.round((A1 * C2 - A2 * C1) / denominator);

  return new Point(x, y);
}