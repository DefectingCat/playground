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

// 原型链的问题 ////////////////////////////////////////////////

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