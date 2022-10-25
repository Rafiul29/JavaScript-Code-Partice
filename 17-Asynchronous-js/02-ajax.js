
//184  .. Ajax with call back in js

// const xhr = new XMLHttpRequest()
// xhr.open('get','https://jsonplaceholder.typicode.com/users')

// xhr.onreadystatechange= function(e){
//     if(xhr.readyState===4){
//         if(xhr.status===200){
//             let users = JSON.parse(xhr.response)
//             console.log(users)
//         }else{
//             console.log(xhr.status)
//         }
//     }
// }
// xhr.send()


// function getRequest(url,callback){
//     const xhr= new XMLHttpRequest()
//     xhr.open ('get',url)

//     xhr.onreadystatechange=function(){
//         if(xhr.readyState==4){
//             if(xhr.status==200){
//                 let response= JSON.parse(xhr.response)
//                 callback(null, response)
//             }else{
//                 callback(xhr.status,null)
//             }
//         }
//     }
//     xhr.send()

// }

// getRequest('https://jsonplaceholder.typicode.com/users',(err,res)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(res)
//        res.map(r=>console.log(r.name))
//     }
// })



const xhttp = new XMLHttpRequest();
  xhttp.open("GET","https://jsonplaceholder.typicode.com/users");
  xhttp.onload = function() {
    if(xhttp.readyState==4){
        if(xhttp.status==200){
            let response =JSON.parse(xhttp.response)
            console.log(response)
        }
    }
  }
  xhttp.send()