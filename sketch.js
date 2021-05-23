
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyImg, stone1, mango1, mango2, mango3, mango4, mango5;
var tree1, slingshot, stone, mango;
function preload()
{
	boyImg=loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	boy =createSprite(150,600,1,1);
	boy.addImage(boyImg);
	boy.scale=0.1;

	stone1 = new Stone(100,550,30,30);

	tree1 = new Tree(700,500,1,1);

	mango1 = new Mango(630,200,30);
	mango2 = new Mango(600,250,30);
	mango3 = new Mango(720,300,20);
	mango4 = new Mango(740,180,25);
	mango5 = new Mango(620,350,20);
	mango6 = new Mango(850,370,25);
	mango7 = new Mango(780,350,30);

	slingshot = new SlingShot(stone1.body,{x:100, y:550});

	
}

function draw() {
  
  background(255);
  Engine.update(engine);
  
  tree1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  //detectollision(stone, mango);

detectollision(stone1,mango1);
detectollision(stone1,mango2);
detectollision(stone1,mango3);
detectollision(stone1,mango4);
detectollision(stone1,mango5);
detectollision(stone1,mango6);
detectollision(stone1,mango7);
drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x:mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function detectollision (Lstone,Lmango) {
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=Lmango.r+Lstone.r)
	{
		Matter.Body.setStatic(Lmango.body,false);
	}
	
}


