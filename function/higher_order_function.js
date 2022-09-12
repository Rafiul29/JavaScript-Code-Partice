
// 5. We can  pass function as an Argument...
// function add(a,b){
//     return a+b;
// }

// function manipulate(a,b,func){
//     var c=a+b;
//     var d= a-b;

//     function multiply(){
//         var m =func(a,b)
//         return c*d*m
//     }
    // return function(){
    //     var m = func(a,b)
    //     return c*d*m
    // }

//     return multiply
// }

// var multiply = manipulate(3,4,add)

// console.log(multiply())


// 6. We can return Function from Another Function 

// 79...........


function greed(msg){
    function  greetings(name){
        return msg + " " + name;
    }
    return greetings
}
var gm = greed("Good Morning")
var msg = gm("Rafiul")
console.log(msg);





 
 function base(b){
    return function(n){
        var result =1;
        for(var i=0; i<b; i++){
            result *=n;
        }
        return result;
    }
  
 }

//  var base10=base(5)
//  console.log(base10(2))
console.log(base(5)(2))