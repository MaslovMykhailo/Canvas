'use strict';

const contains = (polygon, obj) => {
  switch(obj.proto) {
    case 'point': {
      return polygonContainPoint(polygon, obj);
    }
    case 'segment': {
      return polygonContainSegment(polygon, obj);
    }
    case 'rectangle': {
      return polygonContainRect(polygon, obj);
    }
    case 'circle': {
      return polygonContainCircle(polygon, obj);
    }
    case 'polygon': {
      return polygonContainPolygon(polygon, obj);
    }
  }
}