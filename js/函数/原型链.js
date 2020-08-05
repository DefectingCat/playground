Grand.prototype = {
    lastName: '小'
}
function Grand() {

}
let grand = new Grand();

Father.prototype = grand;
function Father() {
    this.name = '肥羊';
    this.money = {
        card1: 'visa'
    }
}
let father = new Father();

Son.prototype = father;
function Son() {
    this.age = 18;
}
let son = new Son();

// son.money.card2 = 'masterCard'

Person.prototype = {
    name: 'a',
    sayName: function () {
        console.log(this.name);
    }
}
function Person() {
    this.name = 'b'
}

let p = new Person();

Person.prototype = {
    height: 100
}
function Person() {
    this.eat = function () {
        this.height++;
    }
}
let p = new Person();

let obj = {
    name: 'xfy',
    age: 18
}
let obj1 = Object.create(obj);

function Person() {

}
Person.prototype = {
    name: 'xfy'
}
let obj = Object.create(Person.prototype);

let obj = Object.create(null);
obj.__proto__ = {
    name: 'xfy'
}

Object.prototype.toString() = function () { }
Number.prototype.__proto__ = Object.prototype;
Number.prototype.toString() = function () { }

Person.prototype = {
    toString: function () {
        return 'test';
    }
}
function Person() {
    name = 'xfy';
}
let p = new Person();

function Person() {

} // 函数
Person.prototype = {

} // 函数的对象：原型
let p = new Person(); // 构造函数创建对象
p.__proto__ = Person.prototype; // 对象的原型链继承自函数的原型
Person.prototype.__proto__ = Object.prototype; // 函数自身的prototype对象也继承自Object.prototype

function Person() {
    this.name = 'a';
}
Person.prototype = {
    name: 'v',
    sayName: function () {
        console.log(this.name);
    }
}

