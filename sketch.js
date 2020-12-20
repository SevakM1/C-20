var a,b;



function setup() {
  createCanvas(1920,1080);
a = createSprite(400, 200, 120, 120);
b = createSprite(600,400,120,192);
a.shapeColor = "green";
b.shapeColor = "green";
}
function draw() {
  background ("black");  
a.x = World.mouseX;
a.y = World.mouseY;
console.log (a.x - b.x)
if ((a.x - b.x < a.width/2+b.width/2) && (b.x - a.x < a.width/2+b.width/2) && (a.y - b.y < a.height/2+b.height/2) && (b.y - a.y < a.height/2+b.height/2)){
a.shapeColor = "red";
b.shapeColor = "red";
}
else{
  a.shapeColor = "green";
b.shapeColor = "green";
}
  drawSprites();
}