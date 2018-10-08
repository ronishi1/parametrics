var interval = 0.05;
var a = 100;
var prev = [];
var x;
var y;
var v;
var t = 0;
var xequ;
var yequ;
var submit;
var xinput;
var yinput;

function setup(){
  createCanvas(500, 500);
  frameRate(60);
  createP("First box is for x, second is for y. You can input sin/cos as sin(t) or cos(t)");
  createP("You must use * for multiplication, e.g. sin(2t) must be formatted as sin(2 * t)");
  xinput = createInput();
  yinput = createInput();
  submit = createButton('submit');
  submit.mousePressed(para)
}

function para(){
  xequ = xinput.value();
  yequ = yinput.value();
}

function draw(){
  background(105);
  translate(width/2, height/2);

  //x = a * (1-cos(t)) * cos(t);
  //y = a * sin(t) * (1-cos(t));
  t+=interval;
  var tempx = eval(xequ);
  x = a * tempx;
  print(x);
  var tempy = eval(yequ);
  y = a * tempy;
  v = createVector(x,y);
  ellipse(v.x,v.y,10,10)
  prev.push(v);

  if(prev.length > 100) {
    prev.splice(0,1);
  }

  for(var i = 0; i < prev.length; i++){
    var pos = prev[i];
    fill(255,0,0);
    ellipse(pos.x,pos.y,1,1);
  }
}
