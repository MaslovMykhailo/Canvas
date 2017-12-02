'use strict';

const drawCircle = (canvasElem, type) => {

  if(Math.abs(mousePoint.x - circle.x) > circle.radius/2 ||
     Math.abs(mousePoint.y - circle.y) > circle.radius/2) {

    let res = move(circle.x, circle.y, mousePoint.x, mousePoint.y, 5);
    let coords;

    switch (type) {
      case 'forward': {
        coords = res.forward();
        break;
      }
      case 'back': {
        coords = res.back();
        break;
      }
    }

    circle.x = coords[0];
    circle.y = coords[1];
  }

  draw(canvasElem);
}

const draw = (canvasElem) => {

  canvasElem.clearRect(0, 0, width, height);

  canvasElem.beginPath();
  canvasElem.arc(circle.x, circle.y, circle.radius, circle.startAngle, circle.endAngle, true);
  canvasElem.fill();

  circle.haveVector = input.checked;

  if(circle.haveVector) {
    canvasElem.setLineDash([100, 1000]);
    canvasElem.moveTo(circle.x, circle.y);
    canvasElem.lineTo(mousePoint.x, mousePoint.y);
    canvasElem.stroke();
  }
}


