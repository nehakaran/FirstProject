function setup() {
 createCanvas(400, 400);
 angleMode(DEGREES);
}

function draw() {
 background(0);
 translate(200, 200);
 rotate(-90);
 
 let hr = hour();
 let min = minute();
 let sec = second();
 
 strokeWeight(8);
 stroke(255);
 noFill();
 ellipse(200, 200, 300, 300);
 
 strokeWeight(4);
 stroke(255, 100, 150);
<<<<<<< HEAD
 let secAngle = map(sec, 0, 60, 0, 360);
 arc(0, 0, 300, 300, 0, 360, secAngle);
 
  stroke(150, 100, 255);
 let minAngle = map(min, 0, 60, 0, 360);
 arc(0, 0, 280, 280, 0, 360, minAngle);
 
  stroke(100, 255, 150);
 let hrAngle = map(hr, 0, 12, 0, 360);
 arc(0, 0, 300, 300, 0, 360, hrAngle);
 
 
 push();
 rotate(secAngle);
 line(0, 0, 100, 0);
 pop();
 
 
 push();
 rotate(minAngle);
 line(0, 0, 75, 0);
 pop();
 
 
 push();
 rotate(hrAngle);
 line(0, 0, 50, 0);
 pop();
 
=======
 let end = map(sec, 0, 60, 0, 360);
 arc(200, 200, 300, 300, 0, 360, end);
>>>>>>> 551f582d04dd51e37c569870d64c64b6404962b8
 
// fill(255);
 //noStroke();
 //text(hr + ':' + min + ':' + sec, 10, 200);
}