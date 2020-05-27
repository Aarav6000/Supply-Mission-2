var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody,ground;
var rect_1, rect_2, rect_3, rect_1Body, rect_2Body, rect_3Body;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload() {
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);

	rectMode(CENTER);
	
	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width/2, height-35, width, 10);
	groundSprite.shapeColor = color(240);

	rect_1 = createSprite(300, 610, 20, 100);
	rect_1.shapeColor = rgb(255, 0, 0);

	rect_2 = createSprite(500, 610, 20, 100);
	rect_2.shapeColor = rgb(255, 0, 0);

	rect_3 = createSprite(400, 650, 200, 20);
	rect_3.shapeColor = rgb(255, 0, 0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	//create the red basket
	rect_1Body = Bodies.rectangle(300, 610, 60, 100, {isStatic:true});
	World.add(world, rect_1Body);
	
	rect_2Body = Bodies.rectangle(500, 610, 60, 100, {isStatic:true});
	World.add(world, rect_2Body);

	rect_3Body = Bodies.rectangle(400, 650, 200, 60, {isStatic:true});
	World.add(world, rect_3Body);
	console.log(rect_3Body);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10, {isStatic:true});
 	World.add(world, ground);

	Engine.run(engine);
  
}

function draw() {

  background(0);
  rectMode(CENTER);

  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;

  rect_1.x = rect_1Body.position.x;
  rect_1.y = rect_1Body.position.y;

  rect_2.x = rect_2Body.position.x;
  rect_2.y = rect_2Body.position.y;

  rect_3.x = rect_3Body.position.x;
  rect_3.y = rect_3Body.position.y;
  
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}