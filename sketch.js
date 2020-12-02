var thickness, wall;
var bullet, weight, speed;

function setup() {
  createCanvas(1600,400);
  

  speed = random(55,90)
  weight = random(400,600)
  thickness = random(22,83)

  bullet = createSprite(50,200,60,10)
  bullet.velocityX = speed;
  bullet.shapeColor = "white"

  wall = createSprite(500,200,thickness,height/2)
  wall.shapeColor = color(80,80,80)
  
}

function draw() {
  background(0);  

  if(isCollided(bullet, wall)){
    bullet.velocityX = 0;
    bullet.depth = wall.depth
    bullet.depth = bullet.depth+1
  
    var damage = ((0.5 * weight * speed * speed)/( thickness*thickness*thickness))
    console.log(damage)
    if(damage>10){
      bullet.shapeColor = color(255,0,0)
    }
    
    if(damage<10){
      bullet.shapeColor = color(0,255,0)
    }
  }
  drawSprites();
}




function isCollided(bulletSprite , wallSprite){
if( (bulletSprite.x + bulletSprite.width) >= wall.x)
{
 
  return true;
}
else{
 
  return false;
}
}