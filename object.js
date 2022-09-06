//two object compaire ................

//declare two object 
// let obj1 = {
//     x:10,
//     y:20,
//     z:30
// }

// let obj2 = {
//     x:10,
//     y:20,
//     z:30
// }

//console.log(obj1===obj2)
// return false
//two objects campare not object compare but your object property value compare 
//console.log(obj1.x===obj2.x)
// return true

// trics proper way two object compare 

// * first object convert string 
// JSON.stringify(object name)

//console.log(JSON.stringify(obj1)==JSON.stringify(obj2))



// object traverse ................

// let obj1 = {
//     x:10,
//     y:20,
//     z:30
// }


// for(let i in obj1){
//     console.log(i,obj1[i])
// }


// object mathod........................

// let obj1= {
//     x:10,
//     y:20,
//     z:30
// }


//console.log(Object.keys(obj1))
 //object key return on array
//console.log(Object.values(obj1))
 //object values return on array
//console.log(Object.entries(obj1))
// object key and values return array two dimentinal array key value paire

// copy or clone to another object 

//  let obj2 = obj1;
//  obj2.x=40;
//  console.log(obj1)
//  console.log(obj2)

//  it not proper way to the object copy or clone beacause two object value same ,and two object memmory location same for obj2 property value change autometically obj1 property value changes

// proper way one object to another object .........


// const obj2= Object.assign({},obj1)
// obj2.x=100
// console.log(obj1)
// console.log(obj2)

