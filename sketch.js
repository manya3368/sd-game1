var gameState=0;
var fampic
var family
var trainimg
var link
var train;
function preload(){
 family=loadImage("family.png");
 trainimg=loadImage("Train-Station.jpg");
}
function setup() {
  createCanvas(1400,700);
 fampic= createSprite(300,500);
 fampic.addImage("fam",family);
  
}

function draw() {
  if(gameState===0){
  background("pink");
  textSize(40);
  fill("black");
  textStyle("bold");
 //textFont('Helvetica');
  text("Goal - Save the pet!",520,65);
  textSize(20);
  fill("green");
  textStyle("georgia");
  text("This little girl named Venziya lost her pet dog named Tommy. She wants you to save her pet.",270,400);
  textStyle("italic");
  fill("red");
  link=text("Use the clues to find her pet.",550,430);
  if (link.mousePressedOver()){
    gameState=1;   
  } 
}

if(gameState===1){
  background(trainimg);
}
  drawSprites();
}