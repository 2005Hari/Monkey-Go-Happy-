  var obstacle, obstacleImage, obstacleGroup;
  var banana, bananaImage, bananaGroup;
  var monkey, RunningMonkey;
  var Abackground, BackgroundPic;
  var score= 0;
  var ground;

function preload(){
  BackgroundPic = loadImage("jungle.jpg")
  RunningMonkey = loadAnimation ("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bananaImage =  loadImage("banana.png")
  obstacleImage = loadImage('stone.png')
  
}
function setup() {
createCanvas(500,400)
  
   backgr= createSprite (200,200);
    backgr.addImage ("BackgroundPic", BackgroundPic);
    backgr.x= backgr.width/2 ;
    monkey= createSprite (40, 370, 20, 20);
    monkey.addAnimation ("monkeyrunning", RunningMonkey);
    monkey.scale= 0.1;
  
  
    ground= createSprite (200, 380, 600, 5);
    ground.visible= false;
  
 score= 0
    bananaGroup= new Group ();
    obstacleGroup= new Group ();
}  
      

function draw(){

   backgr.velocityX=-8
  if(backgr.x<0){
    backgr.x =backgr.width/2
  }
  
    if(keyDown("space") && monkey.y >= 260 ){
      monkey.velocityY = -16;
    }    

  monkey.velocityY= monkey.velocityY + 0.8;
  
    monkey.collide (ground);
  
spawnObstacles ()
spawnBananas ()  
  if (obstacleGroup.isTouching(monkey)) {
    obstacleGroup.destroyEach();
    monkey.scale = 0.1;
    score = 0;
  }

  if (bananaGroup.isTouching(monkey)) {
    bananaGroup.destroyEach();
    score = score + 2;
  }

  switch (score) {
    case 10:
      monkey.scale = 0.12;
      break;
    case 20:
      monkey.scale = 0.14;
      break;
    case 30:
      monkey.scale = 0.16;
      break;
    case 40:
      monkey.scale = 0.18;
      break;
    case 50:
      monkey.scale = 0.20;
      break;
    default:
      break;
  }
  drawSprites()
  stroke("white");
  textSize(22);
  fill("white");
  text("Score : " + score, 300, 80)      
}
function spawnBananas () {
  if (frameCount%90 ===0) {
    banana= createSprite (400,385,10,40)
    banana.addImage ("bananaimage", bananaImage);
    banana.y= Math.round(random(80,120))
    banana.scale= 0.06 ;
    banana.velocityX= -8;
    banana.lifetime= 64;
    bananaGroup.add(banana);
    
  }
}


function spawnObstacles () {
  if (frameCount%   300 === 0     ) {
    obstacle= createSprite (500,360,20,20);
    obstacle.addImage ("obstacleimage", obstacleImage);
    obstacle.scale= 0.2
    obstacle.velocityX= -8;
    obstacleGroup.add(obstacle);
  }      
}

    
