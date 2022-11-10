//190. Async Await in Javascript 


// async function getData() {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts");

//     let data = await res.json();
//     console.log(data);
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// getData();


let promises = [Promise.resolve(1),Promise.resolve(2),Promise.resolve(3)]

async function promiseAll(){
  let result= await Promise.all(promises)
  console.log(result)
}

promiseAll()

