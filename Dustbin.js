class Dustbin  {
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            'restitution':0.3
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png")
    
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,0,this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight)
     }
    }
    
        
       