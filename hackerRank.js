// function getLetter(s) {
//   let letter;

//   switch (s[0]) {
//     case "a":
//     case "e":
//     case "i":
//     case "u":
//       letter = "A";
//       break;
//     case "b":
//     case "c":
//     case "d":
//     case "f":
//     case "g":
//       letter = "B";
//       break;
//     case "h":
//     case "j":
//     case "k":
//     case "l":
//     case "m":
//       letter = "C";
//       break;

//     case "n":
//     case "p":
//     case "q":
//     case "r":
//     case "s":
//     case "t":
//     case "u":
//     case "v":
//     case "w":
//     case "x":
//     case "y":
//     case "z":
//       letter = "D";
//       break;

//     default:
//       letter = "Not A Grade";
//   }
//   return letter;
// }

// console.log(getLetter("adfgt"));

// function getSecondLargest(nums) {
//     const myarray =  nums.sort((a,b)=>{
//         return a-b;
//     })
//       return myarray[myarray.length-2]
//   }

//  console.log(getSecondLargest([1,4,1,4,2,9,50,21]))

// function getSecondLargest(nums) {
//     let first = -1 , second = -1;

//     for(let i = 0; i <= nums.length-1; i++){
//         if(nums[i] > first){
//             second = first;
//             first = nums[i];
//         }
//         else if( nums[i] > second && nums[i] != first){
//             second = nums[i];
//         }
//     }
//     return second;

// }
// console.log(getSecondLargest([1,4,1,4,2,9,50,21]))

// class Polygon{
//     constructor(array){
//         this.array=array;
//     }
//     perimeter(){
//         let sum=0;
//        for(let i=0; i<this.array.length; i++){
//             sum=sum+this.array[i];
//        }
//        return sum;
//     }
// }

// const rectangle = new Polygon([10, 20, 10, 20]);

// console.log(rectangle.perimeter());

// const  modifyArray=((nums)=>{
//     const array=[]
//     for(let i=0; i<nums.length; i++ ){
//         if(nums[i]%2 ==0){
//             array.push(nums[i]*2)
//         }else if(nums[i]%2 !=0){
//             array.push(nums[i]*3)
//         }
//     }
//     return array;
// })

// console.log(modifyArray([1, 2 ,3 ,4 ,5]))

// function vowelsAndConsonants(s) {
//     console.log(typeof s)
//   for (let i = 0; i < s.length; i++) {
//     if (
//       s[i] == "a" ||
//       s[i] == "e" ||
//       s[i] == "i" ||
//       s[i] == "o" ||
//       s[i] == "u"
//     ) {
//       console.log(s[i]);
//     }
//   }
//   for (let i = 0; i < s.length; i++) {
//     if (!(s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u")) {
//       console.log(s[i]);
//     }
//   }
// }

// vowelsAndConsonants("javascriptloops");

// function reverseString(s) {
//     let array=[]
//        try{
//         if(typeof s === 'string' && typeof s !== 'number'){
//             for(let i =s.length; i>=0; i--){
//          const result = array.push(s[i])
//          console.log(result)

//             }
//            }else{
//             throw new Error(`s.split is not a function ${s}`)
//         }
//        }catch(error){
//         console.log('Error message: ' + error);
//        }
// }

// console.log(reverseString("1234"))

// function Rectangle(a, b) {

//     return{
//         length:a,
//         width:b,
//         perimeter: 2*(a+b),
//         area: a*b
//     }
//     console.log(rec.area)

// }

// console.log(Rectangle(4,5))

// function positiveArray(arr){
//     const positiveArray=[];
//     for( let i=0; i<arr.length; i++){
//         if(arr[i]>0){
//         positiveArray.push(arr[i]);
//         }
//     }
//     return positiveArray;
// }

// console.log(positiveArray([-1,3,2,-9,0,4,2,7,3,-9,-100]))

// function isPositive(a) {

//         if(a>0)return  "YES";
//         }else if(a<0){
//             throw new Error ("Negative Error")
//         }else if(a==0){
//             throw new Error("Zero Error")
//         }

// console.log(isPositive(1))

// function getDayName(dateStr, locale)
// {
//     var date = new Date(dateStr);
//     return date.toLocaleDateString(locale, { weekday: 'long' });
// }

// var dateStr = '05/23/2014';
// var day = getDayName(dateStr, "nl-NL");

// console.log(day)

// function getDayName(date = new Date(), locale = 'en-US') {
//     return date.toLocaleDateString(locale, {weekday: 'long'});
//   }

//   // ??? Get name of current day
// //   console.log(getDayName()); // ??????? Tuesday

//   // ??? Get day name for specific date
//   console.log(getDayName(new Date('2022-01-29'))); // ??????? Saturday



// Diagonal Difference

// function diagonalDifference(arr) {
//   // Write your code here
//   let primaryDiagonal = 0;
//   let secondryDiagonal = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (i === j) {
//         primaryDiagonal += arr[i][j];
//       }
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if((i+j)===(arr.length-1)){
//          secondryDiagonal +=arr[i][j];   
//       }
//     }
//   }
//   return Math.abs(primaryDiagonal-secondryDiagonal)
// }
// // return primaryDiagonal

// console.log(
//   diagonalDifference([
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12],
//   ])
// );





