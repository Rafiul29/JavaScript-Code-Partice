

// function sayHi(n){
//     if(n==0) return 
//     console.log("Hi")
//     sayHi(n-1)
// }
// sayHi(10)

// function sum(n){
//     if(n==1){
//         return 1
//     }
//     return n+sum(n-1)
// }
// console.log(sum(10))


// function fact(n){
//     if(n==1) return 1
//     return n * fact(n-1)
// }
// console.log(fact(4))

var arr =[1,2,4,5]

function sumRec(arr,lastIndex){
    if(lastIndex<0) return 0;

    return arr[lastIndex] + sumRec(arr,lastIndex-1)
}

console.log(sumRec(arr, arr.length-1))
