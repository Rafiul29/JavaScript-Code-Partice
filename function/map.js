
var arr=[1,2,3,4,5]

// var sqrt =arr.map((value,index,arr)=>{
//  return value*value;
// })

// console.log(sqrt)//orginal array does not chnage 
// console.log(arr)


// =========implementation=============

function myMap(arr,cb){
    var newArr=[];
    for(var i=0; i<arr.length; i++){
        var temp=cb(arr[i],i,arr);
        newArr.push(temp)
    }
    return newArr;
}

var sqrt =myMap(arr,function(value,index,arr){
    return value*value*value
})
console.log(arr)
console.log(sqrt)