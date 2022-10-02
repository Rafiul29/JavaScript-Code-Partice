const createReact=function(width,height){
    return {
            width:width,
            height:height,

            draw: function(){
            this.draw1()
             console.log(this.width,this.height)
            },
            draw1: function(){
                console.log(this.width,this.height)
            }
    }
}

const react1= createReact(10,20)
react1.draw()

const react2= createReact(1000,200)
react2.draw()


var str = new String('str')
console.log(str)
console.log(str.constructor)
console.log("this is " + str)