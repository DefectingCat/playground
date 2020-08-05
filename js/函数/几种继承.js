Grand.prototype = {
    lastName: 'xfy'
}
function Grand() {

}
let gr = new Grand();

Father.prototype = gr;
function Father() {

}
let fa = new Father();

Son.prototype = fa;
function Son() {

}
let so = new Son();

// 借用构造函数
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
function Student(name, age, sex, grade) {
    Person.call(this, name, age, sex);
    this.grade = grade;
}
let stu = new Student('xfy', 18, 'female', '二年级')

// 共享属性
Father.prototype.name = 'xfy';
function Father() {

}

function Son() {

}
// Son.prototype = Father.prototype;
function inherit(Target, Origin) {
    Target.prototype = Origin.prototype;
}
inherit(Son, Father);
// 因为是引用值，所以Son在原型中添加值时，Father也会被添加值。
function F() {

}
inherit(F, Father);
Son.prototype = new F();
Son.prototype.sex = 'male';

let so = new Son();
let fa = new Father();

// 添加中间层，过渡继承Father的原型。
function F() {

}
inherit(F, Father);
Son.prototype = new F();

Father.prototype.name = 'xfy';
function Father() {

}

function Son() {

}
function inherit(Target, Origin) {
    function I() { };
    I.prototype = Origin.prototype;
    Target.prototype = new I();
    Target.prototype.constructor = Target;
    Target.prototype.uber = Origin.prototype;
}
inherit(Son, Father);
let son = new Son();
let father = new Father();
// son.constructor = Father();
// son.__proto__ --> new I().__proto__ --> Father.prototype

function Xfy(name, consoled) {
    let anotherConsole = 'ps4';
    this.name = name;
    this.consoled = consoled;
    this.changeConsole = function () {
        this.console = anotherConsole;
    }
    this.buyConsole = function (target) {
        anotherConsole = target;
    }
    this.sayTrueth = function () {
        console.log(anotherConsole);
    }
}
let xfy = new Xfy('xfy', 'xbox');

function Father() {

}
Father.prototype.name = 'test';

function Son() {

}
function inherit(Target, Origin) {
    function F() {};
    F.prototype = Origin.prototype;
    Target.prototype = new F();
    Target.prototype.constructor = Target;
    Target.prototype.uber = Origin;
}

// 寄生式组合继承 ///////////////////////////////////////////////////////////////////////////

function inherit(Target, Origin) {
    let prot = Object.create(Origin.prototype);
    prot.constructor = Target;
    prot.uber = Origin;
    Target.prototype = prot;
}

function One (name, age) {
    this.name = name;
    this.age = age;
}
One.prototype = {
    constructor: One,
    sayName: function () {
        console.log(this.name);
    }
}
Object.defineProperty(One.prototype, 'constructor', {
    enumerable: false
})

function Two(name, age, sex) {
    One.call(this, name, age);
    this.sex = sex;
}

inherit(Two, One);

let xfy = new Two('xfy', 18, 'female');
console.log(xfy.constructor);