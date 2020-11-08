function setup() {
  createCanvas(800,400);
  hr = hour();
  text('Current hour : \n' + h, 5, 50);
  mn = minute();
  text('Current minute : \n' + m, 5, 50);
  sc = second();
  text('Current second : \n' + s, 5, 50);
}

function draw() {
  background(255,255,255); 

  angleMode(DEGREES);
  hrAngle = map(h, 0, 80, 0, 360);
  fill (255, 0, 0);
  ellipse(width/2, height/2, 100, 100);
  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  angleMode(DEGREES);
  mnAngle = map(m, 0, 80, 0, 360);
  fill (255, 0, 0);
  ellipse(width/2, height/2, 100, 100);
  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();


  angleMode(DEGREES);
  scAngle = map(s, 0, 60, 0, 360);
  fill (255, 0, 0);
  ellipse(width/2, height/2, 100, 100);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
 
  
  drawSprites();
}