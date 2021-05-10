var ninja, nIdle, nRunF;
var bg, bgImage; 
var edges;

var start, startpic;

var lvl1 , lvl2, lvl3;

var img1, img2, img3;

var ladder, ladder2, limg;

var hello = 4;

var dagger, daggerimg;

var end , endimg;

var score = 1, check;

var diff;
var yes = 1;
var yes2 = 0;

var music, sword, watah;

//Game States
var PLAY=1;
var START = 2;
var END=0;
var gameState=2;

function preload(){
  bgImage = loadImage("images/bg.jpg");

  ladderpic = loadImage("images/ladder.png");

  nIdle = loadAnimation("images/ninja/Idle__000.png", "images/ninja/Idle__001.png", "images/ninja/Idle__002.png" , "images/ninja/Idle__003.png", "images/ninja/Idle__004.png", "images/ninja/Idle__005.png", "images/ninja/Idle__006.png" , "images/ninja/Idle__007.png" ,"images/ninja/Idle__008.png", "images/ninja/Idle__009.png");

  nRunF = loadAnimation("images/ninja/Run__000.png", "images/ninja/Run__001.png", "images/ninja/Run__002.png", "images/ninja/Run__003.png", "images/ninja/Run__004.png", "images/ninja/Run__005.png", "images/ninja/Run__006.png", "images/ninja/Run__007.png", "images/ninja/Run__008.png", "images/ninja/Run__009.png");
 
  nRunB = loadAnimation("images/ninja/Run__000b.png", "images/ninja/Run__001b.png", "images/ninja/Run__002b.png", "images/ninja/Run__003b.png", "images/ninja/Run__004b.png", "images/ninja/Run__005b.png", "images/ninja/Run__006b.png", "images/ninja/Run__007b.png", "images/ninja/Run__008b.png", "images/ninja/Run__009b.png");
 
  nClimb = loadAnimation("images/ninja/Climb_000.png", "images/ninja/Climb_001.png", "images/ninja/Climb_002.png", "images/ninja/Climb_003.png", "images/ninja/Climb_004.png", "images/ninja/Climb_005.png", "images/ninja/Climb_006.png", "images/ninja/Climb_007.png", "images/ninja/Climb_008.png", "images/ninja/Climb_009.png");

  img1 = loadImage("images/floor.png");
  
  img2 = loadImage("images/floor.png");

  limg = loadImage("images/ladder.png");
  
  img3 = loadImage("images/floor.png");

  startpic = loadImage("images/start.png");

  daggerimg = loadImage("images/ninja/Kunai.png");

  endimg = loadImage("images/end.png");

  music = loadSound("ninj.mp3");

  sword = loadSound("sword.mp3");

  watah = loadSound("up.mp3");

}

function setup(){

  createCanvas(1000,700);

  createEdgeSprites;

    //create bg
  bg = createSprite(500, 350, 10,10);
  bg.addImage("bg", bgImage);
  bg.scale = 1.3;









  //create levels n stuff ululullullulullululu

  lvl1 = createSprite(400 , 550, 1000 , 10);
  lvl1.addImage("lvl1", img1);
  lvl1.scale = 1.48;

  lvl2 = createSprite(600 , 350, 1000 , 10);
  lvl2.addImage("lvl2", img2);
  lvl2.scale = 1.48;


  lvl3 = createSprite(400 , 150, 1000 , 10);
  lvl3.addImage("lvl3", img3);
  lvl3.scale = 1.48;


  lvl2.setCollider("rectangle" , 0 ,2);
  lvl1.setCollider("rectangle" , 0 ,2);
  lvl3.setCollider("rectangle" , 0 ,2);


  ladder = createSprite(950 , 600 , 10 ,100);
  ladder.addImage("ladder", limg);
  ladder.scale = 0.7;

  ladder2 = createSprite(70 , 420 , 10 ,100);
  ladder2.addImage("ladder", limg);
  ladder2.scale = 0.7;

  ladder3 = createSprite(945 , 225 , 10 ,100);
  ladder3.addImage("ladder", limg);
  ladder3.scale = 0.7;

  ladder.setCollider("rectangle", 0, 50 , 100 , 300);

  ladder2.setCollider("rectangle", -20, 50 , 120 , 300);

  ladder3.setCollider("rectangle" ,  0, 20, 100 , 300);




 
 //create ninja




start= createSprite(500 , 350 , 1 , 1);
start.addImage("start", startpic);
start.visible = false;

end = createSprite(500 ,350 ,1, 1);
end.addImage(endimg);
end.visible = false;

daggerG = new Group();

check = createSprite(50, 50 , 50 ,50);

check.visible = false;




}

