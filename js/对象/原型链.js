function SuperType() {
    // 为实例设置属性
    this.property = true;
}
// 在原型上添加一个方法，通过该构造函数创建的实例就会有该方法。
SuperType.prototype.getProperty = function() {
    console.log(this.property);
}

function SubType() {

}
// 将次级构造函数的原型对象设置为上级构造函数的实例。上级构造函数的实例包含其原型对象，将其设置到该构造函数的原型对象上。
SubType.prototype = new SuperType();

// 通过该构造函数创建的实例就会继承最高级构造函数的原型对象。
let xfy = new SubType();
xfy.getProperty();  // true

/////////////////////////////////////

function SuperType() {
    this.property = true;
}
SuperType.prototype.getProperty = function() {
    console.log(this.property);
}

function SubType() {

}
SubType.prototype = new SuperType();
SubType.prototype.getProperty = function() {
    return false;
}

let xfy = new SubType();
xfy.getProperty();  // false

// 原型链的问题 //////////////////////////

function SuperType() {
    this.arr = [1, 2, 3, 4, 5];
    this.property = true;
}
SuperType.prototype.getProperty = function () {
    console.log(this.property);
}

function SubType() {

}
SubType.prototype = new SuperType();


let xfy = new SubType();
let dfy = new SubType();
console.log(xfy.arr);
console.log(dfy.arr);

dfy.arr.push(6, 7, 8, 9)

console.log(xfy.arr);
console.log(dfy.arr);
console.log(SubType.prototype.arr);

// 借用构造函数 ///////////////////////////////////

function SuperType(name, age) {
    this.name = name;
    this.age = age;
    this.arr = [1, 2, 3, 4, 5];
}

function SubType(name, age) {
    SuperType.call(this, name, age);
}

let xfy = new SubType('xfy', 18);
let dfy = new SubType('dfy', 188);

console.log(xfy);

xfy.arr.push(6, 7, 8, 9);

console.log(xfy.arr);
console.log(dfy.arr);

// 组合式继承 ///////////////////////////////////////////

function SuperType(name, age) {
    this.name = name;
    this.age = age;
    this.arr = [1, 2, 3, 4, 5];
}
SuperType.prototype.sayName = function () {
    console.log(this.name);
}

function SubType(name, age) {
    // 借用构造函数继承属性
    SuperType.call(this, name, age);
}
// 原型链继承方法
SubType.prototype = new SuperType;

let xfy = new SubType('xfy', 18);
let dfy = new SubType('dfy', 188);

console.log(xfy.sayName());

xfy.arr.push(6, 7, 8, 9);

console.log(xfy.arr);
console.log(dfy.arr);

// 原型式继承 ////////////////////////////////////

function object(o) {
    function F() {};
    F.prototype = o;
    return new F();
}

let one = {
    name: 'xfy',
    age: 18
}
let two = Object.create(one, {
    name: {
        configurable: false,
        value: 'dfy'
    }
})

two.name = 123;
console.log(two.age);

// 寄生式继承 //////////////////////////////////////////////

let person = {
    name: 'xfy',
    age: 18
}
function test(target) {
    let clone = Object.create(target);
    clone.hello = function () {
        console.log('hi(｡･∀･)ﾉﾞ');
    }
    return clone;
}
let xfy = new test(person);

console.log(xfy.name);
console.log(xfy.hello());

// 寄生式组合继承 //////////////////////////////////////////////

function inherit(subtype, supertype) {
    let prototype = Object.create(supertype.prototype);
    prototype.constructor = prototype;
    subtype.prototype = prototype;
}

function One(name) {
    this.name = name;
}
One.prototype.sayName = function () {
    console.log(this.name);
}

function Two(name, age) {
    One.call(this, name);
    this.age = age;
}
Two.prototype.sayAge = function () {
    console.log(this.age);
}

inherit(Two, One);

let xfy = new Two('xfy', 18);

console.log(xfy.name);

function inherit(target, origin) {
    function F() {};
    F.prototype = origin.prototype;
    target.prototype = new F();
    target.prototype.constructor = target;
    target.prototype.uber = origin;
}