let plants = [];
let leaves = [];
let backgroundColor;

function setup() {
  createCanvas(400, 500);
  for (let i = 0; i < 185; i++){
     plants.push(new Plant(random(0,width), random(0,height)));
    //plants.push(new Plant(width/2, height/2));
  }

  
  for (let i = 0; i < 1; i++){
    for(let plant of plants){
      plant.grow();
    }
  }
 backgroundColor = color(0, 0, 34); 
}


function draw() {
  //console.log(frameCount);
  background(backgroundColor);
  for (let plant of plants){
      plant.show();
      plant.move();
  }

}