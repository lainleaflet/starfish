let plants = [];
let leaves = [];
let backgroundColor;
let dots = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 200; i++){
     plants.push(new Plant(random(0,width), random(0,height)));
    //plants.push(new Plant(width/2, height/2));
  }

  for (let i = 0; i < 250; i++){
     dots.push(new Dot(random(0,width), random(0,height)));
  }

  for (let i = 0; i < 1; i++){
    for(let plant of plants){
      plant.grow();
    }
  }
 backgroundColor = color(32,21,40); 
}


function draw() {
  //console.log(frameCount);
  background(backgroundColor);
  for (let plant of plants){
      plant.show();
      plant.move();
  }

  for (let one of dots){
      one.show();
      one.move();
  }

}