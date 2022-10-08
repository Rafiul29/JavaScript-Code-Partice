//151 iterator basics

const arr =[1,2,4,5,6,20 ]


// for( let i=0;i<arr.length; i++){
//     console.log(arr[i])
// }

//ES5 syntext
// Custom iterator

 
// function createIterator(collection){
//     let i=0;
//     return {
//         next(){
//             return{
//                 done: i>= collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }

// let iterate = createIterator(arr);
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// console.log(iterate.next())
// console.log(iterate.next())

// console.log(iterate.next())
// console.log(iterate.next())



//152 iterator With Symbol in js

let a=[12,23,22]

let iterate = a[Symbol.iterator]();

console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())


// string 
 let str="TEXT"
 let stringIterate= str[Symbol.iterator]()
 console.log(stringIterate.next())
 console.log(stringIterate.next())

 console.log(stringIterate.next())

 console.log(stringIterate.next())

 console.log(stringIterate.next())
