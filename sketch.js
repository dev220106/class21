var fixedRect, movingRect;
var rect1,rect2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
rect1=createSprite(600,150,50,50);
rect2=createSprite(700,200,50,50);
 rect1.shapeColor="green";
 rect2.shapeColor="green";
}

function draw() {
  background(0,0,0);  

movingRect.x=mouseX;
movingRect.y=mouseY


 if( isTouching(movingRect,rect2) ){
movingRect.shapeColor="blue";
rect2.shapeColor="blue";

 }else {

  movingRect.shapeColor="green";
rect2.shapeColor="green";
 }
  
  drawSprites();
}




