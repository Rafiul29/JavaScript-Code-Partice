//calback function.................
function sample(a,b,cb){
    var c= a+b
    var d= a-b;
    var result =cb(c,d)
    return result;
}

function sum(a,b){
    return a+b;
}

var result =sample(1,2,sum)
console.log(result)


var result1 =sample(1,2,function(a,b){
    return a-b;
})

console.log(result1)


var result2 =sample(1,2,function(a,b){
    return a*b;
})

console.log(result2)


var result3 =sample(1,2,function(a,b){
    return a/b;
})

console.log(result3)