'use strict';

const move = (initX, initY, pointX, pointY, step) => {

  const wrap = () => {
    let length = Math.sqrt(
      Math.pow((pointX - initX), 2) + Math.pow((pointY - initY), 2)
    );

    let partialResX;
    let partialResY;

    if(length !== Infinity) {
      partialResX = ((pointX - initX) * step) / length;
      partialResY = ((pointY - initY) * step) / length;
    } else {
      partialResX = partialResY = 0;
    }

    return [partialResX, partialResY];
  }

  const methods = {
    forward() {
      let resX = wrap()[0] + initX;
      let resY = wrap()[1] + initY;

      return [resX, resY];
    },
    back() {
      let resX = Math.abs(wrap()[0] - initX);
      let resY = Math.abs(wrap()[1] - initY);

      return [resX, resY];
    }
  }

  return Object.assign(wrap, methods);
}
