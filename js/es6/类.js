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