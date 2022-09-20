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
    }

}


// copying object ....


// const newRestaurant={...restaurant,founder:"Rafiul"}
// newRestaurant.name="Burger House"
// console.log(newRestaurant)
// console.log(restaurant)

const res2=Object.assign({},restaurant)
res2.name="Pizza House"
console.log(res2)







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