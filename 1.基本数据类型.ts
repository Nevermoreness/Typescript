/*
原始（基本）数据类型
1.布尔值：boolean
2.数值：number
3.字符串：string
4.特别的类型：void/undefined/null
5.任意值：any
6.联合类型:boolean|number|string
7.数组类型: arr[1,2,2,]
8.元组类型
9.枚举类型
*/

//布尔值：boolean
let b: boolean = true;

//数值类型：number
let num: number = 123;
num = NaN;
num = Infinity;

//字符串：string
let str: string = 'Hello World';

//特别类型
function fn(): void {
    console.log('fn()');
    //return undefined;
    //return null;
}

//undefined /null 是所有类型的子类型
let un: string = 'abc';
un = undefined;
un = null;

//any类型的变量可以赋任意类型的值
let any: any = 123;
any = 'abc'
any = true;

//any类型的变量可以使用任意属性和方法
let b1: number = 3;
//console.log(b1.length); 报错,数值类型没有length属性
let b2: any = 1;
console.log(b2.length);


//定义不指定类型的变量，定义时不赋值，相当于any类型
let b3;
b3 = 'abc';
b3 = 123;

//联合类型表示可以为多类型中的一种
let c1: number | string = 3;
c1 = 'asdf';

//类型断言，在变量上面加上‘(<类型>)’或者 变量 as 类型
function getLength(x: number | string) {
    if ((<string>x).length) {
        return (x as string).length
    } else {
        return x.toString().length;
    }
}


//数组类型
const names: string[] = ['a', 'b', 'c'];
const names2: Array<string> = ['a', 'b', 'c'];


//元组类型
//当添加越界元素时，它的类型会被限制为元组中每个类型的联合类型
let person: [string, number] = ['toom', 22];
person.push(23);
//person.push(true);报错 元组中没有boolean类型


//枚举类型
enum Days { Mon = 1, Tue, Wed, Thu, Fri, Sat, Sun }
console.log(Days.Sun, Days[0]);

function isWorkDay(day: Days) {
    switch (day) {
        case Days.Sat:
        case Days.Sun: return false;
        default: return true;
    }
}

const currentDay = Days.Wed;
console.log(isWorkDay(currentDay));