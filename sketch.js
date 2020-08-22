
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall,ground,dustbin;

function preload()
{
	
}

function setup() {
	//createCanvas(800, 700);
  createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    //paperBall = new Ball (50,580,20);
    paperBall = new Ball(200,450,40);
    //ground = new Ground (350,790,700,20);
    ground = new Ground(width/2,670,width,20)
    dustbin=new Dustbin(1200,650);
    //dustbin = new Dustbin;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin.display();
  paperBall.display();
  //drawSprites();
 
}



