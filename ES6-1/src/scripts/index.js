// //139 templete String

// var s = `        dnjsndn   `;
// console.log(s.trim());
// var name = "rafiul islam";

// console.log(name.padStart(20, "*"));
// console.log(name.padEnd(15, "R"));
// console.log("r".repeat(10));

// //  141 ..arrow function

// let add = (a, b) => a + b;
// console.log(add(109, 1));

// function arrow() {
//   console.log(this);
// }

// arrow();

// const arr = () => {
//   console.log(this);
// };
// arr();

// //142. Arrow Functions & This in Javascript

// // let obj={
// //     name:"rafiul Islam",
// //     print: function(){
// //        // var self = this
// //         console.log(this)
// //         setTimeout(function(){
// //             console.log(`Hello ${this.name}`)
// //         }.bind(this),1000)
// //     }
// // }

// // obj.print()

// // 143 Default Parameter................

// function sqr(n = 1) {
//   //n = n || 1
//   // if(!n){
//   //     n=1;
//   // }
//   return n * n;
// }
// console.log(sqr(5));

// function greet(name = "rafiul", msg = "Hello") {
//   console.log(`${msg} ${name}`);
// }
// greet();

// // custom iterator............

// let obj = {
//   start: 1,
//   end: 10,
//   [Symbol.iterator]: function () {
//     let currentValue = this.start;
//     const self = this;
//     return {
//       next() {
//         return {
//           done: currentValue > self.end,
//           value: currentValue > self.end ? undefined : currentValue++,
//         };
//       },
//     };
//   },
// };

// // for(let i of obj){
// //     console.log(i)
// // }

// let iterate = obj[Symbol.iterator]();
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

// // 145 Rest and Spread Operator in js

// //rest operator
// function sum(...rest) {
//   console.log(rest);
// }
// console.log(sum(1, 2, 4, 3));

// let a = [1, 2, 3, 4, 5];
// const [x, y, ...z] = [...a];
// console.log(x, y, z);

// // Spred oprator
// // let student={
// //     name:'rafiul Islam',
// //     age: 23,
// //     sub: "CSE"
// // }

// // let student1={
// //     ...student
// // }
// // console.log(student1.name);

// //146 Enhance Object

// let p = 30;
// let q = 40;

// let enhanceObject = {
//   //     p:p,
//   //     q:q
//     p,
//     q,
//   print(){
//     console.log(this)
//   }
// };
// enhanceObject.print()


// destructuring js
// // object
// let person={
//     name: "rafiul Islam",
//     email:'rafiulislam4472@gmail.com',
//     address:{
//         city:'Rajshahi',
//         country: 'BD'
//     }
// }

// let {name, email, address:{city,country}}= person
// console.log(name,email,city,country)


// //array

// let arr=[1,2,3,4,5,6];

// let [x,,,,y,,z]=arr
// console.log(x,y,z)


//148 Obbject From Entries in js


//object array 

let obj ={
    a:10,
    b:20
}


console.log(Object.entries(obj))

var arr=[
    ['a',10],
    ['b',20]
]

console.log(Object.fromEntries(arr))
