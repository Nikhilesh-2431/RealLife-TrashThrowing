class Paper {
    constructor(x,y,radius){
    var options = {
    isStatic:false,
    'restitution' : 0.3,
    'friction' : 0.5,
    'density' : 1.2
}
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    this.image = loadImage("paperimg.png");

    World.add(world,this.body)
}
display(){
    
   imageMode(CENTER);
   image(this.image,0,0,this.radius,this.radius)
   //ellipse(0,0,this.radius,this.radius);
}
}