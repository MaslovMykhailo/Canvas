'use strict';

const question = () => {
  win.children[0].innerHTML = 'Game Over!';
  win.children[1].innerHTML = 'Start again';
  win.style.display = 'block';
};

const hiddenWindow = () => {
  win.style.display = 'none';
  tetris.start();
};

win.children[1].addEventListener('click', hiddenWindow);

