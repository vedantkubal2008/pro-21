
var bullet,wall;
var thick,speed,weight;

function setup() {
  createCanvas(1600,400);
  
  thick=random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet= createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);

  wall = createSprite(1200,200,thick,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background("black");  
 if ( has_collided(bullet,wall)){
  
      bullet.velocityX = 0;
      
      var damage = 0.5*weight*speed*speed/(thick*thick*thick);
      if (damage>10){
          wall.shapeColor = color(255,0,0);
       }
      if (damage<10){  
          wall.shapeColor = color(0,255,0);
       }
  } 
  drawSprites();
}
