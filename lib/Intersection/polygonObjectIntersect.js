'use strict';

const objectPolygonIntersect = (obj, polygon) => {
  if(obj.proto === 'polygon') return objectPolygonIntersect(polygon, obj);

  if(intersect(polygon.outerRect, obj)) {
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

    for (let i = 0; i < arrOfSegments.length; i++) {
      if (f(obj, arrOfSegments[i])) {
        return true;
      }
    }

    return false;
  } else {
    return false;
  }
}

const polygonsIntersect = (polygon1, polygon2) => {

  if(rectanglesIntersect(polygon1.outerRect, polygon2.outerRect)) {
    const arrOfSegments1 = polygon1.arrOfSegments;
    const arrOfSegments2 = polygon2.arrOfSegments;

    for (let i = 0; i < arrOfSegments1.length; i++) {
      for (let j = 0; j < arrOfSegments2.length; j++) {
        if (segmentsIntersect(arrOfSegments1[i], arrOfSegments2[j])) {
          return true;
        }
      }
    }

    return false;
  } else {
    return false;
  }
}

