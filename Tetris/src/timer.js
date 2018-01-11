'use strict';

const timer = {
  id: 0,
  get interval() {
    return (800 - (score.getLevel - 1) * 100);
  },
  newInterval() {
    timer.id = setInterval(tetris.moveDown, timer.interval);
  },
  clear() {
    clearInterval(timer.id);
  }
};