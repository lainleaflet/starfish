class Leaf{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.offset = int(random(0,400));
  }
  

  show(){
    if ((frameCount + this.offset) % 40 < 10){
      strokeWeight(0.75);
      stroke(248, 222, 126, 200);
      fill(backgroundColor);
      ellipse(this.x, this.y, 4, 4);
     } else {
      strokeWeight(0.75);
      fill(248, 222, 126, 200);
      stroke(248, 222, 126, 200);
      ellipse(this.x, this.y, 4, 4);
     }
  }
}