class Branch {
  constructor(begin, end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;
  }



  show() {
    stroke(255);
    strokeWeight(2.5);
    stroke("#966919");
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }
}
