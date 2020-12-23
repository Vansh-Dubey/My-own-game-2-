var ground ; 
var player, playerAnimation;
var BG; 
var BGsprite;
var enemyImage,enemyGroup 

function preload (){
 
 playerAnimation=loadAnimation("Images/Player_run/1.png","Images/Player_run/2.png","Images/Player_run/3.png","Images/Player_run/4.png",
 "Images/Player_run/5.png","Images/Player_run/6.png",) 
  
 BG= loadImage("Images/BG.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  BGsprite=createSprite(width/2,height/2,width,height)
  BGsprite.addImage(BG)
  BGsprite.scale=0.8;
  BGsprite.velocityX=-3
  BGsprite.x=BGsprite.width/2
  ground = createSprite(750, height, 1500, 50);
  ground.shapeColor="Brown";
  player=createSprite(50,height-100,50,50)
  player.addAnimation("Running",playerAnimation);
  player.scale=0.1;
  player.velocityX= 5
 enemyGroup=new Group()

  

}


function spawnEnemies(){
  if(frameCount%70===0){
    var enemy= createSprite(camera.position.x+width/2,height-100,10,10);
    enemy.velocityX=-4
    enemy.lifetime=200
    enemyGroup.add(enemy);
  }
}

function draw() {
  background(0);
  camera.position.x=player.x
  ground.x=camera.position.x
  //BGsprite.x=camera.position.x


if(BGsprite.x<camera.position.x-width/2){
  BGsprite.x=camera.position.x
}
  spawnEnemies();

  
if(keyDown("space")){
  player.velocityY=-12
}

player.velocityY = player.velocityY + 0.8
player.collide(ground);
  drawSprites();
}
