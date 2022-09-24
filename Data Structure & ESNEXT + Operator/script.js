"use strict"

const restaurant={
    name:"Barger house 420",
    location:"Dhak Puran Dhaka, Bangladesh",
    catagories:["Italian","Vegterian","Local","Organic"],
    starterMenu:[
        "Chicken Chees Burger",
        "Beef Burger",
        "Garlic Bread",
        "Italian Spicy Pasta",
        "Bagdadi shahi Biriyani",
        "Mexican Chill Chicken",
    ],
    mainMenu:["Burger","Pizaa","Pasta","Fajita","French Fries"],
    openinigHours:{
        sun:{
            open:10,
            close:22
        },
        fri:{
            open:9,
            close:23
        },
        wed:{
            open:11,
            close:22
        }
    },
    order:function(staterIndex,mainIndex){
        return [this.starterMenu[staterIndex],this.mainMenu[mainIndex]];        
    },

    orderDelivery:function({
        starterIndex=0,
        mainIndex=0,
        time="12:00PM",
        address="Unknown"
    }){
        console.log(`${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} there will be deliverd to ${address} at ${time}`);
    },
    orderBurger:function(ing1,ing2,ing3){
        console.log(`Here is your delicious with 
        ${ing1} ,${ing2} , ${ing3}
        `)
    },

    orderPizza:function(mainTng,...otherIng){
        console.log(mainTng);
        console.log(otherIng)
    }

}













// Map....

// const rest = new Map()
// rest.set('name',"pizza Hut");
// rest.set(1, "Dhaka")
// rest.set(2,"chittagong");
// rest.set("catagories",['italin','pizzzarian','oranic']).set("open",10).set("close",22).set(true,"we are open").set(false,'we are close')


// console.log(rest)

// console.log(rest.get('name'))
// console.log(rest.get(true))
// console.log(rest.get(1))

// const time=12.999;
// console.log(rest.get(time>rest.get('open') && time < rest.get('close')))

// rest.set([1,2],"Array")
 

// const lan = new Map([
//     [1,"C"],
//     [2,"C++"],
//     [3,"Java"]
// ])

// for(const [key,value] of lan){
//     console.log(key, value)
// }

// // Object to map

// const hours =new Map(Object.entries(restaurant.openinigHours))
// console.log(hours)

// // map to array
// console.log(...lan)
// console.log([...lan.keys()])
// console.log([...lan.values()])



// sets


// const food= new Set([
//     "pizza" , "Burger", "pizza","Burger"
// ])

// console.log(food.size)
// console.log(food.has("pizza"))
// food.add("noodles")
// food.delete("pizza")
// food.clear()
// console.log(food)


// const arr =[10,12,10,23,23,15,16,19,20,3]

// const uniqueArray=[...new Set([arr])]
// console.log(uniqueArray)


// Looping object.................

// property names (key)
// property values
// property entries(key,value)
// const propertices = Object.keys(restaurant.openinigHours);
// console.log(propertices)

// for(const day of propertices){
//     console.log(day)
// }
// const values =Object.values(restaurant.openinigHours)
// console.log(values)
// for(const day of values){
//     console.log(day)
// }

// const entries = Object.entries(restaurant.openinigHours);
// console.log(entries)
// for(const [key,value] of entries){
//     console.log(key,value)
// }



// optional chaining

// console.log(restaurant?.openinigHours?.sat?.open)
// console.log(restaurant?.openinigHours?.fri?.open)

// const days =['mon','tue','wed','thu','fri','sat','sun'];

// for( const day of days){
//     const open = restaurant.openinigHours[day]?.open ?? "off-day"
//     console.log(open)
// }

// console.log(restaurant.order?.(1,0))
// console.log(restaurant.orderPizza?.(1,1))


// for of loops
// for of  loops  is not index  
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
// //console.log(...menu.entries())//key and value
// for(const [key, value] of menu.entries()){
//     console.log(key,value)
// }






// logical assignment operator................
// const rest1={
//     name: "Pizza club",
//     guests:0,
// };

// const rest2={
//     name: "Food Island",
//     ownner: "rafiul"
// };

// rest1.guests=rest1.guests || 10

//rest2.guests=rest2.guests || 10
// rest1.guests ||=10;
// rest2.guests ||=10


// rest1.guests ??=10;
// rest2.guests ??=10

// rest2.ownner &&= "Rafiul"
// console.log(rest2.ownner)
// console.log(rest1.guests)
// console.log(rest2.guests)




// Nullish coalescing operator.....
// Nullish value : null, undefined (not 0 and ' ')
// restaurant.gust=0;
// const gusts = restaurant.gust ?? 20;
// console.log(gusts)




// Short circuiting.........

// or operator..

// console.log(3 || "rafi")
// console.log(""|| "sbanrina")
// console.log(false|| 0)
// console.log(undefined || null)
// console.log(undefined || 0 || "" || "Rafi" ||23||null)
// console.log(false || true)
// console.log(0 || '')


// restaurant.gusts=30;
// const gusts = restaurant.gusts ? restaurant.gusts :20
// console.log(gusts)

// const gusts2 = restaurant.gusts || 20;
// console.log(gusts2)
// restaurant.founder="rafiul"

// const founder= restaurant.founder || "Rahul";
// console.log(founder)

// AND

// console.log(0 && "ehhnj")
// console.log(8 && "Rafiul")
// console.log("Ripa" && "Alomgir" && null && 0)

