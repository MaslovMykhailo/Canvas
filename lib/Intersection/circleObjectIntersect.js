'use strict';

const circlesIntersect = (circle1, circle2) => {
  let l = new Segment(circle1.x, circle1.y, circle2.x, circle2.y).length;

  if(l < circle1.radius + circle2.radius) {
    if(circle1.radius < circle2.radius) {
      let d = circle1.radius/l;
      return [new Point((circle1.x + d*circle2.x)/(1 + d), (circle1.y + d*circle2.y)/(1 + d))];
    } else {
      let d = circle2.radius/l;
      return [new Point((circle2.x + d*circle1.x)/(1 + d), (circle2.y + d*circle1.y)/(1 + d))];
    }

  } else {
    return null;
  }
}


const circleRectangleIntersect = (circle, rect) => {
  if(circle.proto === 'rectangle') return circleRectangleIntersect(rect, circle);

  let xmin = rect.x;
  let ymin = rect.y;
  let xmax = rect.x + rect.width;
  let ymax = rect.y + rect.height;

  const points = [];
  let p1 = segmentCircleIntersect(new Segment(xmin, ymin, xmax, ymin), circle);
  if(p1) points.push(...p1);
  let p2 = segmentCircleIntersect(new Segment(xmin, ymin, xmin, ymax), circle);
  if(p2) points.push(...p2);
  let p3 = segmentCircleIntersect(new Segment(xmax, ymax, xmin, ymax), circle);
  if(p3) points.push(...p3);
  let p4 = segmentCircleIntersect(new Segment(xmax, ymax, xmax, ymin), circle);
  if(p4) points.push(...p4);

  return points.length ? points : null;
}