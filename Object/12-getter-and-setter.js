



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
    },

    Object.defineProperty(this,'position',{
        get :function(){
            return position;
        },
        set: function(value){
          position=value
        }
    })
}


var rect1= new Rectangle(45,3)

rect1.position={
    x:300,
    y:400
}
console.log(rect1.position);

rect1.draw()