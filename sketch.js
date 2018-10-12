var interval = 0.05;
var a = 100;
var prev1 = [];

var x1;
var y1;
var v1; // Vector for first parametric
var xequ1;
var yequ1;
var xinput1;
var yinput1;

var x2;
var y2;
var v2; // Vector for first parametric
var xequ2;
var yequ2;
var xinput2;
var yinput2;

var t = 0;

var submit;
var reset;
// var error;

function setup(){
  createCanvas(600, 600);
  frameRate(60);
  createP("First box is for x, second is for y. You can input sin/cos as sin(t) or cos(t)");
  createP("You must use * for multiplication, e.g. sin(2t) must be formatted as sin(2 * t)");
  xinput = createInput();
  yinput = createInput();
  submit1 = createButton('submit');
  submit1.mousePressed(para);
}

function para(){
  xequ1 = xinput.value();
  yequ1 = yinput.value();
}

function draw(){
  background(105);
  translate(width/2, height/2);
  error = false;

  //x = a * (1-cos(t)) * cos(t);
  //y = a * sin(t) * (1-cos(t));
  t+=interval;
  try{
    eval(xequ1);
    eval(yequ1);
  }
  catch(err){
    error=true
  }
  if(!error) {
    var tempx = eval(xequ1);
    x1 = a * tempx;
    var tempy = eval(yequ1);
    y1 = a * tempy;
  }
  v1 = createVector(x1,y1);
  ellipse(v1.x,v1.y,10,10)
  prev1.push(v1);

  if(prev1.length > 100) {
    prev1.splice(0,1);
  }

  for(var i = 0; i < prev1.length; i++){
    var pos = prev1[i];
    fill(255,0,0);
    ellipse(pos.x,pos.y,1,1);
  }
}
