
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let ball;
let ground;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;
  
  //PROPIEDADES Json PARA ball
  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01
  };

  var ground_options = {
    isStatic: true
  };

  var ops = {
    isStatic: true
  };


  //"CUERPOS" ball Y AGREGARLOS A World
  ball = Bodies.circle(100, 10, 20, ball_options);
  World.add(world, ball);

  ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
  World.add(world, ground);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);

  ellipse(rock.position.x,rock.position.y,20);
  rect(wall.position.x,wall.position.y,200,20);
 
}
