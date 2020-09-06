/*
Bob class is a circular "ball" that the top is connected to (via constraint). When force is applied, it swings
*/
class Bob {
  constructor(x, y, diameter) {
    var options = {  
      isStatic:false,
      restitution: 0.3,
      friction:0.5,
      density:1.2
    }
    this.body = Bodies.circle(x, y, diameter/2, options);
    this.diameter = diameter;
    //Add to world
    World.add(engine.world, this.body);
  }
  
  display(){
    stroke(0);
    //Fill with color
    fill(rgb(0,250,250));

    //Create circle using given parameters in sketch.js
    circle(this.body.position.x, this.body.position.y, this.diameter)
  }
}
