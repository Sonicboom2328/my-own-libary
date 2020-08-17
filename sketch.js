var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  gobj1=createSprite(100,100,50,50);
  gobj2=createSprite(200,100,50,50);
  gobj1.shapeColor="green";
  gobj2.shapeColor="green";
}

function draw() {
  background(0,0,0);  

  bounceoff(movingRect,fixedRect);

  gobj1.x=World.mouseX;
  gobj1.y=World.mouseY;
  if(isTouching(gobj1,gobj2)){
    gobj1.shapeColor="blue";
    gobj2.shapeColor="blue";
  }
  else{
    gobj1.shapeColor="green";
    gobj2.shapeColor="green";
  }
 
  drawSprites();
}
