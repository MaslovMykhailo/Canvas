'use strict';

const pointOfDisplaced = (obj) => {
  switch (obj.proto) {
    case 'circle': {
      return pointOfDisplacedForCircle(obj);
    }
    case 'rectangle': {
      return pointOfDisplacedForRect(obj);
    }
    case 'polygon': {
      return pointOfDisplacedForPolygon(obj);
    }
  }
}

const pointOfDisplacedForCircle = (circle) => {
  return new Point(circle.x, circle.y);
}

const pointOfDisplacedForRect = (rect) => {
  return new Point(rect.x + rect.width/2, rect.y + rect.height/2);
}

const pointOfDisplacedForPolygon = (polygon) => {
  const arrOfPoints = polygon.arrOfPoints;

  let xmax = 0, xmin = 100000, ymax = 0, ymin = 100000;

  for(let i = 0 ; i < arrOfPoints.length ; i++) {
    xmax = Math.max(xmax, arrOfPoints[i].x);
    ymax = Math.max(ymax, arrOfPoints[i].y);
    xmin = Math.min(xmin, arrOfPoints[i].x);
    ymin = Math.min(ymin, arrOfPoints[i].y);
  }

  return new Point((xmax - xmin)/2, (ymax - ymin)/2);
}