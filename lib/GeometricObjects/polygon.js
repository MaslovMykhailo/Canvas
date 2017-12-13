'use strict';

class Polygon {
  constructor(...points) {
    points.forEach((point, i) => {
      this[`_p${i}`] = new Point(point[0], point[1]);
    })
  }

  get arrOfPoints() {
    let arrOfPoints = [];
    Object.keys(this).forEach(key => {
      arrOfPoints.push(this[key]);
    })
    return arrOfPoints;
  }

  get arrOfSegments() {
    let arrOfSegments = [];
    let points = Object.keys(this);

    for(let i = 0 ; i < points.length ; i++) {
      if(i === 0) {
        arrOfSegments.push(
          new Segment(this[points[points.length - 1]].x, this[points[points.length - 1]].y,
                      this[points[i]].x, this[points[i]].y));
        continue;
      }

      arrOfSegments.push(
        new Segment(this[points[i-1]].x, this[points[i-1]].y,
                    this[points[i]].x, this[points[i]].y));
    }
    return arrOfSegments;
  }

  draw(ctx, color) {
    ctx.beginPath();
    ctx.fillStyle = color;

    let points = this.arrOfPoints;

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
    if(typeof(arg) === 'number') {
      let n = arg;
      return this[`_p${n}`];
    } else {
      let coord = arg;

      let points = Object.keys(this);
      for(let i = 0 ; i < points.length ; i++) {
        if(this[points[i]].x === coord[0] && this[points[i]].y === coord[1]) {
          return this[points[i]];
        }
      }
      console.log(`point ${arg} is not defined`);
    }
  }

  removePoint(arg) {
    if(typeof(arg) === 'number') {
      let n = arg;
      let points = Object.keys(this);

      if(n > points.length -1){
        console.log(`point ${arg} is not defined`);
        return;
      }
      delete this[`_p${n}`];

      for(let i = n ; i < points.length ; i++) {
          this[points[i]] = this[points[i+1]];

          if(i === points.length - 1) {
            delete this[points[i]];
            return;
          }
      }
    } else {
      let coord = arg;

      let points = Object.keys(this);
      let found = false;
      for(let i = 0 ; i < points.length ; i++) {
        if(this[points[i]].x === coord[0] && this[points[i]].y === coord[1]) {
          delete this[points[i]];
          found = true;
        }

        if(found) {
          this[points[i]] = this[points[i+1]];

          if(i === points.length - 1) {
            delete this[points[i]];
            return;
          }
        }
      }
      console.log(`point ${arg} is not defined`);
    }
  }

  addPoint(x, y) {
    let newPoint = new Point(x, y);
    let n = Object.keys(this).length;
    this[`_p${n}`] = newPoint;
  }

  get proto() {
    return 'polygon';
  }

  get outerRect() {
    const arrOfPoints = this.arrOfPoints;

    let xmax = 0, xmin = 100000, ymax = 0, ymin = 100000;

    for(let i = 0 ; i < arrOfPoints.length ; i++) {
      xmax = Math.max(xmax, arrOfPoints[i].x);
      ymax = Math.max(ymax, arrOfPoints[i].y);
      xmin = Math.min(xmin, arrOfPoints[i].x);
      ymin = Math.min(ymin, arrOfPoints[i].y);
    }

    return new Rectangle(xmin, ymin, (xmax-xmin), (ymax-ymin));
  }
}