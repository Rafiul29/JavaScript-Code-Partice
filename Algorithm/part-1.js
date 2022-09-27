
// function sum(arr){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum +=arr[i];
//     }
//     return sum
// }

// console.log(sum([1,2,3,4,5,6,7,8]))//O(n)--linear time complexity
//O(n)-- space complexity

// function sum2(num1,num2){
//     return num1+num2
// }
// console.log(sum2(2,3))// O(1)-constant....


// let n=10;
// for(let i=0; i<=n;i++){
//     for(let j=0; j<=n; j++){
//         console.log(i,j)//O(n^2) - Quadratic time complexity
//     }
// }


// 3 nested for loop O(n^3)-cubic;



// Febonacci series.......


//  function fibonacci(n){
//     const fibo = [0,1];
//     for(i=2; i<n; i++){
//         fibo[i]=fibo[i-1]+fibo[i-2];
//     }
//     return fibo
//  }

//  console.log(fibonacci(8))



//  factorials...

function factorials(n){
    let res=1;
    for(let i=2; i<=n;i++){   //O(n)
        res *=i
    }
    return res;
}
console.log(factorials(5))

function fact(n){
    if(n==1){    //O(n)
        return 1;
    }
     return n * fact(n-1);
}

console.log(fact(5))


// prime Number ....

function isPrime(num){
    if(num<2) return false;
    for(let i=2; i<num;i++){
        if(num%i===0) return false;
    }
    return true;

}

console.log(isPrime(3))
console.log(isPrime(6))
console.log(isPrime(9))
console.log(isPrime(11))