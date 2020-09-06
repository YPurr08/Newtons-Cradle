/*
Top class is a rectangular roof that the bob is connected to (via constraint)
*/

class Top {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      //Add to world
      World.add(world, this.body);
    }
    
  display(){
      //fill with color
      fill(rgb(250,0,100));
      
      rectMode(CENTER);
      //create rectanales using parameters giving in sketch.js
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}