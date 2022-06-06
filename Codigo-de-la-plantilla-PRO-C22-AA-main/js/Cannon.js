class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonImg = loadImage("./assets/canon.png");
    this.cannonBaseImg = loadImage("./assets/cannonBase.png");
  }
  
  display() {
    
    if(keyIsDown(DOWN_ARROW) && this.angle < 70){
      this.angle += 1;
    }
    imageMode(CENTER);

    push();
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.cannonImg,this.x,this.y,this.width*0.8,this.height*0.8);
    pop();
    
    image(this.cannonBaseImg,this.x,this.y,this.width,this.height);
    noFill();
  }
}
  
  