// console.log(false && true)
// console.log("Rakib" && 12 && " " && 23 && true && undefined)
// console.log(' ' && 23 && null)

// if(restaurant.orderPizza){
//     restaurant.orderPizza("Mushroom", "onions", "tomato")
// }

// restaurant.orderPizza &&   restaurant.orderPizza("Mushroom", "onions", "tomato");




// rest pattern and parameter
//1.destructuring
// spread beacuse on right side of

// const arr=[1,2,3,4,...[19,20]]
// console.log(arr)

// const [a,b,...others]=arr
// console.log(a,b,others)

// const [burger,pasta, ...otherFood]=[...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(burger,pasta,otherFood)
// // object rest
// const {fri:friday, ...otherDays}=restaurant.openinigHours;
// console.log(friday,otherDays)


// // function

// const add=function(...number){
//     console.log(number)
//     let sum =0;
//     for(let i=0; i<number.length; i++){
//         sum+=number[i]
//     }
//     console.log(sum)
// }

// add(1,2)
// add(1,2,4)
// const num=[10,20,30]
// add(...num)


// restaurant.orderPizza("Musroom","onions","others")


// copying object ....


// const newRestaurant={...restaurant,founder:"Rafiul"}
// newRestaurant.name="Burger House"
// console.log(newRestaurant)
// console.log(restaurant)

// const res2=Object.assign({},restaurant)
// res2.name="Pizza House"
// console.log(res2)




// const ingredients=["Tomato","chicken","Lettuce"]

// restaurant.orderBurger(...ingredients)
// Spread operator


// const arr=[1,2,4,5,3,2,4,67,8,4,3]
// console.log(arr)
// const newArray=[11,23, ...arr]
// console.log(newArray)
// const newMenu =[...restaurant.mainMenu,"Noodles","Ramen"]
// console.log(newMenu)


// // copy array 
// const mainMenuCopy=[...restaurant.mainMenu]
// console.log(mainMenuCopy)

// // joinArray...
// const joinArray=[...restaurant.mainMenu,...restaurant.starterMenu]

// console.log(joinArray)


// iterables:array,string,Maps,sets, not object





// Object Destructuring ...............

// const {catagories,starterMenu}=restaurant;


// console.log(catagories,mainMenu,starterMenu);


// const {name:restaurantName,location:restaurantLocation,openinigHours:hours}=restaurant;
// console.log(restaurantName,restaurantLocation,hours)

// const{sun:sunday,wed:wednesday,fri:friday}=restaurant.openinigHours;

// console.log(sunday,wednesday,friday);

// dafult value
// const {main=[],mainMenu}=restaurant;
// console.log(main,mainMenu)

// mutating variables

// mutating variables
// let a=100;
// let b=200;

// const obj={
//     a:20,
//     b:30
// };
// ({a,b}=obj)
// console.log(a,b)


// nested Object

// const student={
//     friends: {
//         first:"rafiul",
//         second:"Islam"
//     }
// }

// // const {first,second}=student.friends
// const {friends:{first,second}}=student
// console.log(first,second)



// restaurant.orderDelivery({
//     starterIndex:2,
//     mainIndex:0,
//     time: '06:00PM',
//     address:"Kushtia"

// })
// restaurant.orderDelivery({
//     starterIndex:1,
//     address:"Kushtia"

// })
// .............Array destructuring .............................

// const arr=[1,2,3]
// const [x, y ,z]=arr;
// console.log(x,y,z)

// const [main,secondary] = restaurant.catagories;

// console.log(main,secondary)


// let [food1,,,,food2]= restaurant.mainMenu;
// console.log(food1,food2)
// // switching variable................


// let first = 10;
// let second =20;

// [first,second]=[second,first]
// console.log(first,second)
// // let temp=first;
// // first=second
// // second=temp;
// // console.log(first,second)

// // [main, secondary] = [secondary, main];
// // console.log(main, secondary);


// const [firstorder,secondOrder]=restaurant.order(0,2);
// console.log(firstorder,secondOrder)

// // nested destructuring..............

// const nested =[2,4,[8,9]];

// const [i,j,[k,l]]=nested
// console.log(i,j,k,l)


// string 

// const name= "Rafiul Islam";
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())



// function fixCap(name){
//     const lowerCase = name.toLowerCase();
//     const correctName = lowerCase.at(0).toUpperCase()+lowerCase.slice(1)
//     return correctName;
// }
// console.log(fixCap("rafiul"))
// console.log(fixCap("rakibul islam"))
// console.log(fixCap("sHamim"))


// function normalizationEmail(email){
// const normalizationEmail= email.toLowerCase().trim();
// return normalizationEmail;
// }

// console.log(normalizationEmail(" RafiulIslam@gmail.Com"));



// replace 
// const jutaPrice = "500TK"
// const priceUsd = jutaPrice.replace("TK", "$")
// console.log(priceUsd)

// const warning = "Beware of Trojan.86! Trojan.86"
// const warningCorrect = warning.replaceAll('.', "v")
// //Es2022;

// const m = warning.replace(/Trojan/g,'v');
// console.log(m);
// console.log(warningCorrect);


// Repeat ......
const message = "Bad weather"
console.log(message.repeat(10))


// split and join...

const name = "Rafiul Islam Rafiu";
const splitName = name.split(" ")
const joinName = splitName.join("-")
console.log(joinName)
