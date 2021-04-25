var ballx = 300;
var bally = 300;
var ballSize = 300;
var strokeSize = 1;
var score = 0;
var gameState = "L1";
var values = 255;
function setup() {
createCanvas(600,600);
textAlign(CENTER);
textSize(20);

} //end setup


function draw() {
background(10);
  if (gameState == "L1")
{
  levelOne();
  
}
  if (gameState == "L2")
  {
    levelTwo();
  }
    if (gameState == "L3")
  {
    levelThree();
  }
  fill(255,255,255);
  noStroke();
  text(("Score: " + score), width/2, 40);
}

function levelOne(){

  fill(255,255,255);
  text("level 1", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX,mouseY);
  line(ballx, bally, mouseX,mouseY);
  
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    
    //ballx = random(width);
    //bally = random(height);
    values = values - 12;
    ballSize = ballSize - 10;
    score = score + 1;
  }
    if (score >= 5) {
      gameState = "L2";
  }
  let c = color(255, 204, 0, values);
  fill(c);
  stroke(c);
  line(ballx, bally, mouseX,mouseY);
  line(ballx, bally, mouseX + 40,mouseY+40);
  line(ballx, bally, mouseX + 80,mouseY+80);
  line(ballx, bally, mouseX + 120,mouseY+120);
  line(ballx, bally, mouseX + 160,mouseY+160);
  line(ballx, bally, mouseX + 200,mouseY+200);
  line(ballx, bally, mouseX + 240,mouseY+240);
  line(ballx, bally, mouseX + 280,mouseY+280);
  line(ballx, bally, mouseX + 320,mouseY+320);
  line(ballx, bally, mouseX + 360,mouseY+360);
  line(ballx, bally, mouseX + 400,mouseY+400);
  line(ballx, bally, mouseX + 440,mouseY+440);
  line(ballx, bally, mouseX + 480,mouseY+480);
  line(ballx, bally, mouseX + 520,mouseY+520);
  line(ballx, bally, mouseX + 560,mouseY+560);
  line(ballx, bally, mouseX + 600,mouseY+600);
  line(ballx, bally, mouseX + 640,mouseY+640);
  line(ballx, bally, mouseX + 680,mouseY+680);
  line(ballx, bally, mouseX + 720,mouseY+720);
  

  ellipse(ballx, bally, ballSize, ballSize);
  if (score <= 2)
   {
    fill(255,255,255);
    noStroke();

     text("Follow the Disappearing Sun", width/2, height/2);
   }
  
} // end level one

function levelTwo(){
  strokeWeight(1);
  text("level 2", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX,mouseY);
  
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    values = values - 12;
     ballSize = ballSize - 10;
     strokeSize = strokeSize + 1;
    score += 1;
  }
  
  if (score == 7)
  {
    fill(255,255,255);
    noStroke();
    text("Ahh so its getting harder", width/2, height/2);
  }
    if (score >= 10) {
       gameState = "L3";
  }
  
  let c = color(255, 204, 0,values);
  fill(c);
  stroke(c);
  strokeWeight(strokeSize);
  line(ballx, bally, mouseX,mouseY);
  line(ballx, bally, mouseX + 40,mouseY+40);
  line(ballx, bally, mouseX + 80,mouseY+80);
  line(ballx, bally, mouseX + 120,mouseY+120);
  line(ballx, bally, mouseX + 160,mouseY+160);
  line(ballx, bally, mouseX + 200,mouseY+200);
  line(ballx, bally, mouseX + 240,mouseY+240);
  line(ballx, bally, mouseX + 280,mouseY+280);
  line(ballx, bally, mouseX + 320,mouseY+320);
  line(ballx, bally, mouseX + 360,mouseY+360);
  line(ballx, bally, mouseX + 400,mouseY+400);
  line(ballx, bally, mouseX + 440,mouseY+440);
  line(ballx, bally, mouseX + 480,mouseY+480);
  line(ballx, bally, mouseX + 520,mouseY+520);
  line(ballx, bally, mouseX + 560,mouseY+560);
  line(ballx, bally, mouseX + 600,mouseY+600);
  line(ballx, bally, mouseX + 640,mouseY+640);
  line(ballx, bally, mouseX + 680,mouseY+680);
  line(ballx, bally, mouseX + 720,mouseY+720);
  

  ellipse(ballx, bally, ballSize, ballSize);
  
  //ellipse(ballx, bally, ballSize, ballSize);

}

function levelThree(){
  noStroke();
  text("level 3", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX,mouseY);
  
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    values = values - 12;
    score = score + 1;
    stokeSize = 10 + strokeSize;
    ballSize = ballSize - 30;
  }
    
  let c = color(255, 204, 0, values);
  strokeWeight(strokeSize);
  stroke(c);
  line(ballx, bally, mouseX,mouseY);
  line(ballx, bally, mouseX + 40,mouseY+40);
  line(ballx, bally, mouseX + 80,mouseY+80);
  line(ballx, bally, mouseX + 120,mouseY+120);
  line(ballx, bally, mouseX + 160,mouseY+160);
  line(ballx, bally, mouseX + 200,mouseY+200);
  line(ballx, bally, mouseX + 240,mouseY+240);
  line(ballx, bally, mouseX + 280,mouseY+280);
  line(ballx, bally, mouseX + 320,mouseY+320);
  line(ballx, bally, mouseX + 360,mouseY+360);
  line(ballx, bally, mouseX + 400,mouseY+400);
  line(ballx, bally, mouseX + 440,mouseY+440);
  line(ballx, bally, mouseX + 480,mouseY+480);
  line(ballx, bally, mouseX + 520,mouseY+520);
  line(ballx, bally, mouseX + 560,mouseY+560);
  line(ballx, bally, mouseX + 600,mouseY+600);
  line(ballx, bally, mouseX + 640,mouseY+640);
  line(ballx, bally, mouseX + 680,mouseY+680);
  line(ballx, bally, mouseX + 720,mouseY+720);
  fill(c);
  ellipse(ballx, bally, ballSize, ballSize);
  if (score == 12)
   {
    fill(255,255,255);
    noStroke();

     text("It is getting further....", width/2, height/2);
   }
  if (score == 16)
  {
    fill(255,255,255);
  noStroke();
    text("Can you follow it forever?", width/2, height/2);
  }
   if (score == 17)
  {
    fill(255,255,255);
    noStroke();

    text("It's always within your grasp yet it is untouchable,", width/2, height/2 -25);
    text("the Disappearing Sun", width/2, height/2);

  }
  
}
