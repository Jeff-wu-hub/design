function func(arg) {
    if (typeof arg == 'string') {
        console.log('传入一个字符串');
    }
    if (typeof arg == 'number') {
        console.log('传入一个数字');
    }
}
func(12);
