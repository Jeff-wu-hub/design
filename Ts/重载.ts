function func(arg:string):string;
function func(arg:number):number;
function func(arg:any):any {
    if(typeof arg == 'string'){
       console.log('传入一个字符串')
    }
    if(typeof arg == 'number'){
        console.log('传入一个数字')
    }

}
func(12)
/*
* 定义一个函数可以有不同种算法模式*/
