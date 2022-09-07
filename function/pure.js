// =========Pure function===============

/* it returns the same result it given the same argument..
 it does not case any observable side effect...
*/
//Example pure function
/*
function square(n){
    return n*n;
}
console.log(square(2))
console.log(square(2))

*/
// *** this function return 4 the same  result  it given the same argument 4 
// ** this function are inside the program not will be use this callded function side effect is zero 

// another example 

/*
var  value =10;
function valueChange(){
    value = 20;
}
valueChange()
*/
//  if argument not then the might be pure function
//if valueChange function call return the result global variable value chnages this function called can hold side effect 
//console.log(value)
// this function is not a pure function