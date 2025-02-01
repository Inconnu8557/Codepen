let angle = 0;

function setup() {
  createCanvas(1600, 1600, WEBGL);
}

function draw() {
  background(255);
  
  ambientLight(0);
  push();

  
  translate(mouseX - width / 2,
      mouseY - width / 2);
      
  rotateX(angle);
  rotateZ(angle * 0.03);
  rotateY(angle * 0.06);
  noStroke();
  normalMaterial();


  box(150, 300, 150);
  push();
  angle += .06
}