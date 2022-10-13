// inheritance between multiple class
// 1 .constructor function
// 2 . ES6 class
// 3 . Object.create()

/////////////////////
// Constructor function
///////////////////

// class 1
function Person(firstName,birthYear){
    this.firstName=firstName
    this.birthYear=birthYear
}

Person.prototype.calAge = function(){
    console.log(2022-this.birthYear)
}
const asfia= new Person("Asfia Hoseen", 2000)
asfia.calAge()
 // class 2
function Student(firstName,birthYear,department){
    Person.call(this,firstName,birthYear)
    this.department=department
}

Student.prototype.greet=function(){
    console.log(`Hello ${this.firstName}`);
}

//Linking prototype between class 1 and class 2
//  Student.prototype=Person.prototype  // don't do this

Student.prototype=Object.create(Person.prototype)
 const rafiul = new Student("Rafiul Islam Rafi", 1998,"CSE")
 console.log(rafiul)
 rafiul.calAge()




 //////////////////////////////////////
/// Es6 Class inheritance 
//////////////////////////////////////
class Player{
    constructor(nickName,jerseyName,rating){
        this.nickName=nickName;
        this.jerseyName=jerseyName
        this.rating= rating
    }
    greet(){
        console.log(`Hi , ${this.nickName}`)
    }
}

const messi = new Player("Messi", 10,10)
console.log(messi)

class Captain extends Player{
    constructor(nickName,jerseyName,rating,bandColor){
        super(nickName,jerseyName,rating)
        this.bandColor=bandColor;
    }
    playerRating(){
console.log(`${this.nickName} has ${this.rating} ratings`)
    }
}

const fabino = new Captain("Fabino",11,85,'red')

messi.greet()
fabino.greet()

fabino.playerRating()


//////////////////////////
// Object.create inheritance 
//////////////////////////

const personProto={
    calAge(){
        console.log(2022-this.birthYear)
    },

    getParam(firstName,birthYear){
        this.firstName=firstName
        this.birthYear=birthYear
    }
}

const jessica = Object.create(personProto)

jessica.getParam("jessica",1990)
console.log(jessica)
jessica.calAge()

// New Proto

const StudentProto= Object.create(personProto)

const natasa = Object.create(StudentProto)

natasa.getParam("Natasha",1992)

natasa.calAge()
