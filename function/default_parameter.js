"use strict";

// default parameter...

const bookings =[];

const createBooking = function(roomNum,numGuest=1, price=500*numGuest){
    const booking={
        roomNum,
        numGuest,
        price
    };
    bookings.push(booking);
}

createBooking("A2s",2,100);
createBooking("A2s1",2,100);
createBooking("DAW55");
createBooking("BBB",4);

createBooking("WWWq",undefined,400);

console.log(bookings);