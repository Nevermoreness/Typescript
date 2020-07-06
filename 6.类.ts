/*
TypeScript中类的用法
1.访问修饰符
    public：任何地方都可见，默认是public
    private：只在类内部可见
    protected：类内部或者子类中可见
2.readonly
    只能通过构造方法赋值一次
3.抽象类
    可以包含抽象方法
    不可以有实例
*/

class A {
    m1: string;
    public readonly m2: string;
    protected m3: string;
    private m4: string;

    constructor(m1, m2, m3, m4) {
        this.m1 = m1;
        this.m2 = m2;
        this.m3 = m3;
        this.m4 = m4;
    }

    toString() {
        return `m1=${this.m1}--m2=${this.m2}--m3=${this.m3}--m4=${this.m4}--`
    }
}

//子类
class AA extends A {
    test() {
        console.log(this.m3);
        console.log(this.m2);
        //console.log(this.m4)m4无法访问
    }
}

//抽象类    
abstract class AAA {
    m1: string;
    test1() { }
    abstract test2():number //只有方法的描述，没有方法的实现
}

//const aaa =new AAA() //不可以


/*
抽象方法：有abstract / 没有方法体 / 不能创建实例
实现方法：没有abstract /有方法体 / 可以创建实例
*/