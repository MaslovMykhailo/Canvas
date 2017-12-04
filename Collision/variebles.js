'use strict';

let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

canvas.width = width;
canvas.height = height;