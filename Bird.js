class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/smoke.png");
    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var position=[this.body.position.x,this.body.position.y];

    if(this.body.position.x>200 && this.body.speed>6){
      this.trajectory.push(position);
    }


    

    for(var i in this.trajectory){
     image (this.smokeImage,this.trajectory[i][0],this.trajectory[i][1]);
     
    }

    

    super.display();
  }
}
