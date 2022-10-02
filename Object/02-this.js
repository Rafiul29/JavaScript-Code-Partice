var react ={
    width:100,
    height: 400,

    draw: function(){
        console.log(" This is rectangle")
        console.log(this.height)
        console.log(this.width)
    }
}

var another={
    width:10,
    height:15,
    print:react.draw
}


another.print()

function myFunc(){
    react.draw()


}
myFunc()