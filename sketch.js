const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

//Define Bobs
var Bob1, Bob2, Bob3, Bob4, Bob5;

//Define Bob Diameter
var bobDiameter = 70;

//Define Top
var top1;

//Define Ropes
var rope1, rope2, rope3, rope4, rope5;

var world;

function setup() {
	createCanvas(800, 700);

    rectMode(CENTER);
  
	engine = Engine.create();
	world = engine.world;
    
  //Create Top
    top1 = new Top(380,100,500,40);
  
    //Create Bobs
    Bob1 = new Bob(240,500,bobDiameter);
    Bob2 = new Bob(310,500,bobDiameter);
    Bob3 = new Bob(380,500,bobDiameter);
    Bob4 = new Bob(450,500,bobDiameter);
    Bob5 = new Bob(520,500,bobDiameter);

    //Create Ropes
    rope1 = new Rope(Bob1.body, top1.body, -bobDiameter*2, 0);
    rope2 = new Rope(Bob2.body, top1.body, -bobDiameter, 0);
    rope3 = new Rope(Bob3.body, top1.body, 0, 0);
    rope4 = new Rope(Bob4.body, top1.body, bobDiameter, 0);
    rope5 = new Rope(Bob5.body, top1.body, bobDiameter*2, 0);
  
    Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  //Display Bobs
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  
  //Display Top
  top1.display();
  
  //DIsplay Ropes
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  //Call Function keyPressed
  keyPressed();

  drawSprites();
}

//Write function to apply force
function keyPressed() {
  if (keyDown("UP")) {
    console.warn("hi")
    Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-50,y:-45});
  }
}
