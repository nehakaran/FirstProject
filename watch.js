function setup() {
 createCanvas(400, 400);
 angleMode(DEGREES);
}

function draw() {
 background(0);
 
 let hr = hour();
 let min = minute();
 let sec = second();
 
 strokeWeight(8);
 stroke(255);
 noFill();
 ellipse(200, 200, 300, 300);
 
 strokeWeight(4);
 stroke(255, 100, 150);
 let end = map(sec, 0, 60, 0, 360);
 arc(200, 200, 300, 300, 0, 360, end);
 
// fill(255);
 //noStroke();
 //text(hr + ':' + min + ':' + sec, 10, 200);
}