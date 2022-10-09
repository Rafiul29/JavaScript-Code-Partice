


// 166 Inheritance in ES6

class Shape{
    constructor(name){
        this.name=name
    }
    draw(){
        console.log(this.name)
    }
}


class Rectangle extends Shape{
    constructor(width,height,name){
super(name)
        this.width=width
        this.height=height
    }

    drawing(){
        console.log(this.width,this.height,this.name)
    }

    // shape class draw Method Overiding 

    draw(){
        console.log(`draw name is ${this.name}`)
    }

}


const draw1= new Rectangle(1,2,'rectangle')
console.log(draw1)
draw1.draw()
draw1.drawing()