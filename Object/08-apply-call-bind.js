
function myFunc(c,d){
    console.log(this)
    console.log(this.a+ this.b +c+d)
}
myFunc() //this window object refer 
// myFunc.call({a:20,b:30},10,5) // this  object refer
 myFunc.apply({a:100,b:200},[5,10]) //this  object refer  argument must be array

const binds= myFunc.bind({a:20,b:30}) // just object bind not call
binds(10,5)
binds(4,1)