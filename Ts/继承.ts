class a {
    name:string
    constructor(name) {
        this.name = name
    }
}
class B extends a{
}
let b = new B('lily')
console.log(b.name)

/*
* 继承原型类的所有方法及变量*/
