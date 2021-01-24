var h,m,s
var hangle,mangle,sangle




function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background("black");  
  translate(200,200)
  ellipseMode(CENTER)
  fill("purple")
  ellipse(0,0,20)

  h=hour();
  console.log(h)
  m=minute();
  s=second();
  sangle=map(s,0,60,0,360)
  mangle=map(m,0,60,0,360)
  hangle=map(h%12,0,12,0,360)
  push()
rotate (sangle)
stroke("#68C9D0")
line (12,0,75,0)
pop ()
push ()
rotate(mangle)
strokeWeight(5)
stroke("#EF1C51")
line(12,0,100,0)
pop ()
push ()
rotate(hangle)
stroke("#FFFFFF")
strokeWeight(7)
line(12,0,50,0)
pop()
noFill();
stroke("#68C9D0")
arc(0,0,270,270,0,sangle)
stroke("#EF1C51")
strokeWeight(5)
arc(0,0,300,300,0,mangle)
stroke("#FFFFFF")
strokeWeight(7)
arc(0,0,240,240,0,hangle)
}