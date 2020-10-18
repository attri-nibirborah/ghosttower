var gameState= "play"

var spookysound;
var tower , towerImage;
var door,doorImage,doorGroup;
var climber,climberImage,climberGroup;
var ghost,ghost1,ghost2;
var invisibleblock,invisibleblockGroup;

function preload (){
  towerImage = loadImage("tower.png");
  doorImage = loadImage ("door.png");
  climberImage=loadImage("climber.png"); 
  ghost1 = loadImage ("ghost-standing.png")
  
  spookysound= loadSound("spooky.wav")
  
  doorGroup= new Group();
  climberGroup= new Group();
  invisibleblockGroup = new Group(); 

}

function setup (){

  createCanvas(600,600);
  
  spookysound.loop();
  
  tower=createSprite(250,300);
  tower.addImage("tower",towerImage);
  tower.velocityY= 2
  
  ghost= createSprite(200,200,50,50);
  ghost.addImage("ghost",ghost1);
  ghost.scale=0.5


}

function draw (){
  
  background("white");
  
   if(tower.y>400){
    tower.y=300
    
  }
  if(gameState==="play"){
   if (keyDown("left_arrow")) {
     ghost.x=ghost.x-3
   }
  if(keyDown("right_arrow")){
    ghost.x=ghost.x +3
  }
  if(keyDown("space")){
    ghost.velocityY=-5;
  }
  ghost.velocityY=ghost.velocityY+0.8
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0
  }
  
    if(invisibleblockGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
   gameState="end"
  }
  
  
  
  
  
  spawndoors();
  
  drawSprites();
}

  if(gameState==="end"){
    
    stroke("yellow");
    textSize(30)
    fill("yellow")
    
    text("game over",230,250)
  }

}

  function spawndoors(){
  if(frameCount%240===0){
   door= createSprite(200,50,10,10); 
   door.addImage("door",doorImage); 
   door.x=Math.round(random(120,400)) 
   door.velocityY=2;
   door.lifetime=800 
   doorGroup.add(door);
  
  climber=createSprite(200,100,10,10);
  climber.addImage("climber",climberImage);
  climber.x=door.x
  climber.velocityY=2;
  climber.lifetime=800  
  climberGroup.add(climber);
  
   ghost.depth=door.depth 
   ghost.depth=ghost.depth+1 
  
  invisibleblock=createSprite(200,110,10,10)
  invisibleblock.x=door.x
  invisibleblock.velocityY=2
  invisibleblockGroup.add(invisibleblock)  
    
    
    
  
  }
  }


