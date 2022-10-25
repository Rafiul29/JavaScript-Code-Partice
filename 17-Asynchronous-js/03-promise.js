// 187 introduction promise


// let p1= new Promise((resolved,reject)=>{
// setTimeout(resolved,5000,"One")
// })
// console.log(p1)

// p1.then(value=>console.log(value))
// .catch(e=>console.log(e.message))

function getIphone(isPassed){
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            if(isPassed){
                resolved("I have got an I phone")
            }
            else{
                reject(new Error("You have failed"))
            }
        },2000)
    })
}

getIphone(false)
    .then((res)=>{
        console.log(res)
    }).catch((e)=>{
        console.log(e.message)
    })
console.log(getIphone(true))