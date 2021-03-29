// x and y for character
var x = 100;
var y = 100;
// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for enemy1
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// x and y for enemy2
var shape2X = 400;
var shape2Y = 50;
var shape2XSpeed;
var shape2YSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(800, 600);
// random speed
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
}
function draw()
{
//Background
  background(34,139,34);
  fill(255,105,180);

// Top Border
  rect(0,0,800,10);
// Left Border
  rect(0,0,10,600);
// Bottom Border
  rect(0,590,800,10);
// Right Border
  rect(790,0,10,510);

//EXIT
  textSize(24);
  text("EXIT", 740, 580)

//Game Piece
  circle(x,y,50);

// "You Win!"
if(x >= 730 && y >= 570)
{
  fill(255,255,51);
  textSize(26);
  text("You Win!", 400, 300);
}

// enemy
  fill(0,0,0);
// draw the shape
  circle(shapeX, shapeY, 10);
// random speed
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);

// move the shape
 shapeX += shapeXSpeed;
 shapeY += shapeYSpeed;

 // enemy 2
   fill(255,255,255);
 // draw the shape
   circle(shape2X, shape2Y, 20);
 // random speed
   shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
   shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);

 // move the shape
  shape2X += shape2XSpeed;
  shape2Y += shape2YSpeed;

// enemy1 out of bounds
 if(shapeX > 800)
 {
     shapeX = 0;
 }
 if(shapeX < 0)
 {
     shapeX = 800;
 }
 if(shapeY > 600)
 {
     shapeY = 0;
 }
 if(shapeY < 0)
 {
     shapeY = 600;
 }

 // enemy2 out of bounds
  if(shape2X > 800)
  {
      shape2X = 0;
  }
  if(shape2X < 0)
  {
      shape2X = 800;
  }
  if(shape2Y > 600)
  {
      shape2Y = 0;
  }
  if(shape2Y < 0)
  {
      shape2Y = 600;
  }

// Mouse Shape
  fill(255,0,0);
  circle(mouseShapeX, mouseShapeY, 25);

}

// Mouse Shape Action
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

// Player Controls
  function keyPressed()
  {
    if (key == 'd')
    {
      x+=15;
    }
    else if (key == 'a')
    {
      x-=15;
    }
    if (key == 's')
    {
      y+=15;
    }
    else if (key == 'w')
    {
      y-=15;
    }



}
