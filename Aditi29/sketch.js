const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var chain,ball1;

function setup() {
  createCanvas(3000,1600);
  engine = Engine.create();
  world = engine.world;

  ball1 = Bodies.circle(500,200,20);
  World.add(world,ball1);
  console.log(ball1.body);

  slingshot = new Slingshot (ball1.body,{x:150,y:50});

  ground1 = new Ground(1000+500,1000,500,20);
  ground2 = new Ground(1500+500,600,500,20);

  box1 = new Box ( 820+500+100 , 960 , 70 , 70 );
  fill("blue");
  box2 = new Box ( 902+500+100 , 960 , 70 , 70 );
  fill("blue");
  box3 = new Box ( 987+500+100 , 960 , 70 , 70 );
  fill("blue");
  box4 = new Box ( 1071+500+100 , 960 , 70 , 70 );
  fill("blue");

  box5 = new Box ( 855+500+100 , 900 , 70 , 70 );
  fill("pink");
  box6 = new Box ( 936+500+100 , 900 , 70 , 70 );
  fill("pink");
  box7 = new Box ( 1006+10+500+100 , 900 , 70 , 70 );
  fill("pink");

  box8 = new Box ( 900+500+100 , 840 , 70 , 70);
  fill("cyan");
  box9 = new Box ( 980+500+100 , 840 , 70 , 70 );
  fill("cyan");

  box10 = new Box( 935+500+100 , 770 , 70 , 70 );
  fill("black");

  box11 = new Box( 1365+500 , 560 , 70 , 70 );
  fill("light blue");
  box12 = new Box( 1450+500 , 560 , 70 ,70 );
  fill("light blue"); 
  box13 = new Box( 1450+80+500 , 560 , 70 ,70 );
  fill("light blue");

  box14 = new Box( 1397+500 , 490 , 70 , 70 );
  fill("pink");
  box15 = new Box( 1480+500 , 490 , 70 , 70 ); 
  fill("pink");

  box16 = new Box( 1435+500 , 420 , 70 , 70 );
  fill("cyan");
  
  Engine.run();
} 

function draw() { 
  background(255);  
  
  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();

  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();

  box10.display();

  box11.display();
  box12.display();
  box13.display();

  box14.display();
  box15.display();

  box16.display();

  slingshot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY}); 
}

function mouseReleased(){
  slingshot.fly();
}     