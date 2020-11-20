var fixedRect, movingRect;
var game1,game2,game3
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  game1  =  createSprite(300,300,50,80)
  game2  =  createSprite(200,100,50,50)
  game2.velocityX  =  8;

  game3  =  createSprite(800,100,50,50)
  game3.velocityX  =  -8;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,game1)){
    movingRect.shapeColor = "red";
    game1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    game1.shapeColor = "green";
  }
   bounceOff(game2,game3);
  drawSprites();
}


