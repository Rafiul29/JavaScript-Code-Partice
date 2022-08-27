// // 01. What is type conversion and type coercion in JavaScript?

// // Ans: Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.

// //const value1 = '5';
// // const value2 = 9;
// // let sum = value1 + value2;

// // console.log(sum);

// // 02.What is the Difference Between if and if else?

// // If Statements

// // The condition inside the parentheses of the IF statement is evaluated. If the result of the test condition is true, then the instructions inside the IF body are executed. If the result of the condition is false, then the statements are skipped.

// // if (test condition) {

// //     //statements executed if the test condition is true
// //     }

// // If-else Statements

// // Notice that the difference between IF statement and IF-ELSE statement is that there's an additional ELSE attached to it. The IF statement is executed if the statement inside the test condition evaluates to true; otherwise the statements inside the ELSE block is executed.

// // 03. What is the difference between null and undefined types of JavaScript?

// // In JavaScript, undefined is a type, whereas null an object.

// // undefined

// // It means a variable declared, but no value has been assigned a value.

// // For example,

// // var demo;
// // alert(demo); //shows undefined
// // alert(typeof demo); //shows undefined

// // null

// // Whereas, null in JavaScript is an assignment value. You can assign it to a variable.

// // For example,

// // var demo = null;
// // alert(demo); //shows null
// // alert(typeof demo); //shows object

// // 04 Write a javascript program to perform these tasks below:

// //   A) answer.........

// {const celsius=20;
// }
// // B) Answer
// {
// const  C=98;

// const fahrenheit = C * 1.8 +32;

// const result= `the fahrenheit temperature ${fahrenheit}`;

// console.log(result);}

// // C) answer

// const temperature = 100;
// if(temperature>=86){
//     console.log("TURN ON the AC.")
// }else{
//     console.log("nothing to do");
// }

// // 5 Rafiq and Karim are trying to compare their BMI (Body Mass Index), which is

// // A) Answer

// {
//     const mass = 30;
//     const height = 2.3;
//     const BMI = mass/ (height**2);
//     console.log(`Body Mass Index ${BMI}`);
// }

//  function hybrid(a, b, c, d, x, y) {
// const max= (a+d) * (b+c);
// const min =x+y;
// const def= 2*(max-min)*max;
// const result = defFinder(def);
// function defFinder(def){
//     const dx=[1,-1];
//     const dy =[ 1,1];
//     dx.push(def);
//     const dz = dx.concat(dy)
//     return dz;
// }
//  return result;

// }

// const a = 1;
// const b = -2;
// const c = -1;
// const d = 2;
// const x = 3;
// const y = -3;
// // console.log(hybrid(a, b, c, d, x, y));
// const multiPro =(a)=>(b)=>(c)=>a*b*c;
// console.log(multiPro(10)(2)(2));

function array(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function diffarray(sum, array) {
  let newarray = [];
  for (let i = 0; i <= array.length - 1; i++) {
    newarray.push(sum - array[i]);
  }
  return newarray;
}

const Lambda=a=>b=>c=>d=>e=>f=>a+b+c+d+e+f;

const sum = array([1, 2, 4, 5, 6, 6]);
console.log(sum);
const newarray=diffarray(sum,[1, 2, 4, 5, 6, 6]);
console.log(newarray)
const LambdaResult =Lambda(newarray[0])(newarray[1])(newarray[2])(newarray[3])(newarray[4])(newarray[5])
console.log(LambdaResult)