import '../styles/index.scss'

import { sum, sub  } from './math'

console.log('Hello Webpack 4')

console.log(sum(10, 20))
console.log(sub(10, 20))



//139 templete String

var  s= `        dnjsndn   `
console.log(s.trim())
var name = 'rafiul islam'

console.log(name.padStart(20,'*'))
console.log(name.padEnd(15,"R"))
console.log("r".repeat(10));


//  141 ..arrow function

let add = (a,b)=> a+b
console.log(add(109,1))

function arrow(){
    console.log(this)
}

arrow()


const arr=()=>{
    console.log(this);
}
arr()


//142. Arrow Functions & This in Javascript 

// let obj={
//     name:"rafiul Islam",
//     print: function(){
//        // var self = this
//         console.log(this)
//         setTimeout(function(){
//             console.log(`Hello ${this.name}`)
//         }.bind(this),1000)
//     }
// }

// obj.print()

// 143 Default Parameter................

function  sqr(n=1){

    //n = n || 1
    // if(!n){
    //     n=1;
    // }
    return n*n
}
console.log(sqr(5))

function greet(name="rafiul",msg='Hello'){
    console.log(`${msg} ${name}`)
}
greet()