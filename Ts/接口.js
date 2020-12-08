function func(persion) {
    console.log(persion.name + '\n' + persion.age);
}
/*
* 1、接口定义为一个规范，命令传入参数都是这个类型*/
func({
    name: 'lily',
    age: 18
});
