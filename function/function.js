// Argument Object ...............

// if so how many argument will we give no specifics then use arguments property function argument property all value traverse  

//Like  argument Neither object nor array

// argument two property length.. and callee..

// function test(){
//     console.log(arguments)
//     for(let i=0; i<arguments.length; i++){
//         console.log(arguments[i])
//     }
// }

// test(10,20,30)
// test(10,20,30,40)


// function test(a,b,c){
//     let sum=0;
//     for(let i=0; i<arguments.length; i++){
//        sum +=arguments[i];
//     }
//     return sum;
// }

// const result = test(10,20,30)
// const result1 = test(10,20,30,40)
// console.log(result,result1)

// function person(name,email){
//     return{
//         name:name,
//         email: email
//     }
//     console.log("jdnjwn") // Unreachable code detected

// }

// console.log("rafiul Islam", "rafiulislam4472@gmail.com")




// =========inner function javascript=============
// nested function...........
// function something(greet,name){
//     function getFirstName(){
//         if(name){
//         return name.split(' ')[0]
//         }else{
//             return ''
//         }
       
//     }
//     var mesages=greet + " " + getFirstName()
//     console.log(mesages)
// }


// something("Good Morning", "Rafiul islam")


// ======scope===========
let a=40;
function x(){
    function y(){
        let y=20
        console.log(y)
    }
    console.log(a)
    y()
    
}

x()