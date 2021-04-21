
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var papers ;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	papers = new paper(150,650,60,60,PI/2);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  papers.display();
  keyPressed();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
     //  Matter.Body.applyForce(papers.body.position,papers.position,{x:80,y:-80});
	   Matter.Body.applyForce(papers.body,papers.body.position,{x:80,y:-80});
	}}