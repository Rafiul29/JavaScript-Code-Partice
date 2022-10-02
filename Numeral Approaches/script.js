console.log(30==30.0)
console.log(0.1+0.2)
console.log(52.25+175.125)

//toFixed..
const a= 0.1
const b=0.2
const sum =a+b;
console.log(sum.toFixed(2))  /// return string..
console.log(Number(sum.toFixed(2))) // return Number
console.log(+sum.toFixed(2))


// parsing 
console.log(parseInt("8 rem"))
console.log(parseInt("8.5px"))     
console.log(parseFloat("8.5px"))   
console.log(parseFloat("r8 rem"))      

//Number ----> Object Namespace

console.log(Number(parseFloat('16px')))
console.log(parseInt("111111px",16))


// NaN...

console.log(Number.isNaN(20))
console.log(Number.isNaN("rafiul"));
console.log(Number.isNaN(24 / 0)); //infinity
console.log(24/0)
console.log(isNaN("23"))
console.log(Number.isNaN(parseFloat("r8 rem")))

// Number

console.log(Number.isFinite(20))
console.log(Number.isFinite(20/0))
console.log(Number.isFinite(parseInt('23px')))

// Math
console.log(Math.sqrt(25))
console.log(25 ** (1/2))
console.log(8 ** (1/3))

const arr = [25,78,90,73,45]
console.log(Math.max(...arr))
console.log(Math.min(...arr))

console.log(Math.trunc(324234.12411))
console.log(Math.trunc(Math.random()*100))
console.log(Math.floor(3.3))
console.log(Math.ceil(3.4))
console.log(Math.sin(30))
console.log(Math.cos(0))

//bigInt...

console.log(111111111111111111111111141244124144441);

console.log(2**53-1)
console.log(Number.MAX_SAFE_INTEGER)
