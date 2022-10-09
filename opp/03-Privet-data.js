
//163 Privet Data With Symbol in js
// const _redius=Symbol()
// const _name=Symbol()
// const _draw=Symbol()
// class Circle{
//     constructor(redius,name){
//         this[_redius]=redius
//         this[_name]=name
//     }
//     [_draw](){
//         console.log("Drawing............. ")
//     }
// }

// let c1 = new Circle(2,"read")
// console.log(c1)

// console.log(Object.getOwnPropertyNames(c1))
// console.log(Object.getOwnPropertySymbols(c1)[0])

//164 privet Propertices with weakMap in js
const _radius= new WeakMap()
const _name = new WeakMap()
const _resize= new WeakMap()
class Circle1{
    constructor(radius, name){
        this.size=100
        _radius.set(this,radius)
        _name.set(this,name)
        _resize.set(this,()=>{
            console.log(this.size)
        })
    }
    draw(){
        console.log(_radius.get(this), _name.get(this))
        _resize.get(this)()
    }
}

let c2= new Circle1(3,"Cred")
console.log(c2)
c2.draw()