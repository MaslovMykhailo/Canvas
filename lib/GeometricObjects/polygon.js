'use strict';

class Polygon {
  constructor(...points) {
    this._points = [];
    points.forEach(point => {
      this._points.push(new Point(point[0], point[1]));
    });

    const arrOfPoints = this._points;

    let xmax = 0, xmin = 100000, ymax = 0, ymin = 100000;

    for(let i = 0 ; i < arrOfPoints.length ; i++) {
      xmax = Math.max(xmax, arrOfPoints[i].x);
      ymax = Math.max(ymax, arrOfPoints[i].y);
      xmin = Math.min(xmin, arrOfPoints[i].x);
      ymin = Math.min(ymin, arrOfPoints[i].y);
    }

    this._outerRect = new Rectangle(xmin, ymin, (xmax-xmin), (ymax-ymin));
  }

  get arrOfPoints() {
    return this._points;
  }

  get arrOfSegments() {
    let arrOfSegments = [];
    let points = this._points;

    for(let i = 0 ; i < points.length ; i++) {
      if(i === 0) {
        arrOfSegments.push(
          new Segment(points[points.length - 1].x, points[points.length - 1].y,
                      points[i].x, points[i].y));
        continue;
      }

      arrOfSegments.push(
        new Segment(points[i-1].x, points[i-1].y,
                    points[i].x, points[i].y));
    }
    return arrOfSegments;
  }

  draw(ctx, color) {
    ctx.beginPath();
    ctx.fillStyle = color;

    let points = this._points;

    for(let i = 0 ; i < points.length ; i++) {
      if (i === 0) {
        ctx.moveTo(points[i].x, points[i].y);
        continue;
      }
      ctx.lineTo(points[i].x, points[i].y);
    }

    ctx.fill();
    ctx.closePath();
  }

  getPoint(arg) {
    return this._points(this._points.indexOf(arg));
  }

  removePoint(arg) {
    let coord = arg;

    let points = this.arrOfPoints;
    let i = points.indexOf(arg);
    this._points.splice(i, 1);

    const arrOfPoints = this._points;

    let xmax = 0, xmin = 100000, ymax = 0, ymin = 100000;

    for(let i = 0 ; i < arrOfPoints.length ; i++) {
      xmax = Math.max(xmax, arrOfPoints[i].x);
      ymax = Math.max(ymax, arrOfPoints[i].y);
      xmin = Math.min(xmin, arrOfPoints[i].x);
      ymin = Math.min(ymin, arrOfPoints[i].y);
    }

    this._outerRect = new Rectangle(xmin, ymin, (xmax-xmin), (ymax-ymin));
  }

  addPoint(x, y) {
    let newPoint = new Point(x, y);
    this._points.push(newPoint);

    const arrOfPoints = this._points;

    let xmax = 0, xmin = 100000, ymax = 0, ymin = 100000;

    for(let i = 0 ; i < arrOfPoints.length ; i++) {
      xmax = Math.max(xmax, arrOfPoints[i].x);
      ymax = Math.max(ymax, arrOfPoints[i].y);
      xmin = Math.min(xmin, arrOfPoints[i].x);
      ymin = Math.min(ymin, arrOfPoints[i].y);
    }

    this._outerRect = new Rectangle(xmin, ymin, (xmax-xmin), (ymax-ymin));
  }

  get proto() {
    return 'polygon';
  }

  get outerRect() {
    return this._outerRect;
  }
}