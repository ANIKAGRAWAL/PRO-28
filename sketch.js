
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(390,690,900,20);
	tree = new Tree(500,690,300,400)
	stone = new Stone(500,690,30,40)
	boy = new Boy(500,690,180,190)
	m=new Mango(600,400,40,50);
	m2=new Mango(700,400,40,50);
	m3=new Mango(650,350,40,50);
	rope = new Rope(stone.body,{x:150,y:600});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225,255,255);
  ground .display();
  tree.display();
  boy.display();
  m.display();
  m2.display();
  m3.display();
  rope.display();
  stone.display();
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
} 
function mouseReleased (){
    rope.fly();
}


