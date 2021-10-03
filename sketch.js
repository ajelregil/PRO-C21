const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground,left,right,top_wall;
var width = 690;
 
function preload()
{

}
var balls_option={
	IsStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2	
   } 
function setup() {
	createCanvas(1800, 690);
	
	engine = Engine.create();
	world = engine.world;

    ground = new Ground(width/2,670,width,20)
    right = new Ground(600,600,20,120)
    left = new Ground(width/2,600,20,120)
    top_wall = new Ground(200,10,400,20)
	ball = Bodies.circle(300,10,20,balls_option ) 
	World.add(world,ball);
	rectMode(CENTER);
    ellipseMode(RADIUS)

}

function draw() {
   
  background(0); 
  ground.display()
  right.display()
  left.display()
  top_wall.display()
  
  ellipse(ball.position.x,ball.position.y,20);
 

  Engine.update(engine);
}


function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Body.applyForce(ball,{x:0,y:0},{x:5,y:0});
	}
}
