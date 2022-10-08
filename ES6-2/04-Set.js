 let set = new Set([1,3,45,5,3,3])
set.add(49)
//set.clear()
set.add(23)
set.add(60)

set.delete(49)
console.log(set.has(1))
console.log(set.keys())
console.log(set.values())

//  console.log(set)
//  // for of  loop
//  for( let v of set){
//     console.log(v)
//  }

 set.forEach((v,i)=>{
console.log(v,i)
 })

console.log(set.entries())