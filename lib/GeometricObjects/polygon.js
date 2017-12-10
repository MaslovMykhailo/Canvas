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
      delete this[`_p${n}`];
      return;
    } else {
      let coord = arg;

      let points = Object.keys(this);
      for(let i = 0 ; i < points.length ; i++) {
        if(this[points[i]].x === coord[0] && this[points[i]].y === coord[1]) {
          delete this[points[i]];
          return;
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
}