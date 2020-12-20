const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(windowWidth / 2, windowHeight / 1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
     mouse: canvasmouse
  };
  mConstraint = MouseContraint.create(engine, options);
  World.add(world, mConstraint);

  pendulum1 = new Pendulum(100,200,"blue");
  pendulum2 = new Pendulum(160,200,"purple");
  pendulum3 = new Pendulum(220,200,"pink");
  pendulum4 = new Pendulum(280,200,"green");
  pendulum5 = new Pendulum(340,200,"yellow");

  sling1 = new Sling(pendulum1.body,{x:80, y:100});
  sling2 = new Sling(pendulum2.body,{x:140, y:100});
  sling3 = new Sling(pendulum3.body,{x:200, y:100});
  sling4 = new Sling(pendulum4.body,{x:260, y:100});
  sling5 = new Sling(pendulum5.body,{x:320, y:100});


}

function draw() {
  background(0,0,0); 
  Engine.update(engine);

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}

function mouseDragged() {
  Matter.Body.setPosition(pendulum1.body, {x: mouseX, y: mouseY});
}