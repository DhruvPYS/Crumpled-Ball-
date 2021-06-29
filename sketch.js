
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper, left, down, right, ground0, engine, world


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(70,580, 30)

down = new Dustbin(600, 550, 200, 200)
//left = new Dustbin(540,600,30,130)
//right = new Dustbin(665,600,30,130)
ground0 = new Ground(400, 680)


	Engine.run(engine);
  
}


function draw() {
	


  rectMode(CENTER);
  background(400);
  paper.display();
down.display()
//left.display();
//right.display();
ground0.display();
  
  drawSprites();
 
}

function keyPressed()
{
if(keyCode === UP_ARROW)
{
Matter.Body.applyForce(paper.body, paper.body.position, {x:120, y:-185})
}
}



