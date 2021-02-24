//1. declare physics engine
const Engine = Matter.Engine 
const World = Matter.World 
const Bodies = Matter.Bodies 

//2. local objects for engine and world; 
var engine, world, ground, ball; 



function setup() {
  createCanvas(800,400);

  //3. Joining local object from the original one
  engine = Engine.create();
  world = engine.world; 

  //4.create the component of ground.
  //4.1 create the physics of ground.
  var ground_options ={
    isStatic : true 
  }

  //4.2 create ground 
  ground = Bodies.rectangle (400,400,800,10,ground_options);

  //4.3 add the component in the world.
  World.add(world,ground);

  //ball
  var ball_options = {
    restitution : 1.0
  }

  ball = Bodies.circle(200,200,40,ball_options);


  World.add(world,ball);
  
}

function draw() {
  background("blue");  

  //5. updating the Engine(Main Engine) with engine(local engine). 
  Engine.update(engine); 


  //6.display of component.
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 800,10);


  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,40,40);

  drawSprites();
}