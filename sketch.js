
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(700,600,20,120);
	rightSide = new Ground(900,600,20,120);
	var ball_options={
		isStatic:false,
		
		

	}


	
	//Create the Bodies Here.
	ball= Bodies.circle(200,30,25,ball_options)
	World.add(world,ball)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
leftSide.show();
rightSide.show();
groundObj.show();
ellipse(ball.position.x, ball.position.y, 25)
}

function keyPressed(){
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.1, y:-0.02})
    }
}



