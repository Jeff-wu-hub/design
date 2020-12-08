enum Enum {
    no = 0,
    yes
}
/*\
*枚举类型参数定义一个后面的会自动增长，方便使用。，可以作两个判定
* info获得的为属性值，传入的为枚举的键*/
function func(agr:string,info:Enum) {
    console.log(agr+'\n'+ info)
}
func('这是一个测试枚举',Enum.yes)
