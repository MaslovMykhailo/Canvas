'use strict';

const collisionDetection = (moving, arrOfObj) => {
  const arr = arrOfObj.filter(obj => intersect(moving.outerRect, obj));

  let beforeMove = [moving.x, moving.y];
    let coord = moveToMouse(moving.center, moving.step);
    moving.setx = moving.x + coord[0];

  let points = [];
  arr.forEach(obj => {
    if(intersect(moving, obj)) points.push(...intersect(moving, obj));
  });

  if(points.length) {
    const directVector = [mouse.x - moving.x, mouse.y - moving.y];
    const directNormal = [-directVector[1], directVector[0]];

    let normalx = 100;
    let normaly = (directNormal[1]/directNormal[0]) * (normalx - mouse.x) + mouse.y;

    const normal = new Segment(normalx, normaly, mouse.x, mouse.y);

    let step = 0;

    points.forEach(p => {
      let sx = 100;
      let sy = (directVector[1]/directVector[0]) * (sx - p.x) + p.y;

      let segment = new Segment(sx, sy, p.x, p.y);
      let p2 = pointOfLineIntersect(segment, normal);

      let l = new Segment(p.x, p.y, p2.x, p2.y);

      step = step < l ? l : step;
    });

    moving.setx = beforeMove[0];

    coord = moveToMouse(moving.center, step);
    moving.setx = moving.x + coord[0];
  }
///////////////////////////////////////////////////////
    beforeMove = [moving.x, moving.y];
    coord = moveToMouse(moving.center, moving.step);
    moving.sety = moving.y + coord[1];

    points = [];
    arr.forEach(obj => {
        if(intersect(moving, obj)) points.push(...intersect(moving, obj));
    });

    if(points.length) {
        const directVector = [mouse.x - moving.x, mouse.y - moving.y];
        const directNormal = [-directVector[1], directVector[0]];

        let normalx = 100;
        let normaly = (directNormal[1]/directNormal[0]) * (normalx - mouse.x) + mouse.y;

        const normal = new Segment(normalx, normaly, mouse.x, mouse.y);

        let step = 0;

        points.forEach(p => {
            let sx = 100;
            let sy = (directVector[1]/directVector[0]) * (sx - p.x) + p.y;

            let segment = new Segment(sx, sy, p.x, p.y);
            let p2 = pointOfLineIntersect(segment, normal);

            let l = new Segment(p.x, p.y, p2.x, p2.y);

            step = step < l ? l : step;
        });

        moving.sety = beforeMove[1];

        coord = moveToMouse(moving.center, step);
        moving.sety = moving.y + coord[1];
    }
}