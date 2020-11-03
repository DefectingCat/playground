// 定义类
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    
    otherFunc() {
        console.log(name + age);
    }
}

// 提升
let xfy = new Person();     // ReferenceError

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// 匿名类
let Person = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(Person.name);   // Person

// 具名类
let Person = class Persona {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(Person.name);   // Persona

// 原型与方法
class Rectangle {
    constructor(h, w) {
        this.h = h;
        this.w = w;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.h * this.w;
    }
}

let square = new Rectangle(23, 32);
console.log(square.area);

// 传统写法
function Rectangle(h, w) {
    this.h = h;
    this.w = w;
}

Rectangle.prototype.calcArea = function() {
    return this.h * this.w;
}

Object.defineProperty(Rectangle.prototype, 'area', {
    get: function() {
        return this.calcArea();
    }
})

let square = new Rectangle(23, 32);
console.log(square.area);

// 静态方法
class test {
    constructor(xx, yy) {
        this.x = xx;
        this.y = yy;
    }

    add() {
        return this.x + this.y;
    }

    static tt() {
        return '嘤嘤嘤';
    }
}

// 严格模式
class test {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        return this;
    }

    static ss() {
        return this;
    }
}

let xfy = new test();
xfy.show();
let t = xfy.show;
t()

test.ss()
let tt = test.ss;
tt();

function Test(x, y) {
    this.x = x;
    this.y = y;
}

Test.prototype.show = function () {
    return this;
}

Test.ss = function () {
    return this;
}

let xfy = new Test();
xfy.show();
let t = xfy.show;
t()

Test.ss()
let tt = Test.ss;
tt();