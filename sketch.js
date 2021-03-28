const Engine=Matter.Engine;
const World =Matter.World;
const Bodies=Matter.Bodies;

var engine,world,body;

function setup()
{
 var canvas = createCanvas(400,400);
 engine = Engine.create();
 world = engine.world;

 var options = {restitution : 2 }
 body = Bodies.rectangle(200,200,50,50,options);
 World.add(world,body);

 var groundoptions = { isStatic : true }
 gbody = Bodies.rectangle(200,390,200,20,groundoptions);
 World.add(world,gbody);

 var coptions = { restitution : 1 }
 cbody = Bodies.circle(100,100,20,coptions);
 World.add(world,cbody);

}

function draw()
{
background("blue");
Engine.update(engine);

rectMode(CENTER);
rect(body.position.x,body.position.y,50,50);

rectMode(CENTER);
rect(gbody.position.x,gbody.position.y,400,20);

ellipse(RADIUS)
ellipse(cbody.position.x,cbody.position.y,20,20);

}
