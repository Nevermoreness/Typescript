/*
函数的类型
    1.函数声明
    2.函数表达式
    3.可选参数
    4.形参默认值
    5。剩余参数
*/

//函数声明
function fn1(s: string, n: number): number {
    return 13;

}

//函数表达式
const fn2 = function (s: string, n: number): string {
    return 'abc';
}

//箭头函数
const fn6 = (s: string, n: number): string => {
    return 'abc'
}

//可选参数
function fn3(s: string, n?: number) {
    console.log('fn3()', s, n);
}
fn3('123', 123);
fn3('12');

//默认参数
function fn4(s: string, n: number = 4) {
    console.log('fn4()', s, n);
}

//剩余参数
function fn5(s: string, ...args: number[]) {

}
fn5('abc', 1, 1, 2);