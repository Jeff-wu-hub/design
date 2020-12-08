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
