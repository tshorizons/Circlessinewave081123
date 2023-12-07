//Many possible combinations

let outerCircle;
let s=5;
let d;
let theta;
//let r;

let main ;
let green;
let bluelight;
let darkblue;
let yellow;
let brown;
angleMode(DEGREES);


//let x1=0;

let timer = 0;
let interval = 2000 // 2 seconds

//angleMode(DEGREES);

function setup() {
  main = color(242,222,233);
  green= color (26,71,43);
  bluelight = color(179,199,227);
  darkblue = color (69,99,122);
  yellow = color (243,193,44); 
  brown=color(228,113,39);
  
  createCanvas(windowWidth,windowHeight);

  frameRate(20);
  noLoop();


}

function draw() {
  background(main);

  outerCircle=(width-20)/2;
  d=outerCircle-s;
  translate(width/2,height/2);

  //r=100;
  

  push();
    // Convert polar to cartesian
    //translate(width/2, height/2);
    for(let r=10;r<d/2;r=r+30){
      fill(255,255,255,r);

  
    for (let theta=1; theta<100;theta++){

    let xa = r * cos(theta);
    let yb = r * sin(theta);
  
    // Draw the ellipse at the cartesian coordinate
    ellipseMode(CENTER);
    noStroke();
    let d2=10*sin(theta);
    let d1= 20*cos(theta);
   
    ellipse(xa, yb, d1, d2);
    
    }

  }
  
  
    pop();

    



  push();
  beginShape();
  //translate(width/2,height/2);
  //rotate(90);
  //let start= outerCircle/6;
  //rotate(45);
;  for (let i=-(d/2);i<d/2;i=i+1){
  //rotate(i);
  let x1 = i ;//frameCount;
  let y1 = 20* sin(x1 *0.07);
  stroke(darkblue);
  noFill();
  vertex(x1, y1);
  endShape(CLOSE);
  }

  pop();

  push();
  //translate(width/2,height/2);
  beginShape();

  //rotate ;
  //let start= outerCircle/6;
 for (let i=-d/2;i<d/2;i=i+1){
  let y2 = i;//frameCount;
  //rotate(10*i);
  let x2 = -40* cos(y2 *0.07);
  stroke(bluelight);
  noFill(green);
  vertex(x2, y2);
  endShape(CLOSE);
  
  }
  pop();

  push();
  //translate(width/2,height/2);
  beginShape();


  //let start= outerCircle/6;
  rotate(-80);
 for (let i=-d/2;i<d/2;i=i+1){
  
  let y2 = i;//frameCount;
  let x2 = 40* cos(y2 *0.07);
  stroke(yellow);
  noFill();

  if (i%7==0){
  rotate(45);
  }
  vertex(x2, y2);
  endShape(CLOSE);
  
  }
  pop();
  
  
  //move the the centre


  


  //translate(width/2,height/2);
  //Draw a circle
  stroke(yellow);
  strokeWeight(s);
  noFill();
  circle(0,0,outerCircle);


}

