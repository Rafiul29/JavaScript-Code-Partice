//pass by value vs pass by reference
//call by value vs call by reference
 
n=10;

function number(n){
    n=100+n;
    console.log(n)
}
number(n)
console.log(n)


var ob={
    a:10,
    b:20
}

function obj(ob){
    ob.a=ob.a+10;
    ob.b=ob.b+20;
    console.log(ob);
}

obj(ob);
console.log(ob)