function draw() {

  background("#DAECD2");









  if(gameState === START){

    start.visible = true;
    end.visible = false;
  

//start Game
if(keyDown("p")){
  if(hello === 4){
  ninja = createSprite(40, 650, 1 ,1);
  ninja.addAnimation("ninja", nIdle);
  ninja.scale = 0.2;
  hello = 0
  start.visible = false;
  music.play();

  gameState = PLAY;

  }
}
  }

  if(gameState === PLAY){



    edges= createEdgeSprites();
    ninja.collide(edges);


//movement commands start ululullululullululullulullulululullululululullululullu
if(keyDown("right_arrow")
||(keyWentDown("d"))){

  if(hello === 0){
  ninja.velocityX = 5;

  ninja.addAnimation("ninja", nRunF);
  ninja.scale = 0.2;
  hello = 1;

  }

}



if(keyDown("left_arrow")
||(keyWentDown("a"))){  

  if(hello === 1){

  ninja.velocityX = - 5; 
  
  ninja.addAnimation("ninja", nRunB);
  ninja.scale = 0.2;
  hello = 0; 
  }
}


//boost
if(score > 1){

  if(keyDown("left_arrow")){
    if(keyDown("space")){
 
     ninja.x = ninja.x - 10;
    }
  }
}

if(score > 1){

  if(keyDown("right_arrow")){
    if(keyDown("space")){
 
     ninja.x = ninja.x + 10;
    }
  }
}





//gravity

if(keyDown("up_arrow")
||(keyDown("w"))){

  ninja.velocityY = -12; 

}

ninja.velocityY = ninja.velocityY + 0.8;
//movement commands end ulullululululullululullululullululululullululullulul









if(ninja.isTouching(ladder)
|| (ninja.isTouching(ladder2))
|| (ninja.isTouching(ladder3))){

  ninja.velocityY = ninja.velocityY - 0.8;
  
  if(keyDown("up_arrow")
  ||keyDown("w")){
    
    ninja.addAnimation("ninja", nClimb);
    //ninja.y = ninja.y - 10;


  }
}







//ladder3.debug = true;

//collide n stuffs
ninja.collide(lvl1);
ninja.collide(lvl2);
ninja.collide(lvl3);


dag();


if(ninja.isTouching(check)){

  score = score + 1;

  ninja.x = 40;
  ninja.y = 650;  

  yes = yes + 1;

  watah.play();

}

if(yes === 2){
   dag(); 
}
if(yes === 3){
  dag(); 
  dag();
}
if(yes === 4){
  dag(); 
  dag();
  dag();
}
if(yes === 5){
  dag(); 
  dag();
  dag();
  dag();
}
if(yes === 6){
  dag(); 
  dag();
  dag();
  dag();
  dag();
}
if(yes === 7){
  dag();
  dag();
  dag();
  dag();
  dag();
  dag();
}
if(yes === 8){
  dag();
  dag();
  dag();
  dag();
  dag();
  dag();
  dag(); 
}
if(yes === 9){
  dag(); 
  dag();
  dag();
  dag();
  dag();
  dag();
  dag();
  dag();
}
if(yes === 10){
  dag(); 
  dag();
  dag();
  dag();
  dag();
  dag();
  dag();
  dag();
  dag();
}



if(daggerG.isTouching(ninja)){

  sword.play();
  gameState = END;
  

}

}

if(gameState === END){

  end.visible = true;

  hello = 4;

  ninja.destroy();

  score = 1;

  yes = 1;

  music.stop();




  if(keyDown("r")){
    gameState = START;
    //start.visible = true;
  }


}





drawSprites();

textSize(20);
fill(255);
text("Level: "+ score, 50 , 50);
  
}










function dag(){

  if(World.frameCount % 44 == 0){

  dagger = createSprite(Math.round(random(10 , 990)), -10, 100 , 100)
  dagger.addImage(daggerimg);
  dagger.scale = 0.6;

  dagger.velocityY = 14;

  dagger.lifetime = 800;


  daggerG.add(dagger);





  }


}




