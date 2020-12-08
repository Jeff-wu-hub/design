var Enum;
(function (Enum) {
    Enum[Enum["no"] = 0] = "no";
    Enum[Enum["yes"] = 1] = "yes";
})(Enum || (Enum = {}));
/*\
*枚举类型参数定义一个后面的会自动增长，方便使用。，可以作两个判定
* info获得的为属性值，传入的为枚举的键*/
function func(agr, info) {
    console.log(agr + '\n' + info);
}
func('这是一个测试枚举', Enum.yes);
