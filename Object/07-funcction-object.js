function test(){
    console.log("function are object")
}
console.log(test.name,test.length)


var Rect = new Function('width','height',`
        this.width=width;
        this.height=height

        this.draw=function(){
            this.draw1();
            console.log("Draw ",this.width,this.height);
        }
        this.draw1= function(){
            console.log( "Draw1",this.width,this.height)
        }
`)


const rect5 = new Rect(20,40)
console.log(rect5)
console.log(Rect.name,Rect.length)