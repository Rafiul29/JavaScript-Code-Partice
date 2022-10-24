// let n=10

// if(n>5){
//     throw new Error("N is Greater than 5");
// }


//170... Error handling with if else in javascript..

// function changeToInt(v){
//     let result= Number.parseInt(v)
//     console.log(result)
//     if(!result){
//         return "Please Provide a value which is able convert in integer"
//     }
//     return result;
// }

// let result= changeToInt("eeee38393993.1eeqe")
// console.log(result)




// 171 .... Error Handling Try Catch in js

// function makeWords(text){
//     try{
//         let str= text.trim()
//         let words=str.split("")
//         return words
//     }catch(e){
//         // console.log(e.message)
//         console.log("Please provide the vaild string")
//     }
// }
// const words = makeWords(87)
// console.log(words)


// 172 Throwing an Error in js

// function result(){
//     try{
//         console.log("line one")
//         console.log("line 2")
//         throw new Error("Error")
//         console.log("line 3")
//     }catch(e){
//         console.log(e.message)
//     }
// }
// result()

// 173 finally block
// try{
//     console.log("line one")
//     console.log("line 2")
//     throw new Error("Error")
//     console.log("line 3")
// }catch(e){
//     console.log(e.message)
// }finally{
//     console.log("i am finally block")
// }


//174 optional catch Binding in js

// try{
//     console.log("line one")
//     console.log("line 2")
//     throw new Error("Error")
//     console.log("line 3")
// }catch{
//     console.log("this is a optional cath error")
// }finally{
//     console.log("i am finally block")
// }


//175 custom Error
class CustomError extends Error{
    constructor(msg){
        super(msg)
        if(Error.captureStackTrace){
            Error.captureStackTrace(this,CustomError)
        }
    }
}

try{
    console.log("line one")
    console.log("line 2")
    throw new CustomError("Error")
    console.log("line 3")
}catch(e){
    console.dir(e)
    console.log("this is a custom error")
}finally{
    console.log("i am finally block")
}
