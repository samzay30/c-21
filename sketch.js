var object1, object2

function setup() {
  createCanvas(800, 800);
  rect1 = createSprite(400, 100, 50, 50);
  rect2 = createSprite(600, 300, 100, 50);
  rect3 = createSprite(400, 600, 100, 50);
  rect1.shapeColor = "green";
  rect2.shapeColor = "blue";
  rect3.shapeColor = "red";
  rect1.debug = true;
  rect2.debug = true;
  rect3.debug = true;
  rect1.velocityY = 5;
  rect3.velocityY = -5;
}

function draw() {
  background(255, 255, 255);
 
//bounceOff(rect1,rect3)

if(isTouching (rect1,rect3))
{
  rect1.shapeColor = "yellow"
  rect3.shapeColor = "green"
}
else
{
  rect1.shapeColor = "green";
  rect3.shapeColor = "red";
}
  drawSprites();
}
