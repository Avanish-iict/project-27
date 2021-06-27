const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var roofOptions = {
		isStatic: true
	}
	roof = Bodies.rectangle(400,100,260,20,roofOptions);
	World.add(world,roof);

	Engine.run(engine);


     var boboptions = {
		 restitution: 1,
		 friction : 0.3,
		 desitity : 1
	 }
	 bob1 = Bodies.circle(320,380,20,boboptions);
	 World.add(world,bob1)

	 bob2 = Bodies.circle(360,380,20,boboptions);
	 World.add(world,bob2)

	 bob3 = Bodies.circle(400,380,20,boboptions);
	 World.add(world,bob3)

	 bob4 = Bodies.circle(440,380,20,boboptions);
	 World.add(world,bob4)

	 bob5 = Bodies.circle(480,380,20,boboptions);
	 World.add(world,bob5)

	 rope1 = new Rope(bob1,roof,-80,0);
	 rope2 = new Rope(bob2,roof,-40,0);
	 rope3 = new Rope(bob3,roof,0,0);
	 rope4 = new Rope(bob4,roof,40,0);
	 rope5 = new Rope(bob5,roof,80,0);

  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
rect(roof.position.x,roof.position.y,250,20);

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

 
fill("purple");
ellipseMode(RADIUS);
ellipse(bob1.position.x,bob1.position.y,20,20);
ellipse(bob2.position.x,bob2.position.y,20,20);
ellipse(bob3.position.x,bob3.position.y,20,20);
ellipse(bob4.position.x,bob4.position.y,20,20);
ellipse(bob5.position.x,bob5.position.y,20,20);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1, bob1.position,{x:-40 , y:-46});
	}
}