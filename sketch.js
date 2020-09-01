
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, paperImg;
var basket1, basket2, basket3, binImg, bin;

function setup() {
	createCanvas(1900, 950);
  

	engine = Engine.create();
  world = engine.world;

  paper = new Paper(200,900,20);

  ground = new Ground(1000, 940, 2000, 20, {isStatic:true});

  basket1 = new Basket(1100,885,20,100);
  basket2 = new Basket(1350, 885, 20, 100);
  basket3 = new Basket(1225, 925, 250, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  Engine.update(engine);
  paper.display();
  ground.display();

  basket1.display();
  basket2.display();
  basket3.display();


  
  drawSprites();
 
}


function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position, {x: 85, y: -85})
  }
}
