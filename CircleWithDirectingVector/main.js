'use strict';

let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = width;
canvas.height = height;

const onloadDraw = () => {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, circle.startAngle, circle.endAngle, true);
  ctx.fill();
}

const renderVector = (e) => {
  mousePoint.x = e.pageX;
  mousePoint.y = e.pageY;

  draw(ctx);
}

const renderCircle = (e) => {
  switch(e.keyCode) {
    case 119 : {
      drawCircle(ctx, 'forward');
      break;
    }
    case 115 : {
      drawCircle(ctx, 'back');
      break;
    }
  }
}

document.body.addEventListener('load', onloadDraw());

canvas.addEventListener('mousemove', renderVector);

document.addEventListener('keypress', renderCircle);
