let map = new Map([
    ['a',1],
    ['b', 20],
    ['c', 30]
])

map.set('d',40)
map.delete('c')
console.log(map)
//map.clear()
console.log(map.size)
console.log(map.get('b'))
console.log(map.entries())
console.log(map.values())



for( let [k,v] of map){
    console.log(v,k)
}


map.forEach((v,k)=>{
console.log(v,k)
})


// const obj = {
//     abc: undefined,
//     bcd: 'test',
//     cde: undefined,
//     def: 'test 2'
//   };

//   delete obj.abc
//   delete obj.cde


//  let array = Object.entries(obj)

//  let arr=array.map((item)=>{
//     return item[0]
//  })

// console.log(arr)