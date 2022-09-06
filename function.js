// Argument Object ...............

// if so how many argument will we give no specifics then use arguments property function argument property all value traverse  

//Like  argument Neither object nor array

// argument two property length.. and callee..

function test(a,b,c){
    console.log(arguments)
    for(let i=0; i<arguments.length; i++){
        console.log(arguments[i])
    }
}

test(10,20,30)
test(10,20,30,40)