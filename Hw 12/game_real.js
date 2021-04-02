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

//** Call createborders
createborders();

//** Call createplayer
createplayer();

//** Call enemy1
enemy1();

//** Call enemy2
enemy2();

//** Call win
win();

// create the shape based on the mouse click
   fill(0,130,140);
   circle(mouseShapeX, mouseShapeY, 25);

}
function mouseClicked()
{
  mouseShapeX = mouseX;
   mouseShapeY = mouseY;
}

//** Create Player
function createplayer()
  {
    circle(x,y,50);
  }

//**Create enemy1
function enemy1()
  {
    fill(0,0,0);
    circle(shapeX, shapeY, 10);
  // random speed
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);

  // move the shape
   shapeX += shapeXSpeed;
   shapeY += shapeYSpeed;

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
}

//**Create enemy2
function enemy2()
  {
    fill(255,255,255);
    circle(shape2X, shape2Y, 20);
  // random speed
    shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
    shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);

  // move the shape
   shape2X += shape2XSpeed;
   shape2Y += shape2YSpeed;

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
}

//** You win
function win()
{
  if(x >= 730 && y >= 570)
  {
    fill(255,255,51);
    textSize(26);
    text("You Win!", 400, 300);
  }
}

//**Create Borders
function createborders()
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
