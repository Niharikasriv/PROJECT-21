 
var wall, thickness;
var bullet, speed, height;

function setup() {

  speed=random(55,90);
  height=random(1600,400);
  thickness=random(22,83);

  createCanvas(1600,400);

  bullet = createSprite(55,200,30,10);
 bullet.shapecolor=color(255);
 
wall = createSprite(1200,200,thickness,height/2);
  wall.shapecolor=color(80,80,80);

}

function draw() 

{
  background(0);
  
 
  
    bullet.VelocityX=speed;

  

bulletCollided();

if(bulletCollided(bullet,wall))
{

bullet.VelocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  
if(damage>10)
 {

  wall.shapecolor=color(255,0,0);

  }

  if(damage<10)
  {

  wall.shapecolor=color(0,255,0) ;
  }
  drawSprites();
}
}

function bulletCollided(bullet,wall){

  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;

  if(bulletRightEdge>=wallLeftEdge)
  {

  return true;
  }
  
  return false
}
