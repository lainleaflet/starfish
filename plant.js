 class Plant{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.branches = [];
    this.leaves = [];
    this.count = 0;
    this.speed = random(-0.65,0.65);
    this.offset = int(random(0,1000));
    
    let numLines = Math.floor(random(5,10));
    let angSpacing = TWO_PI/numLines;
    let a = createVector(x, y);
    for(let i = 0; i<numLines; i++){
      let angle = angSpacing * i;
      let endX = x+cos(angle)*(15);
      let endY = y+sin(angle)*(15);
      let b = createVector(endX, endY);
      let root = new Branch(a,b);
      this.branches.push(root);
    }
  }
  
  grow(){ 
    this.count++;
    
    if (this.count == 1) {
      for (var i = 0; i < this.branches.length; i++) {
        if (!this.branches[i].finished) {
          let leaf1 = new Leaf(this.branches[i].end.x, this.branches[i].end.y);
          this.leaves.push(leaf1);
        }
      }
    }
  }
  
show() {
    push(); // save current drawing state
    translate(this.x, this.y); // move entire plant

    for (let branch of this.branches) {
        branch.show();
    }
    for (let leaf of this.leaves) {
        leaf.show();
    }

    pop(); // restore original drawing state
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