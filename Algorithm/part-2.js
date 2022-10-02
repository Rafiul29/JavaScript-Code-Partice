// power of 2
// 1 --> 2^0
// 2 --> 2^1
// 8 --> 2^3
// 9 --> flase
// 16 --> 2^4

function powerOfTwo(number) {
  if (number < 1) return false;
  while (number > 1) {
    if (number % 2 !== 0) return false;
    number = number / 2;
  }
  return true;
}
// time  complexity O(logn)
console.log(powerOfTwo(4));
console.log(powerOfTwo(20));
console.log(powerOfTwo(12));
console.log(powerOfTwo(16));

// unit step

// x=n
// y = [1,1,1,1,1,1,1,1.......n]--->time samples

function unitStep(n) {
  let y = [];
  for (let i = 0; i <= n; i++) {
    y.push(1);
  }
  return y;
}
// time complexity O(n)

console.log(unitStep(5));
console.log(unitStep(10));
console.log(unitStep(12));

// unitImpulse...

function unitImpulse(n) {
  let y = [];
  for (let i = 0; i <= n; i++) {
    if (i == 0) y.push(1);
    else y.push(0);
  }
  return y;
}

//time complexity ---> O(n);
console.log(unitImpulse(10));





// Tranping rain water...
function trapingRainWater(height) {
  let water = 0;
  let leftMax = -1;
  let rightMax = -1;
  let leftIndex = 0;
  let rightIndex = height.length - 1;

  if (height.length < 3) return water;

  while (leftIndex <= rightIndex) {
    leftMax = height[leftIndex] > leftMax ? height[leftIndex] : leftMax;
    rightMax = height[rightIndex] > rightMax ? height[rightIndex] : rightMax;

    if (leftMax > rightMax) {
      //water = waterlevel - height[rightIndex]
      water += rightMax - height[rightIndex];
      rightIndex--;
    } else {
      water += leftMax - height[leftIndex];
      leftIndex++;
    }
  }
  return water;
}
console.log(trapingRainWater([5]))
console.log(trapingRainWater([5,3]))
console.log(trapingRainWater([5,3,4,7,3]))
console.log(trapingRainWater([5, 3, 4, 7, 3, 11, 8, 7, 5, 6, 4, 2, 1, 5, 7]))

// recursion......
//parts
// base case..

//fibonacci
//[0,1,1,2,3,5,8,13,21,.............n]
//0 --->0
//1---->1
//element <2 return element
// n = (n-1)+(n-2);



function recursiveFibonacci(n){
    if(n<2) return n;
     return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}
// time complexity O (2^n)

console.log(recursiveFibonacci(7))
console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(3)); // 2
console.log(recursiveFibonacci(6)); // 8
console.log(recursiveFibonacci(7)); // 13




// factorials recursive ...
//6! = 6 * 5 * 4 * 3 * 2
// 6! = 6 * 5!
// n! = n * (n-1)!
// n
// (n-1)!
// n === 0, 1

function recursionFactorials(n){
    if(n===0) return 1;

    return n * recursionFactorials(n-1);
}
// time complexity... O(n) linear 
console.log(recursionFactorials(3))
console.log(recursionFactorials(4))
console.log(recursionFactorials(5))
console.log(recursionFactorials(6))



// linear search algorithm.............

function linearSearch(arr,find){
    for(let i=0; i<=arr.length-1; i++){
        if(arr[i]===find){
            return i;
        }
    }
    return -1;
}
// time Complexity O(n)..linear search
// [1,2,3,4,5,5],5




// binary search algorithm...

function binarySearch(arr, find){
    let left=0;
    let right=arr.length-1;
  
   while(left<= right){
    let mid = Math.floor((left+right)/2)
    if(arr[mid]===find) return mid;

    if(arr[mid]<find){
        left= mid+1;
    }else{
        right= mid-1;
    }
   }
}
// time complexity O(logn)...

console.log(binarySearch([1,2,3,4,5,5],5))
console.log(binarySearch([11, 14, 15, 16, 41, 51, 55], 51))


console.log(0.2 - 0.3 + 0.1)