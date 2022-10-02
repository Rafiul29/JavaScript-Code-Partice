

const Rectangle =function(width,height){
    this.width=width;
    this.height=height

    this.draw=function(){
        this.draw1();
        console.log("Draw ",this.width,this.height);
    }
    this.draw1= function(){
        console.log( "Draw1",this.width,this.height)
    }
}

const react1= new Rectangle(100,200)
react1.draw()