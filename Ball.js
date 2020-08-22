class Ball {
constructor(x,y,radius){
    var options = {
    
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.x=x;
this.y=y;
this.radius = radius;
//all the properties should be assigned before creating the body
//you were setting radius after the body was created
this.body = Matter.Bodies.circle(this.x,this.y,this.radius/2,options);


World.add(world,this.body);

}
display(){
var pos =this.body.position;

push();
translate(pos.x,pos.y);

fill("white");
ellipseMode(RADIUS);
//ellipse(0,0,width,height);
//for the ellipsethe width & height ,both are radius
//if we have translated to the pos.x,pos.y in translate(), we should write 0,0 for position in ellipse()
ellipse(0,0,this.r,this.r);
//you had missed out pop() function
pop();
} 
}



