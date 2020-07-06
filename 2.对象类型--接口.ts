/*
在TypeScript中，我们使用接口(InterFaces)来定义对象的类型
接口：在面向对象的语言中，是n个行为的抽象/描述，但是没有实现，由类去实现，在Ts中，接口也可以包含状态的描述
接口类型的对象：
    多/少了一些属性是不允许的
    可选属性：？
    只读属性：readonly
*/


/*
创建人的对象，需要对人的属性进行一定的约束
    id是number类型，必须有，只读
    name是string类型，必须有
    age是number类型，必须有
    sex是string类型，可没有
*/


interface iPerson {
    readonly id: number;
    name: string;
    age: number;
    sex?: string;

}


const person1:iPerson = {
    id: 1,
    name: 'damu',
    age: 12,
    sex: '女'
}

const person2:iPerson = {
    id: 2,
    name: 'damu',
    age: 12,
}



