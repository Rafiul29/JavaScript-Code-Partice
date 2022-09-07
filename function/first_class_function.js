// First class function
  function add(a,b){
    return a+b;
  }

  // 1. A Function can be Stored in a Variable...
  var sum = add;
  console.log(sum(1,2))
// 2. A function can be stored in an Array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](3,2))
console.log(arr[0](3,9))

// 3. A function can be stored in an Object

var obj= {
    sum: add
}
console.log(obj)
console.log(obj.sum(19,10))

// 4 . We can use Create Function as need
setTimeout(function(){
    console.log("i have created.....")
},4000) 
