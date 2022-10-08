// Class in js

class Rectangle{
    constructor(width,height){
        this.width=width
        this.height=height
    }
    draw(){
        console.log("Drawing......")
        console.log(this.width,this.height)
    }
}

const rect = new Rectangle(20,40);
console.log(rect);

console.log(typeof Rectangle)

// babel.js  


//class propertices 

class Rectangle1 {
    constructor(width,height){
        this.width=width
        this.height=height
        this.another=function(){

        }
    }
    name = "rafiul islam"
    draw(){
        console.log(name)
    }
    test(){

    }
}
const rect1= new Rectangle1(40,50)
console.log(rect1)

//babel plagin...
