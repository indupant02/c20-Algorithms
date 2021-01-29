var fixedRec;
var movingRec;


function setup() {
  createCanvas(800,400);
  movingRec=createSprite(600, 200, 50, 50);
  movingRec.shapeColor="green";
  fixedRec=createSprite(400,200,50,50);
  fixedRec.shapeColor="green";

}

function draw() {
  background("yellow");  

  movingRec.x=World.mouseX;
  movingRec.y=World.mouseY;
 
  if(movingRec.x-fixedRec.x < movingRec.width/2+fixedRec.width/2 
    &&  fixedRec.x-movingRec.x < movingRec.width/2+fixedRec.width/2
    && movingRec.y-fixedRec.y < movingRec.height/2+fixedRec.height/2  
    && fixedRec.y-movingRec.y < movingRec.height/2+fixedRec.height/2 ){
      movingRec.shapeColor="blue";
      fixedRec.shapeColor="red";
    }else{
      movingRec.shapeColor="green";
      fixedRec.shapeColor="green";
    }
 
 
 
 
 
 
  drawSprites();
  
}