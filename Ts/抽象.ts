abstract class A {
    public name = '123'
    abstract func():string
}
class B extends A{
    func(): string {
        return this.name
    }
}
const b = new B()
console.log(b.func())

/*、
* 只能作为继承的基类，里面内容必须实现*/
