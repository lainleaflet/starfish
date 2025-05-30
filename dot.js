class Dot{
    constructor(x,y){
      this.x = x;
      this.y = y;
      this.offset = int(random(0,400));
      this.speed = random(-0.175,0.175);
      this.size = random(1.5,2.75);
    }
    
  
    show(){
    push(); // save current drawing state
    translate(this.x, this.y); // move entire plant

      if ((frameCount + this.offset) % 50 < 10){
        strokeWeight(1);
        stroke(248, 222, 126, 200);
        fill(backgroundColor);
        ellipse(this.x, this.y, this.size, this.size);
       } else {
        fill(248, 222, 126, 200);
        stroke(248, 222, 126, 200);
        ellipse(this.x, this.y, this.size, this.size);
       }
       pop(); 
    }

    move(){
        if ((frameCount + this.offset) % 1000 < 500){
          this.x += this.speed;
          if(this.x <= -100 || this.x >= width+100){
            this.speed *= -1;
          }
        } else {
          this.y += this.speed;
          if(this.y <= -100 || this.y >= height+100){
            this.speed *= -1;
          }
        }
    }

  }