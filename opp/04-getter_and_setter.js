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
    get radius(){
        return _radius.get(this)
    }
    set radius(v){
        _radius.set(this,v)
    }
    draw(){
        console.log(_radius.get(this), _name.get(this))
        _resize.get(this)()
    }
}

let c2= new Circle1(3,"Cred")
console.log(c2)
c2.radius=50
c2.draw()