class Basket {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png");
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      fill("black");
      image(this.image, 1225, 850, 250, 200);
      pop(); 
    }
  };