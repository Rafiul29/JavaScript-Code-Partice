var arr=[1,2,3,4,5,6,7,8,9]
// const filterArr = arr.filter(function(value){
//     return value%2 ==0
// })
// console.log(filterArr)

function myFilter(arr,cb){
    var filterArr=[]
    for(var i=0; i<arr.length; i++){
        if(cb(arr[i],i,arr)){
            filterArr.push(arr[i])
        }
    }
    return filterArr
}



console.log(myFilter(arr,function(value){
    return value%2==0
}))

console.log(myFilter(arr,function(value){
    return value%2==1
}))

console.log(myFilter(arr,function(value){
    return value>5
}))