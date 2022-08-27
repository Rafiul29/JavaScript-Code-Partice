
// 1 to 100 odd number print 

// function oddNumber(a,b){
//     let oddNumberArray=[];
//     for(let i=a; i<=b; i++){
//         if(i%2 !=0){
//             oddNumberArray.push(i)
//         }
//     }
//     return oddNumberArray;
// }
// console.log(oddNumber(1,100))





// Leap year or not leap year;

// const leapYear=(year)=>{
//     let result;

//     if(year%400===0 ||(year%4===0 && year%100 !==0)){
//         result = `${year} is leap Year`;
//     }else{
//         result = `${year} is not leap Year`;
//     }
//     return result;
// }

// console.log(leapYear(2004))


// const  birthYearNitu= 1997;
// const birthYearRitu = 1995;
// const currentyear =2022;

// const ageNitu = currentyear - birthYearNitu;
// const ageRitu = currentyear - birthYearRitu;

// if(ageNitu<ageRitu){
//     console.log(`Ritu older than nitu ,ritu age is ${ageRitu}`)
// }else{
//     console.log(`Nitu younger than Rity" , nitu age is ${ageNitu}`)
// }

// function expression in array sum while loop

// const arraySum = function(arr){
//     let sum=0
//     let i=0;
//     while(i<arr.length){
//         sum += arr[i];
//         i++;
//     }
//     return sum;
// }

// const arr = [11, 27, 31, 45, 52, 61, 77, 84];
// console.log(arraySum(arr));




// const tumpaArray = [
//     "Tumpa",
//     "Rahman",
//     2022 - 1996,
//     "programmer",
//     ["Sumaiya", "Nimmi", "Riyad"],
//     true,
//   ];

// // Answer A)
//   for(let i=tumpaArray.length-1; i>=0; i--){
//     console.log(tumpaArray[i])
//   }
// // Answer B)

//   const templeteLiteral = `${tumpaArray[0]} is ${tumpaArray[2]} and she is ${tumpaArray[3]}. She has ${tumpaArray[4].length} friends, and ${tumpaArray[4][1]} is her best friend`

//   console.log(templeteLiteral);

// const evenYears=function(years){
//     let evenYearsArray =[];
//     for(let i=0; i<years.length; i++){
//         if(years[i]%2 !== 0){
//             continue;
//         }
//         evenYearsArray.push(years[i]);
//     }

//     return evenYearsArray;

// }
// const years = [1991, 1994, 1995, 1996, 1998];
// console.log(evenYears(years))



// const student={
//     fullName: "Rafiul Islam Rafi",
//     birthYear: 1998,

//     calculateAge:function(currentyear){
//         return currentyear-this.birthYear;
//     }
// }

// console.log(student.calculateAge(2022))

// const beginningAddArr2=(arr1,arr2)=>{

//     for(let i=arr1.length-1; i>=0; i--){
//         arr2.unshift(arr1[i]);
//     }
//     return arr2;
// }

// const arr1 = [23, 24, 32, 28, 26, 36, 21, 25];
// const arr2 = [88, 86, 96, 75];

// console.log(beginningAddArr2(arr1,arr2))


// function logCutter(fruit){
//     return  fruit*4;
// }

// function furnitureMaker(apple,banana){
//     const applePices= logCutter(apple);
//     const bananapices =logCutter(banana);

//     const juce = (applePices+bananapices)/3;

//     return `${juce} ltr. juce is ready using ${applePices} apple and ${bananapices} banana pices`
// }
// console.log(furnitureMaker(10,5))





// function oddNumber(a,b){
//     let oddNumberArray=[];
//     for(let i=a; i<=b; i++){
//         if(i%2 !==0){
//             oddNumberArray.push(i)
//         }
//     }
//     return oddNumberArray;
// }


// const lambdaFunction=a=>b=>c=>d=>e=>a+b+c+d+e;

// const  sumOddNumber = oddNumber(20,30);

// const result = lambdaFunction(sumOddNumber[0])(sumOddNumber[1])(sumOddNumber[2])(sumOddNumber[3])(sumOddNumber[4]);
// console.log(result)





