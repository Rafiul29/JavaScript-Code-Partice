var react ={
    width:100,
    height: 400,

    draw: function(){
        console.log(" This is rectangle")
        console.log(this.height)
        console.log(this.width)
    }
}


react.draw()
react.height=500;
react.draw()