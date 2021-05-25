const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const World= Matter.World;

var snow = [];
var backgroundImg,bg;
var crystal,crystalImg1,crystalImg2,randS;
var snowman,snowmanImg

//adding the image to a variable
bg="snowbg.jpg";

function preload(){
  //loading images
  backgroundImg=loadImage(bg);
  crystalImg1=loadImage("snow2-removebg-preview.png");
  crystalImg2=loadImage("snow4.webp");
  snowmanImg=loadImage("snow3-removebg-preview.png");
}



function setup() {
  createCanvas(1400,800);

  engine= Engine.create();
  world = engine.world;

  //creating snowman
  snowman=createSprite(850,650);
  snowman.addImage(snowmanImg);
  snowman.scale=0.5;

}

function draw() {
  background(backgroundImg); 

  Engine.update(engine);

  //creating snow crystals
  if(frameCount%15===0){
    createCrystals();
  }
  
   //creating snow 
   if(frameCount%20===0){
    snow.push(new Snow(random(30,1370),0,random(2,10),random(2,10)));
   }

   for(var i=0;i<snow.length;i++){
     snow[i].display();
   }

   
  drawSprites();
}

function createCrystals(){
  crystal=createSprite(Math.round(random(30,1370)),0);
  crystal.velocityY=5;
  randS=Math.round(random(0,1));
  if(randS===0){
    crystal.addImage(crystalImg1);
    crystal.scale=0.05
  }else{
    crystal.addImage(crystalImg2);
    crystal.scale=0.1;
  }
  crystal.lifetime=280;
}