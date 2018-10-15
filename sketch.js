function preload() {
  // put preload code here
}

var newBall;
var balls = [];
var colors = [
  '#213747',
  '#5e4660',
  '#925371',
  '#BA6980',
  '#C599A0',
  '#CABBB3',
  '#CDCDC5'
];

function setup() {

  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function mousePressed() {
  var ballNumber = 5;

  for (var i = 0; i < ballNumber; i++) {

    var myBall = new Ball(mouseX, mouseY, 10);
    myBall.d = random(10, 50);
    myBall.speed1 = random(-1, 1);
    myBall.speed2 = random(-1, 1);
    myBall.color = color(random(colors));
    balls.push(myBall);
  }
}

function draw() {

  background('#17202A');
  fill('white');
  text('Click to see magic happen', windowWidth/2-50, height/8*7);
  //inserire new ball per effetto continuo
  for (var j = 0; j < balls.length; j++) {

    balls[j].move();
    balls[j].display();
    balls[j].color = color(random(colors));
  }
}

function Ball(_x, _y, _diameter) {

  this.size = 10;
  this.x = _x;
  this.y = _y;
  this.color = 'red';
  this.speed1 = 1;
  this.speed2 = -2;

  var yDir = 1;
  var xDir = 1;

  this.move = function() {
    //velocità
    this.x += this.speed1 * xDir;
    this.y += this.speed2 * yDir;
    //cambio direzione quando tocca i bordi
    if (this.y > height || this.y < 0) {
      yDir = yDir * -1;
    }
    if (this.x > width || this.x < 0) {
      xDir = xDir * -1
    }
  }
  this.display = function() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }
}
