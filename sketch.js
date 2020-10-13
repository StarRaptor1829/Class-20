var fixedRectangle, movingRectangle



function setup() {
  createCanvas(800,400);
 fixedRectangle=createSprite(600,400,50,20);
 fixedRectangle.shapeColor= "black";
movingRectangle=createSprite(400,600,20,50);
movingRectangle.shapeColor= "black";
}

function draw() {
  background(255,255,255);  
  movingRectangle.x=World.mouseX
  movingRectangle.y=World.mouseY
  if(movingRectangle.x-fixedRectangle.x<movingRectangle.width/2+fixedRectangle.width/2&&
    fixedRectangle.x-movingRectangle.x<movingRectangle.width/2+fixedRectangle.width/2&&
    movingRectangle.y-fixedRectangle.y<movingRectangle.height/2+fixedRectangle.height/2&&
    fixedRectangle.y-movingRectangle.y<movingRectangle.height/2+fixedRectangle.height/2){
fixedRectangle.shapeColor="green"
movingRectangle.shapeColor="green"
    }
    else{
      fixedRectangle.shapeColor="black"
      movingRectangle.shapeColor="black"
    }
  drawSprites();

}