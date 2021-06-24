class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.img2 = loadImage("sprites/smoke.png")
    this.arr = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.position.x > 220 && this.body.velocity.x>1){
    var position = [this.body.position.x,this.body.position.y]
    this.arr.push(position)
    }
    for(var i=0; i<this.arr.length;i++){

image(this.img2,this.arr[i][0],this.arr[i][1])


    }

    super.display();
  }
  }

