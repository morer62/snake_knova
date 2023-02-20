var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
  container: 'canvas',
  width: width,
  height: height
});

var layer = new Konva.Layer();
stage.add(layer);

var blockSize = 20;
var blockCount = width / blockSize;
var snake = [{x: blockCount / 2, y: blockCount / 2}];
var direction = 'right';

function createBlock(x, y) {
  var rect = new Konva.Rect({
    x: x * blockSize,
    y: y * blockSize,
    width: blockSize,
    height: blockSize,
    fill: 'green'
  });
  layer.add(rect);
}

function draw() {
  layer.destroyChildren();
  for (var i = 0; i < snake.length; i++) {
    createBlock(snake[i].x, snake[i].y);
  }
  layer.draw();
}

function move() {
  var head = {x: snake[0].x, y: snake[0].y};
  switch (direction) {
    case 'right':
      head.x++;
      break;
    case 'left':
      head.x--;
      break;
    case 'up':
      head.y--;
      break;
    case 'down':
      head.y++;
      break;
  }
  snake.unshift(head);
  snake.pop();
}

function update() {
  move();
  draw();
}

setInterval(update, 100);
