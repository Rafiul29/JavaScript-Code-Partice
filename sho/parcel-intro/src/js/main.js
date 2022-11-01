// AJAX - Asynchronous javaScript and XML

// const wrapper =document.querySelector('.country-wrapper')

// const btn= document.querySelector('.btn');

// btn.addEventListener('click',function(){
//     const input=document.querySelector('.inputcountry')
// const inputVale = input.value;
//     const resquest= new XMLHttpRequest()
//     resquest.open('GET',`https://restcountries.com/v2/name/${inputVale}`)
//     resquest.send()
    
//     resquest.addEventListener('load',function(){
//         const [data] = JSON.parse(this.responseText)
//         renderData(data)
//     })
// })

// function renderData(country){
//     console.log(country)
//     const html=`
//     <div class="country">
//                 <h1>${country.name}</h1>
//                 <p>${country.population}</p>
//                 <p>${country.capital}</p>
//                 <p></p>
//             </div>
//     `;
//     wrapper.insertAdjacentHTML('afterbegin',html);
// }






// const user =document.querySelector('.user-wrapper')

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     if (!response.ok)
//           throw new Error(`User not found ${response.status}`)
//           return response.json();
//     }).then(data=>{
//     renderData(data)
// })
// .catch(error=>{
//     renderError(error.message)
// })

// function renderData(data){
//     data.forEach((data) => {
//         const html=`
//         <div class="card">
//             <p>Name: ${data.name}</p>
//             <p>User Name : ${data.username}</p>
//             <p>Email: ${data.email}</p>
//             <p>Address : ${data.address.city}</p>
//             <p>Phone No : ${data.phone}</p>
//         </div>
//         `;
//         user.insertAdjacentHTML('beforeend',html)
//     });
// }

// function renderError(error){
//     user.insertAdjacentHTML('afterbegin',error)
// }





// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response=>{
//     if(!response.ok) throw new Error("Something went worng")
//     return response.json()
    
// }).then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err.message)
// })


// const btn = document.querySelector('.btn')


// btn.addEventListener('click',function(){
//     const userID=document.querySelector('.user-id').value;
//     const title =  document.querySelector('.title').value;
//     const body=document.querySelector('.body').value;

//     const data={
//         userID:userID,
//         title:title,
//         body:body
//     }
   
//     fetch('https://jsonplaceholder.typicode.com/posts',{
//         method:'POST',
//         headers:{
//             'Content-type':'application/json'
//         },
//         body:JSON.stringify(data)
//     }).then(res=>{
//         return res.json()
//     }).then(data=>{
//         console.log(data)
//     })
   
 
// })

async function fetchData(){
 try{
    const response= await  fetch('https://jsonplaceholder.typicode.com/posts');
    if(!response.ok) throw new Error("someting went worng")
  const data = await response.json()
  console.log(data)
 }catch(err){
    console.log(err.message)
 }
}
fetchData()