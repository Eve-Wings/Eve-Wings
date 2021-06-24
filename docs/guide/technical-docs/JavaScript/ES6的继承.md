# ES6 的基础继承

```javascript
class Person{
	constructor(name,age){
		this.name = name
		this.age = age
	}
    drink () {
        console.log(this.name + '正在喝水')
    }
}

// Student类继承于 Person
class Student extends Person{
    constructor(name,age,subject){
        super(name,age)	//继承父类的构造函数
        // 因此，与之前使用原型式继承相比，ES6的继承方法更加精简
        // 不需要再像之前那样调整原型和构造函数
        this.subject = subject
    }
    drink () {
        console.log('正在学习' + this.subject + '的' + this.name + '正在喝水')
    }
}
```