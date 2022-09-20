
"use strict";
//  value vs reference..........

const flight= "AAJ@#";
const rafiul ={
    name:"Rafiul Islam",
    passPort: 32898932,
}

const check= function(flightName, passenger){
        flightName = "L656GH";
        passenger.name= "Mr "+ passenger.name
    if(passenger.passPort===32898932){
        console.log("check in");
    } else{
        console.log("Wrong Passport");
    }
}

check(flight,rafiul)   
console.log(rafiul)

// js does not passing by reference only passing value 

// 