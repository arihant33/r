class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
    this.smoke=[];
    Matter.Body.setDensity(this.body,15)
  }
  display(){
    // this.body.position.x = mouseX;
    // this.body.position.y = mouseY;
    var pos =this.body.position;
    if(slingshot.sling.bodyA==null&& this.body.velocity.x>6){
      var position=[pos.x,pos.y];
      this.smoke.push(position)
    }
    
    for(var i=0;i<this.smoke.length;i=i+1)
    {
      image(this.image2,this.smoke[i][0],this.smoke[i][1])

    }
    super.display();
  }
}