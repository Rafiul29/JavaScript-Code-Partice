

// Constructor function

// function Person(nickName,birthYear){
//     this.nickName=nickName
//     this.birthYear=birthYear

//     //never do 
//     // this.calAge=function(){
//     //     console.log(2022-birthYear)
//     // }
// }

// Person.prototype.calAge= function(){
//     console.log(2022-this.birthYear)
// }
// const rafiul = new Person("Rafi",1998)
// console.log(rafiul)
// rafiul.calAge()






////////////////////////////////////////////
//Es6 Class
///////////////////////////////////////////

// class Person{
//     constructor(fullName,birthYear){
//         this.fullName=fullName;
//         this.birthYear=birthYear
//     }
//     calAage(){
//         console.log(2022-this.birthYear)
//     }
//     greet(){
//         console.log(`Hello ${this.fullName}`)
//     }
    
// }

// const rafiul= new Person("Rafiul Islam Rafi", 1998)
// rafiul.calAage()
// rafiul.greet()

// console.log(Person.prototype== rafiul.__proto__)

class cinemaHall{
    constructor(movieName,seatCount){
        this.movieName=movieName
        this.seatCount=seatCount
        this.audience=[]
    }

// getter
    get ticketprice(){
        return this.seatCount*100
    }

    //setter
   set audienceCount(name){
        this.audience.push(name,this.movieName,this.seatCount)
    }

    static couponCode(){
        console.log("kbkb83hdu3b")
    }
}


const rafiul= new cinemaHall("Inception",10)
console.log(rafiul.ticketprice)
rafiul.audienceCount="rafi";            
console.log(rafiul)

cinemaHall.couponCode()




//////////////////////////////////
//object Create
//////////////////////////////////


const PersonProto={
    calAge(){
        console.log(2022-this.brithYear)
    }
}

const rafiul1 = Object.create(PersonProto)
PersonProto.brithYear=2000;
console.log(PersonProto)
PersonProto.calAge()





