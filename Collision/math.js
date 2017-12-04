'use strict';

const move = (initX, initY, mouseX, mouseY, step) => {

  const wrapper = () => {
    let length = Math.sqrt(
      Math.pow((mouseX - initX), 2) + Math.pow((mouseY - initY), 2)
    );

    let partialResX;
    let partialResY;

    if(length !== Infinity) {
      partialResX = ((mouseX - initX) * step) / length;
      partialResY = ((mouseY - initY) * step) / length;
    } else {
      partialResX = partialResY = 0;
    }

    return [partialResX, partialResY];
  }

  const methods = {
    forward() {
      let resX = Math.round(wrapper()[0] + initX);
      let resY = Math.round(wrapper()[1] + initY);

      initX = resX;
      initY = resY;
      return [resX, resY];
    },
    back() {
      let resX = Math.round(Math.abs(wrapper()[0] - initX));
      let resY = Math.round(Math.abs(wrapper()[1] - initY));

      initX = resX;
      initY = resY;
      return [resX, resY];
    }
  }

  return Object.assign(wrapper, methods);
}

const intersectionOfMovingAndStaticRect = (moving ,stat) => {
  const vertex = [[moving.x, moving.y],
                       [moving.x + moving.width, moving.y],
                       [moving.x, moving.y + moving.height],
                       [moving.x + moving.width, moving.y + moving.height]];
  let i;
  for(i = 0 ; i < 4 ; i++) {
    if(vertex[i][0] > stat.x && vertex[i][0] < stat.x + stat.width &&
       vertex[i][1] > stat.y && vertex[i][1] < stat.y + stat.height) return true;
  }
  return false;
}