// Mini-Max Sum

// function miniMaxSum(arr) {
//   // Write your code her
//  arr.sort(function(a,b){return a-b}) //sort the array numerical value
// let sum =0;
//   for(let i=0; i<arr.length; i++){
//     sum +=arr[i];
//   }
//   let minSum = sum - arr[arr.length-1]
//   let maxSum = sum - arr[0]
// console.log(minSum +" " +maxSum)
// }
// console.log(miniMaxSum([1,2,3,4,5]))


// function staircase(n) {
//   // Write your code here
//   let string = "";
// for (let i = 1; i <= n; i++) {
// // printing spaces
// for (let j = 0; j < n - i; j++) {
//   string += " ";
// }
// // printing star
// for (let k = 0; k < i; k++) {
 
//   string += "#";
// }
// string += "\n\n";
// }
// return string;

// }

// console.log(staircase(6));



// function gradingStudents(grades) {
//   // Write your code here
  
//  let newArr=[]
//   for(let i=0; i<grades.length; i++){
//     if(grades[i]>=38 && grades[i]%5 >=3){
//       while(grades[i]%5 !==0){
//         grades[i]++;
//       }
//     }
   
//     newArr.push(grades[i])
//   }


// let newArr = []
// for (let i = 0; i < grades.length; i++) {
//   if (grades[i] < 38) {
//     newArr.push(grades[i])
//   } else {
//     let roundNum = Math.ceil(grades[i] / 5) * 5
//     if (roundNum - grades[i] < 3) {
//       newArr.push(roundNum)
//     } else {
//       newArr.push(grades[i])
//     }
//   }
// }
// return newArr

// }
// console.log(gradingStudents([75,37,33]))


// function getMoneySpent(keyboards, drives, b) {
//   let newArry=[];
//   for(let i=0; i<keyboards.length; i++){
//       let sum = 0;
//       for(let j=0; j<drives.length;j++){
//           sum=keyboards[i]+drives[j];
          
//           if(sum<b){
//               newArry.push(sum)
//           }
//            sum =0;
//       }
     
//   }
//   let maxcost =newArry.sort(function(a,b){ return a-b})

//   return maxcost.length !==0? Math.max(...maxcost): -1

// }

// console.log(getMoneySpent([40,50,60],[5,8,12],60))



// function solve(meal_cost, tip_percent, tax_percent) {
//     // Write your code here
//     const tip= (meal_cost/100)*tip_percent;
//     const tax = (tax_percent/100)*meal_cost;
//     const total_cost = parseFloat(meal_cost + tip + tax).toFixed(0);
//     return total_cost

// }

// console.log(solve(12,20,8))



// function staircase(n) {
//     // Write your code here
//     for (let i = 1; i <= n; i++) {
//         let result = ''.padStart(n - i, " ").concat("".padStart(i, "#"))
//         console.log(result)
//     }
// }
// console.log(staircase(6))

// function timeConversion(s) {
//     let [hours, minutes,seconds] = s.split(':');
//   const modifire=  s.slice(s.length-2)
//   const second = seconds.split('')
//   const second1= second.splice(0,2)
//   const second2 =second1.join("").toString()

//   if(hours === '12'){
//     hours = '00';
//   }
//   if(modifire==='PM'){
//     hours = parseInt(hours)+12
//   }
//   return `${hours}:${minutes}:${second2}`
// }


// console.log(timeConversion('07:05:45PM'))



// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//   // Write your code here
//   let newApples =[];
//   let newOranges= [];
//   let countApple=0;
//   let countOrange=0
//     for(let i=0; i<apples.length; i++){
//       newApples.push(apples[i]+a)
//     }
//     for(let i=0; i<oranges.length; i++){
//       newOranges.push(oranges[i]+b)
//     }
//     for(let i=0; i<newApples.length; i++){
//       if(s<=newApples[i] && t>=newApples[i])
//       countApple++
      
//     }

//     for(let i=0; i<newOranges.length; i++){
//       if(s<=newOranges[i] && t>=newOranges[i])
//       countOrange++
      
//     }

//     console.log(countApple);
//     console.log(countOrange)
// }
// console.log(countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6]))



// function kangaroo(x1, v1, x2, v2) {
//   // Write your code here
// let k1 = x1 + v1; 
// let k2 = x2 + v2;

// while (!(k1 === k2)) {
//   k1 += v1;
//   k2 += v2;
// }

// if (k1 === k2) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// }

// kangaroo(0,3,4,2)



function getTotalX(a, b) {
    
    let arr = [];
    let arr2 = [];
  
    for (let j = 1; j <= Math.max(...b); j++) {
    function testA (num) {
        return (j % num) == 0
    }
    
    a.every(testA);
      
    if (a.every(testA) == true) {
        arr.push(j);
    }
    }
    
    for (let j = 0; j < arr.length; j++) {
        function testB (num) {
            return (num % arr[j] == 0);
        }
        
    b.every(testB); 
    
    if (b.every(testB) == true) {
        arr2.push(arr[j]);
    }
    }
    
    return(arr2.length);
  
  }
  
  
  
  
  console.log(getTotalX([2,4],[16,32,96]))