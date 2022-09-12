// var arr = [1,-2,4,2,4,2,5,7,5,8,67,4,5,4,4,33,5,-5,-9,0,3,2,5,4,5,5,4,3]
//  =============arr sort....
// arr.sort(function(a,b){
//     if(a>b){
//         return 1;
//     }else if(a<b){
//         return -1
//     }else{
//         return 0;
//     }
// })

// console.log(arr)


// object sorted...........


person =[
    {
        name:"A",
        age:29
    },{
        name:"B",
        age:32
    },
    {
        name:"C",
        age:23
    },
    {
        name:"D",
        age:34
    }
]

person.sort(function(a,b){
    return a.age-b.age
})
console.log(person)