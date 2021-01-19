const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground = [];
var plinko = [];
var particle = []; 
var division = [];


/*var wall1,wall2,wall3,wall4;
var division1,division2,division3,division4,division5;

var plinko1,plinko2,plinko3,plinko4,plinko5;
var plinko6,plinko7,plinko8,plinko9,plinko10;
var plinko11,plinko12,plinko13,plinko14,plinko15;
var plinko16,plinko17,plinko18;

var par1,par2,par3,par4,par5;
var par6,par7,par8,par9,par10;
var par11,par12,pa13,par14;*/

function setup() {
  createCanvas(600,800);
 // createSprite(400, 200, 50, 50);

    engine = Engine.create();
    world = engine.world;

  ground = new Ground(350,750,800,15);

/*  wall1 = new Wall(350,5,800,15);
  wall2 = new Wall(595,5,15,1600);
  wall3 = new Wall(5,5,15,1600);
  wall4 = new Wall(350,795,800,15);

  division1 = new Ground(500,600,15,300);
  division2 = new Ground(400,600,15,300);
  division3 = new Ground(300,600,15,300);
  division4 = new Ground(200,600,15,300);
  division5 = new Ground(100,600,15,300);

  plinko1 = new Plinko(500,100,15,15);
  plinko2 = new Plinko(400,100,15,15);
  plinko3 = new Plinko(300,100,15,15);
  plinko4 = new Plinko(200,100,15,15);
  plinko5 = new Plinko(100,100,15,15);

  plinko6 = new Plinko(450,200,15,15);
  plinko7 = new Plinko(350,200,15,15);
  plinko8 = new Plinko(250,200,15,15);
  plinko9 = new Plinko(150,200,15,15);

  plinko10 = new Plinko(500,300,15,15);
  plinko11 = new Plinko(400,300,15,15);
  plinko12 = new Plinko(300,300,15,15);
  plinko13 = new Plinko(200,300,15,15);
  plinko14 = new Plinko(100,300,15,15);

  plinko15 = new Plinko(450,400,15,15);
  plinko16 = new Plinko(350,400,15,15);
  plinko17 = new Plinko(250,400,15,15);
  plinko18 = new Plinko(150,400,15,15);

  par1 = new Particle(150,50,10,10);
  par2 = new Particle(250,50,10,10);
  par3 = new Particle(350,50,10,10);
  par4 = new Particle(450,50,10,10);
  par5 = new Particle(550,50,10,10);

  par6 = new Particle(500,50,10,10);  
  par7 = new Particle(100,50,10,10);
  par8 = new Particle(400,50,10,10);
  par9 = new Particle(300,50,10,10);
  par10 = new Particle(200,50,10,10);

  par11 = new Particle(150,50,10,10);
  par12 = new Particle(250,50,10,10);
  par13 = new Particle(350,50,10,10);
  par14 = new Particle(550,50,10,10);*/

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
  
 
 //var render = Matter.Render.create({element:document.body,engine:engine,options:{width:600,height:800}})
 //Matter.Render.run(render);
}

function draw() {
  Engine.update(engine);
  background(0);
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
 /* wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  par1.display();
  par2.display();
  par3.display();
  par4.display();
  par5.display();
  par6.display();
  par7.display();
  par8.display();
  par9.display();
  par10.display();
  par11.display();
  par12.display();
  par13.display();
  par14.display();*/
  
  drawSprites();
}
