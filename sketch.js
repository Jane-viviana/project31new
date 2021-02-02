const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground = [];
var plinko = [];
var particle = []; 
var division = [];

function setup() {
  createCanvas(600,800);
 // createSprite(400, 200, 50, 50);

    engine = Engine.create();
    world = engine.world;

  ground = new Ground(350,750,800,15);

  //var render = Matter.Render.create({element:document.body,engine:engine,options:{width:600,height:800}})
 //Matter.Render.run(render);
}

function draw() {
  Engine.update(engine);
  background(0);

  for(var k = 0; k <=width; k = k+100){
    division.push(new Wall(k,600,15,300));
  }
  for(var a = 0; a <= width; a = a+100){
    plinko.push(new Plinko(a,100,15,15));
  }
  for(var a = 0; a <= width; a = a+100){
    plinko.push(new Plinko(a,200,15,15));
  }
  for(var a = 0; a <= width; a = a+100){
    plinko.push(new Plinko(a,300,15,15));
  }
  for(var a = 0; a <= width; a = a+100){
    plinko.push(new Plinko(a,400,15,15));
  }
  for(var b = 0; b <= width; b = b+25){
    particle.push(new Particle(b,0,10,10));
  }

  if(frameCount % 60 === 0){
    var rand = Math.Round(random(20,100));
    particle.push(new Particle(rand,0,10,10));
   }

for(i = 0; i<division.length; i++){
    division[i].display();
  }
  for(i = 0; i<plinko.length; i++){
    plinko[i].display();
  }
  for(i = 0; i<plinko.length; i++){
    plinko[i].display();
  }
  for(i = 0; i<plinko.length; i++){
    plinko[i].display();
  }
  for(i = 0; i<plinko.length; i++){
    plinko[i].display();
  }
  for(i = 0; i<particle.length; i++){
    particle[i].display();
  }
  ground.display();
 
  drawSprites();
}
