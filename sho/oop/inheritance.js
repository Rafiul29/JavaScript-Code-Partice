// // inheritance between multiple class
// // 1 .constructor function
// // 2 . ES6 class
// // 3 . Object.create()

// /////////////////////
// // Constructor function
// ///////////////////

// // class 1
// function Person(firstName,birthYear){
//     this.firstName=firstName
//     this.birthYear=birthYear
// }

// Person.prototype.calAge = function(){
//     console.log(2022-this.birthYear)
// }
// const asfia= new Person("Asfia Hoseen", 2000)
// asfia.calAge()
//  // class 2
// function Student(firstName,birthYear,department){
//     Person.call(this,firstName,birthYear)
//     this.department=department
// }

// Student.prototype.greet=function(){
//     console.log(`Hello ${this.firstName}`);
// }

// //Linking prototype between class 1 and class 2
// //  Student.prototype=Person.prototype  // don't do this

// Student.prototype=Object.create(Person.prototype)
//  const rafiul = new Student("Rafiul Islam Rafi", 1998,"CSE")
//  console.log(rafiul)
//  rafiul.calAge()




//  //////////////////////////////////////
// /// Es6 Class inheritance 
// //////////////////////////////////////
// class Player{
//     constructor(nickName,jerseyName,rating){
//         this.nickName=nickName;
//         this.jerseyName=jerseyName
//         this.rating= rating
//     }
//     greet(){
//         console.log(`Hi , ${this.nickName}`)
//     }
// }

// const messi = new Player("Messi", 10,10)
// console.log(messi)

// class Captain extends Player{
//     constructor(nickName,jerseyName,rating,bandColor){
//         super(nickName,jerseyName,rating)
//         this.bandColor=bandColor;
//     }
//     playerRating(){
// console.log(`${this.nickName} has ${this.rating} ratings`)
//     }
// }

// const fabino = new Captain("Fabino",11,85,'red')

// messi.greet()
// fabino.greet()

// fabino.playerRating()


// //////////////////////////
// // Object.create inheritance 
// //////////////////////////

// const personProto={
//     calAge(){
//         console.log(2022-this.birthYear)
//     },

//     getParam(firstName,birthYear){
//         this.firstName=firstName
//         this.birthYear=birthYear
//     }
// }

// const jessica = Object.create(personProto)

// jessica.getParam("jessica",1990)
// console.log(jessica)
// jessica.calAge()

// // New Proto

// const StudentProto= Object.create(personProto)

// const natasa = Object.create(StudentProto)

// natasa.getParam("Natasha",1992)

// natasa.calAge()



// var groupAnagrams = function(strs) {
//     let obj={}
    
//     for(let i of strs){
//         let key= i.split("").sort().join("")
//       console.log(key)
        
//         if(!obj[key]){
//             obj[key]=[i]
            
   
//         }else{
//             obj[key].push(i)
//         }
//     }
    
//    console.log(Object.values(obj)) 
// };

// groupAnagrams(["eat","tea","tan","ate","nat","bat"]
// )



// var removeNthFromEnd = function(head, n) {
//     //let arr=[];
// // for(let i=0; i<head.length; i++){
// //     if(i===n+1){
// //         continue;
// //     }else{
// //         arr.push(head[i])
// //     }
// // }
//         const arr = head.splice(n+1,1)

//    console.log(head)
// };

// removeNthFromEnd([1,2,3,4,5],2)


// var removeDuplicates = function(nums) {
//     let unique =nums.sort()
//     let set=[...new Set(unique)];
//     console.log(set);
// };


// removeDuplicates([1,1,2])


// var plusOne = function(digits) {
//   let d = (parseInt(digits.join(''))+1).toString()
//   let b= d.split('').map(function(item){
//         return parseInt(item)
//   })
//   console.log(b)
// };

// plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
//     )



// var plusOne=function(digits){
   
//     let answer="";
//     digits.forEach(element => {
//         answer=answer+element.toString();
//     });
//     answer= (parseInt(answer)+1).toString();
// console.log(answer)
//   let result=[];
//   for(let i=0; i<answer.length;i++){
//      result.push(parseInt(answer[i]))
//   }
//   console.log(result)
// }

// plusOne([1,2,4,5,5,6])




var fourSum = function(nums, target) {
  let result=[]
  numslength= nums.length;
  for(let a=0;a<numslength; a++){
    for(let b=0+a; b<numslength;b++){
      for(let c=0+b; c<numslength;c++){
         for(let d=0+c; c<numslength;d++){
         if(nums[a] + nums[b] + nums[c] + nums[d] == target){
           console.log([nums[a] , nums[b] , nums[c] , nums[d]])
        }
        }
       }
    }
  }
  console.log(result)
};

fourSum([1,0,-1,0,-2,2],0)