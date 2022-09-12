var arr=[1,2,42,4,2,34,2675,543]

// var result =arr.find(function(value,index){
//     return value ===42
// })

// console.log(result)

// ========impletementation============

function myFind(arr,cb){
    for(var i=0; i<arr.length; i++){
        if(cb(arr[i])){
           // return arr[i]

           return i
        }
    }
}

var result = myFind(arr,function(value){
    return value==42
})
console.log(result)