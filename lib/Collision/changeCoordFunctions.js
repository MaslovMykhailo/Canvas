'use strict';

const changeCoord = (moving, arrOfCollisionObj, coordinate) => {

    const beforeMove = [moving.x, moving.y];
    let deltaCoord = moveToMouse(moving.center, moving.step);

    if(coordinate === 'x') {
      moving.setx = moving.x + deltaCoord[0];
    } else {
      moving.sety = moving.y + deltaCoord[1];
    }

    let intersectionPoints = [];
    arrOfCollisionObj.forEach(obj => {
      let p = intersect(moving, obj);
      if(p) intersectionPoints = intersectionPoints.concat(p);
    });

    if(intersectionPoints.length) {
      const directVector = [mouse.x - moving.center.x, mouse.y - moving.center.y];

      const normal = new Segment(moving.center.x, moving.center.y, mouse.x, mouse.y)
                         .normalToPoint(new Point(moving.center.x, moving.center.y));
      const changeStep = [0, 0];
      intersectionPoints.forEach(p => {
        let sx, sy;
        if(directVector !== 0) {
          sx = 100;
          sy = Math.round((directVector[1]/directVector[0]) * (sx - p.x) + p.y);
        } else {
          sy = 100;
          sx = Math.round((directVector[0]/directVector[1]) * (sy - p.y) + p.x);
        }

        const segment = new Segment(sx, sy, p.x, p.y);
        let resPoint = pointOfLineIntersect(segment, normal);

        let l = new Segment(p.x, p.y, resPoint.x, resPoint.y).length;

        if(segment.length < new Segment(sx, sy, resPoint.x, resPoint.y).length) {
            changeStep[0] = changeStep[0] > l ? changeStep[0] : l < moving.step ? l : moving.step;
        } else {
            changeStep[1] = changeStep[1] > l ? changeStep[1] : l < moving.step ? l : moving.step;
        }
      });

      if(coordinate === 'x') {
        moving.setx = beforeMove[0];
      } else {
        moving.sety = beforeMove[1];
      }

      deltaCoord = moveToMouse(moving.center, moving.step - changeStep[0] - changeStep[1]);
      if(coordinate === 'x') {
        moving.setx = moving.x + deltaCoord[0];
      } else {
        moving.sety = moving.y + deltaCoord[1];
      }
    }
}