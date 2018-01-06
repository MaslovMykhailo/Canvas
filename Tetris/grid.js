'use strict';

const grid = {
  lines: [],
  dots: [],
  draw(ctx, size, color) {
    this.lines.forEach(l => {
      l.draw(ctx, size, color);
    });
    this.dots.forEach(d => {
      d.draw(ctx, size, color);
    });
  }
};

for(let i = 0 ; i <= 500 ; i += 25) {
  grid.lines.push(new Segment(i, 0, i, 500));
  grid.lines.push(new Segment(0, i, 500, i));
}

for(let i = 0 ; i <= 500 ; i += 25) {
  for(let j = 0 ; j <= 500 ; j += 25) {
    grid.dots.push(new Point(i, j));
  }
}
