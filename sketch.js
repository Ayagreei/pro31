const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let plinkos = [];
let plinkos2 = [];
let plinkos3 = [];
let plinkos4 = [];
let seperator = [];
let pa= [];
var seperatorHeight = 400;

function setup() {
  createCanvas(600,620);
  engine = Engine.create();
  world = engine.world;
  wall = new Wall(290,605,560,8);
  for ( var j = 40; j <= width; j=j+40)
 {
    plinkos.push(new Plinko(j,55,5));
    plinkos2.push(new Plinko(j-20,105,5));
    plinkos3.push(new Plinko(j,155,5));
    plinkos4.push(new Plinko(j-20,205,5));
 }

   for(var k =10; k <= width; k = k + 140)
    {
    seperator.push(new Seperators(k,500,8,200));

   }
   for(var u=0;u<=100;u++)
   {
    pa.push(new Partical(200,10,5));
   }
   
  
}


function draw() {
  background(0,0,0);
        Engine.update(engine);
        drawSprites();
        fill("white")
        if(frameCount%60===0)
        {
      // pa[1].display();
        //  pa.push(new Partical(200,10,5));
        pa.push(new Partical(200,10,5));
        console.log(frameCount);

        }
        for(var h=0;h<=100;h++)
        {
          pa[h].display();
        }
      
         for ( var j = 0; j <=14; j++)
  {
    plinkos[j].display();
    plinkos2[j].display();
    plinkos3[j].display();
    plinkos4[j].display();

  }

  for ( var j = 0; j <=4; j++)
  {
    seperator[j].display();

  }

  wall.display();
}