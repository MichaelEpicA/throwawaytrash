class Paper {
   constructor(x,y,radius) {
       var options = {
           isStatic: false,
           restitution:0.3,
           friction:0.5,
           density:1.2
       }

       this.x = x;  
       this.y = y;
       this.radius = radius;
       this.body = Bodies.circle(this.x,this.y,15,options)
       this.image = loadImage("paper.png");
       World.add(world,this.body);
   }
   display() {
    push();         
    translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    fill(255,0,255);
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
    pop();
   }
}
