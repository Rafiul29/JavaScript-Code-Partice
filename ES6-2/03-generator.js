
// custom iterator............

let obj = {
  start: 1,
  end: 5,
  [Symbol.iterator]:function* (){
    let currentValue = this.start
    while(currentValue<= this.end){
        yield currentValue++
    }
  }
};


let  iterator = obj[Symbol.iterator]()

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// for(let i of obj){
//     console.log(i)
// }


// function * generator(){
//     yield 1
//     yield 2
//     yield 3

// }

// let it = generator();
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
 arr=[13,4,2,433]
function*  generator(collection){
    for( let i=0; i<collection.length; i++){
        yield collection[i]
        console.log(collection[i])
    }

}

let it = generator(arr)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

