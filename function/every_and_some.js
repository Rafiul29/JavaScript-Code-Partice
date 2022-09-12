var arr=[1,2,4,7,9,2,4,0]

var res1 = arr.every(function(value){
    return value %2==0
})
console.log(res1)

var res2 = arr.every(function(value){
    return value >=0
})
console.log(res2)

var res1 = arr.some(function(value){
    return value >=0
})
console.log(res2)