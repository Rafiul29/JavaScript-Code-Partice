function Person(name){
    this.name=name;
}

const p1= new Person("Rafiul")
console.log(p1)

// Property Describe in js
const person={
name :"rafiul islam rafi"
}
// console.log(person)
// console.log(Object.keys(person));
// var describtor = Object.getOwnPropertyDescriptor(person,'name');
// console.log(describtor)


let baseObj= Object.getPrototypeOf(person)
let describtor=Object.getOwnPropertyDescriptor(baseObj,"toString")
console.log(describtor);

Object.defineProperty(person,'name',{
    enumerable:false,
    writable:false, 
    configurable:false,
    value: "rafiul Islam rafi"
})  
console.log(Object.keys(person))

console.log(person.name);

// 124  constructor prototype in js
var p2 = new Person("Rafi");
Person.prototype.PI=3.1416; 
console.log(Object.getPrototypeOf(p2));
console.log(Person.prototype) // constructor protoype
console.log(Object.getPrototypeOf(p2)==Person.prototype) //same object refer

console.log(p1,p2)

//all constatructor prototype myMethod add
Array.prototype.myMethod=function(){}


//125 instance  vs prototype method in js

function Square(width){
    this.width = width;  // instance member
}

Square.prototype={
  draw:function(){
        console.log(this.width) // prototype member 
    }
}

var sqr1 = new Square(10)
var sqr2 = new Square(5);

//console.log(sqr1,sqr2)


// 126 using Instance and prototype members


function Square(width){
    this.width = width;  // instance member
    this.getwidth=function(){
        console.log("width "+ this.width); 
        //this.draw();
    }
}

Square.prototype={
  draw:function(){
        console.log(this.width) // prototype member 
        this.getwidth()
    }
}

var sqr1 = new Square(10)
var sqr2 = new Square(5);


//127. Iterate Object and HasOwnProperty in Javascript 
console.log(sqr1.hasOwnProperty('width'))
console.log(sqr1.hasOwnProperty('draw'))
console.log(sqr1.hasOwnProperty('getwidth'))

console.log(Object.keys(sqr1))

for( var i in sqr1){
    console.log(i)
}


//128 Don't Overwrite Built in Prototypes in Javascript

console.log(Array.prototype.shuffle=function(){})
