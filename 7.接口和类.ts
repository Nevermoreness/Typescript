/*
接口：
    对[对象的形状]进行描述
    对类的一部分行为进行抽象
    父接口可以有多个，但是父类只能有一个

一个类可以实现一个接口
一个类可以继承于另一个类
*/

interface Alarm {
    alert(): any;
}

class Door { }

class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}

//一个类可以实现多个接口
class Car implements Alarm {
    alert() {
        console.log('Car alert');
    }
}

interface Light {
    lightOn(): void;
    lgghtOff(): void;
}


//单实现，多继承
class Car2 implements Alarm,Light{
    alert(){
        console.log('Car light');
    }
    lightOn(){
        console.log('Car light On');
    }
    lgghtOff(){
        console.log('Car light Off');
    }
}

//接口继承接口
interface LightableAlarm extends Alarm,Light{}