class Leaf{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.offset = int(random(0,400));
  }
  

  show(){
    if ((frameCount + this.offset) % 50 < 10){
      strokeWeight(1);
      stroke(248, 222, 126, 200);
      fill(backgroundColor);
      ellipse(this.x, this.y, 4.5, 4.5);
     } else {
      fill(248, 222, 126, 200);
      stroke(248, 222, 126, 200);
      ellipse(this.x, this.y, 4.5, 4.5);
     }
  }
}