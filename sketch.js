var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

 gameObject1=createSprite(800,200,100,100);
 gameObject1.shapeColor="blue";

 gameObject2=createSprite(600,200,100,100);
 gameObject2.shapeColor="blue";

 gameObject3=createSprite(400,200,100,100);
 gameObject3.shapeColor="blue";

 gameObject4=createSprite(200,200,100,100);
 gameObject4.shapeColor="blue";
  
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,gameObject4)){
    movingRect.shapeColor = "red";
    gameObject4.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject4.shapeColor = "blue";
  }
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
}

else{ 
  return false;
}}