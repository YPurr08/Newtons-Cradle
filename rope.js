/*
  Rope Class is the constraint that connects each Bob to the Roof
*/

class Rope{
  constructor(body1,body2,offsetX,offsetY){
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    
    var options={
      bodyA:body1,
      bodyB:body2,
      pointB:{x:this.offsetX, y:this.offsetY}
    }
    
    this.ropeC = Constraint.create(options);

    //Add to world
    World.add(world, this.ropeC);
  }

  display(){
    //Define Bodies that are to be connected
    var pointA = this.ropeC.bodyA.position;
    var pointB = this.ropeC.bodyB.position;
    
    strokeWeight(2);

    //Set X & Y coordinate variables for each body
    var anchor1X = pointA.x;
    var anchor1Y = pointA.y - this.ropeC.bodyA.circleRadius;
    var anchor2X = pointB.x+this.offsetX;
    var anchor2Y = pointB.y+this.offsetY;
    
    stroke("white");

    //Create line using given parameters in sketch.js
    line(anchor1X, anchor1Y, anchor2X, anchor2Y);
  }
}