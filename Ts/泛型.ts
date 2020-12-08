function func<T>(arg:T): T {
    return arg
}
/*
* 1、泛型使用T表示可以指定所有类型，可以解决返回类型与参数不同的问题*/
console.log(func('name'))
