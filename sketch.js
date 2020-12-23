
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let pen1,pen2,pen3,pen4,pen5;
let sling1,sling2,sling3,sling4,sling5;
let roof;

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(250,200,500,30)

	pen1 = new Pendulum(width/2-200,700,"red")
	pen2 = new Pendulum(width/2-100,700,"red")
	pen3 = new Pendulum(width/2,700,"red")
	pen4 = new Pendulum(width/2+100,700,"red")
	pen5 = new Pendulum(width/2+200,700,"red")

	sling1 = new Sling(pen1.body,{x:width/2-200,y:200})
	sling2 = new Sling(pen2.body,{x:width/2-100,y:200})
	sling3 = new Sling(pen3.body,{x:width/2,y:200})
	sling4 = new Sling(pen4.body,{x:width/2+100,y:200})
	sling5 = new Sling(pen5.body,{x:width/2+200,y:200})

	Engine.run(engine);
  
}

function draw() {
	background("black");
	Engine.update(engine)
  
	roof.display();
	pen1.show();
	pen2.show();
	pen3.show();
	pen4.show();
	pen5.show();
	sling1.show();
	sling2.show();
	sling3.show();
	sling4.show();
	sling5.show();
  }



