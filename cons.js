class Sling{
    constructor(b,g){
        var option={
            bodyA:b,
            pointB:g,
            length:30, 
            stiffness:0.04
        }
       this.sling= Matter.Constraint.create(option);
 World.add(world,this.sling);
 this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3= loadImage("sprites/sling3.png")


    }

     display(){
        image(this.sling1,120,100,40,150)
        image(this.sling2,90,75,40,75)
        
         if(this.sling.bodyA!=null){
            image(this.sling3,this.sling.bodyA.position.x-17,
                this.sling.bodyA.position.y)


         var pointA=this.sling.bodyA.position;
         var pointB=this.sling.pointB;
         line(pointA.x,pointA.y,pointB.x+10,pointB.y)
         line(pointA.x,pointA.y,pointB.x+40,pointB.y)
         
         }
     }
     fly(){

    this.sling.bodyA=null;//empty    
     }
attach(){

    this.sling.bodyA=bird.body
}


     

}
