

function curying(a){
   return function(b){
       return function(c){
          return  function(d){
                return a+b+c+d;
            }
        }
    }
}



console.log(curying(5)(3)(2)(1))


// currying arrow function 😄

const multipro =(a)=>(b)=>(c)=>(d)=>(e)=>a+b+c+d+e
// this is called lambda function
console.log(multipro(1)(2)(3)(4)(5))