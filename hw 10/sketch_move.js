var headX = 250;
var headY = 160;
var headDirection = Math.floor(Math.random() * 5) + 1;

var sunX = 90;
var sunY = 75;
var sunDirection = Math.floor(Math.random() * 10) + 1;

var shirtX = 245;
var shirtY = 240;
var shirtDirection = Math.floor(Math.random() * 8) + 1;

var mouthX = 250;
var mouthY = 175;
var mouthDirection = Math.floor(Math.random() * 3) + 1;

var size = 22;
var count = 0;
var sizeDirection = 1;

var bodyX = 250;
var bodyY = 200;
var bodyDirection = 2



function setup() {
  createCanvas(500, 600);
}

function draw() {
  background('orange');

  //head
  fill('tan');
  circle(headX, headY, 75);
  headX+=headDirection;
  if(headX >= 460 || headX <= 40)
  {
    headDirection *= -1;
  }
  // body
  line(bodyX, bodyY, 250, 325);
  bodyX+=bodyDirection;
  if(bodyX >= 500 || bodyX <= 0)

  {
    bodyDirection *= -1;
  }


  // shirt
  fill('red');
  rect(245,shirtY,10,75);
  shirtY += shirtDirection;
    if(shirtY <= 0 || shirtY >= 325 )
    {
        shirtDirection *= -1;
    }


  //pants
  fill('blue');
  triangle(249, 310, 200, 355, 247, 355);

   triangle(251, 310, 251, 355, 297, 355);

   //arms
  line(250,325,300,400);
  line(250,325,200, 400);

  //legs
  line(250,265, 300, 200 );
  line(250, 265, 200, 200);

  //eyes
  fill('white');
  triangle(235, 145, 240, 155, 230, 155);
  triangle(265, 145, 260, 155, 270, 155);

  //mouth
  circle(mouthX,mouthY,25);
  mouthX += mouthDirection;
  mouthY += mouthDirection;
    if(mouthX <= 85 || mouthX >= 465 )
    if(mouthY <= 200 || mouthY >= 220)
    {
        mouthDirection *= -1;
    }

  //grass
  fill('green');
  rect(1,399,499,199);

  //sun
  fill('yellow')
  circle(sunX,sunY,100);
  sunY+=sunDirection;
  if(sunY >=550 || sunY <=48)
    {
    sunDirection *= -1;
  }

  //text
  fill('black')
  text('Warm Summer Day', 192, 50);
  textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
  {
     text('Michael Matthews', 202, 500);
  }
}
