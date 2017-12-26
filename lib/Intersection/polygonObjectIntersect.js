'use strict';

const objectPolygonIntersect = (obj, polygon) => {
  if(obj.proto === 'polygon') return objectPolygonIntersect(polygon, obj);

    let f;
    switch (obj.proto) {
      case 'point': {
        f = pointSegmentIntersect;
        break;
      }
      case 'segment': {
        f = segmentsIntersect;
        break;
      }
      case 'circle': {
        f = segmentCircleIntersect;
        break;
      }
      case 'rectangle': {
        f = segmentRectangleIntersect;
        break;
      }
    }

    const arrOfSegments = polygon.arrOfSegments;
    const points = [];

    for (let i = 0; i < arrOfSegments.length; i++) {
      let p = f(obj, arrOfSegments[i]);
      if (p) {
        points.push(...p);
      }
    }

    return points.length ? points : null;
}

const polygonsIntersect = (polygon1, polygon2) => {

  if(rectanglesIntersect(polygon1.outerRect, polygon2.outerRect)) {
    const arrOfSegments1 = polygon1.arrOfSegments;
    const arrOfSegments2 = polygon2.arrOfSegments;
    const points = [];

    for (let i = 0; i < arrOfSegments1.length; i++) {
      for (let j = 0; j < arrOfSegments2.length; j++) {
        let p = segmentsIntersect(arrOfSegments1[i], arrOfSegments2[j]);
        if (p) {
          points.push(...p);
        }
      }
    }

    return points.length ? points : null;
  } else {
    return false;
  }
}

