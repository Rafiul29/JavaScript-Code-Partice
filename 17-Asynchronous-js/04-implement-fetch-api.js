//188


// const BASE_URL='https://jsonplaceholder.typicode.com'
// fetch(`${BASE_URL}/users/1`)
//     .then(res=>{
//         return res.json()
//     })
//     .then(data=>{
//         console.log(data)
//     })
//     .catch(e=>{
//         console.log(e.messge)
//     })

// function getRequest(url){
//    return new Promise((resolve,reject)=>{
//     const xhr= new XMLHttpRequest()
//     xhr.open ('get',url)

//     xhr.onreadystatechange=function(e){
//         if(xhr.readyState==4){
//             if(xhr.status==200){
//                 let response= JSON.parse(xhr.response)
//                 resolve(response)
//             }else{
//                 reject(new Error("Error message"))
//             }
//         }
//     }
//     xhr.send()
//    })
// }
// getRequest(`${BASE_URL}/users/1`)
//     .then(data=>{
//         console.log(data)
//     })
//     .catch(e=>{
//         console.log(e.message)
//     })

// 189. Promise API in Javascript

    // const delay=s=> new Promise(resolved=>setTimeout(resolved,s*1000))
    // delay(5).then(()=>console.log('5se'))

    // let p2=new Promise(resolve=>{
    //     setTimeout(resolve,5000,"One")
    // })
    // let p3=new Promise(resolve=>{
    //     setTimeout(resolve,10000,"Two")
    // })
    // let p4=new Promise(resolve=>{
    //     setTimeout(resolve,1200,"Three")
    // })

    // let promiseArray =[p2,p3,p4]

    // Promise.all(promiseArray)
    // .then((arr)=>{
    //     console.log(arr)
    // })

    // Promise.race(promiseArray)
    // .then((arr)=>{
    //     console.log(arr)
    // })

