var canvas;
var music;
var one, two, three, four;
var ball;
var val1, val2, val3, val4;
var edges;

function preload() {
  music = loadSound("music.mp3");
}


function setup() {
  canvas = createCanvas(800, 600);

  //create 4 different surfaces
  one = createSprite(100, 550, 150, 20);
  one.shapeColor = "red";
  two = createSprite(300, 550, 150, 20);
  two.shapeColor = "blue";
  three = createSprite(500, 550, 150, 20);
  three.shapeColor = "green";
  four = createSprite(700, 550, 150, 20);
  four.shapeColor = "yellow";

  //create box sprite and give velocity
  ball = createSprite(random(20, 750), 300, 20, 20);
  ball.shapeColor = "purple";
  ball.velocityY = 5;
  ball.velocityX = -5;




}

function draw() {
  background(rgb(169, 169, 169));
  //create edgeSprite
  edges = createEdgeSprites();
  /*edge1=createSprite(799,300,1,600);
    edge2=createSprite(400,1,800,1);
    edge3=createSprite(1,300,1,600);
    edge4=createSprite(400,799,800,1);
   /*if(ball.x=World.mouseX,
    ball.y=World.mouseY){
music.play();
    }
    ball.bounceOff(edge1);
    ball.bounceOff(edge2);
    ball.bounceOff(edge3);*/
  ball.bounceOff(edges);
  if (ball.x < 560) {
    ball.x - 10;
  }

  if (one.isTouching(ball) && ball.bounceOff(one)) {
    one.shapeColor = "red";
    ball.velocityY = 5;
    ball.velocityX = 5;
    ball.shapeColor = "red";
    music.play();
  } else if (two.isTouching(ball) && ball.bounceOff(two)) {
    two.shapeColor = "blue";
    ball.velocityY = 0;
    ball.velocityX = 0;
    ball.shapeColor = "blue";
    music.stop();
  } else if (three.isTouching(ball) && ball.bounceOff(three)) {
    three.shapeColor = "green";
    ball.velocityY = 5;
    ball.velocityX = -5;
    ball.shapeColor = "green";
    music.stop();
  } else if (four.isTouching(ball) && ball.bounceOff(four)) {
    four.shapeColor = "yellow";
    ball.velocityY = -5;
    ball.velocityX = 5;
    ball.shapeColor = "yellow";
    music.stop();
  }


  drawSprites();
}