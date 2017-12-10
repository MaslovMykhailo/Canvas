'use strict';

const intersect = (obj1, obj2) => {
  if((obj1.proto === 'point' && obj2.proto === 'segment') ||
     (obj1.proto === 'segment' && obj2.proto === 'point')) {
    return pointSegmentIntersect(obj1, obj2);
  }

  if((obj1.proto === 'point' && obj2.proto === 'circle') ||
     (obj1.proto === 'circle' && obj2.proto === 'point')) {
    return pointCircleIntersect(obj1, obj2);
  }

  if((obj1.proto === 'point' && obj2.proto === 'rectangle') ||
     (obj1.proto === 'rectangle' && obj2.proto === 'point')) {
    return pointRectangleIntersect(obj1, obj2);
  }

  if((obj1.proto === 'segment' && obj2.proto === 'circle') ||
     (obj1.proto === 'circle' && obj2.proto === 'segment')) {
    return segmentCircleIntersect(obj1, obj2);
  }

  if((obj1.proto === 'segment' && obj2.proto === 'rectangle') ||
     (obj1.proto === 'rectangle' && obj2.proto === 'segment')) {
    return segmentRectangleIntersect(obj1, obj2);
  }

  if(obj1.proto === 'segment' && obj2.proto === 'segment') {
    return segmentsIntersect(obj1, obj2);
  }

  if((obj1.proto === 'circle' && obj2.proto === 'rectangle') ||
     (obj1.proto === 'rectangle' && obj2.proto === 'circle')) {
    return circleRectangleIntersect(obj1, obj2);
  }

  if(obj1.proto === 'circle' && obj2.proto === 'circle') {
    return circlesIntersect(obj1, obj2);
  }

  if(obj1.proto === 'rectangle' && obj2.proto === 'rectangle') {
    return rectanglesIntersect(obj1, obj2);
  }

  if(obj1.proto === 'polygon' || obj2.proto === 'polygon') {
    if(obj1.proto === 'polygon' && obj2.proto === 'polygon') {
      return polygonsIntersect(obj1, obj2);
    } else {
      return objectPolygonIntersect(obj1, obj2);
    }
  }
}
