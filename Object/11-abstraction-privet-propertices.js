

const Rectangle =function(width,height){
    this.width=width;
    this.height=height

    var position={
        x:34,
        y:12
    }
     var printPropertices = function(){
      console.log(" Width is " + this.width);
      console.log("Height is "+ this.height);
    }.bind(this)

    this.draw= function(){
       printPropertices();
       console.log("X = " + position.x+ ' Y = '+ position.y)
    }
}

var rect1= new Rectangle(45,3)
rect1.draw()