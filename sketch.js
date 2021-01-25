const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1, pig1,bg, score=0;

function  preload( ){  
    bg=loadImage("sprites/bg.png");
    backgroundimg();
}



function setup(){
   var canvas = createCanvas(1200,400);
    canvas.position(100,100)
    //var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
platform=new Ground (3,425,500,500);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);
log6 =new Log(50,50,70,PI/2);// 1pi = 180dgree
// var options={
//     bodyA:bird.body,
//     bodyB:log6.body
// }
// var sling= Constraint.create( options)
// World.add(world,sling);
slingshot=new Sling(bird.body,{x:80,y:50});



}

function draw(){
    imageMode(CENTER);
    image(bg,width/2,height/2,width,height);
    
    Engine.update(engine);
   // console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
   // console.log(box2.body.angle);
   textSize(20);
   text(" score: "+score,width-200,30);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    pig3.score();
    log1.display();
    platform.display();
    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
log6.display();

    bird.display();
    strokeWeight(4)
    slingshot.display();
    
}
function mouseDragged (){

    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased (){
slingshot.fly();


}

function keyPressed(){
slingshot.attach();

}

async function backgroundimg(){
var respones =await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
console.log(respones);
var jasonr=await respones.json();
console.log (jasonr);
var date= await jasonr.datetime;
var hour=date.slice(11,13)
console.log(date);
console.log(hour);
if(hour>=18){
bg=loadImage("sprites/bg2.jpg")

}
else{
bg= loadImage("sprites/bg.png")

}
}

