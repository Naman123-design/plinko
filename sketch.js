const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup(){
    var canvas = createCanvas(480,820);
    engine = Engine.create();
    world = engine.world;
ground = new Ground(240,810,480,20);
wall = new Ground(0,405,5,810);
wall1 = new Ground(480,405,5,810)
for (var k = 0; k <=480; k = k + 80){
    divisions.push(new Divisions(k, height - divisionHeight/2 , 10, divisionHeight))
    }
    
    for (var j = 40; j <450; j=j+45) {
           plinkos.push(new Plinko(j,75));
        }

        for (var j = 15; j <450; j=j+45) {
           plinkos.push(new Plinko(j,175));
        }

         for (var j = 40; j < 450 ; j=j+45) {
           plinkos.push(new Plinko(j,275));
        }

         for (var j = 15; j < 450; j=j+45) {
           plinkos.push(new Plinko(j,375));
        }
        
}

function draw(){
    background("black");
    Engine.update(engine);
    ground.display();
    wall.display();
    wall1.display();
    for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
}

    if(frameCount%60===0){
        particles.push(new Particle(random(10, 470), 10,10));
  }
 for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

}