//泛型是指在定义函数，接口或者类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性

function createArray(length: number, value: any): Array<any> {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x');//['x','x','x']



//这里用T来类型占位
function createArray2<T>(length:number,value:T):Array<T>{
    let result:Array<T>=[];
    for (let i=0;i<length;i++){
        result[i]=value;
    }
    return result;
}

createArray2<number>(3, 123);//['123','123','123']