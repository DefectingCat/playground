function add(num1, num2) {
    let result = num1 + num2;
    return result;
}

function Person(name) {
    // 私有变量
    let age = 18;
    // 私有方法
    function pv() {
        age++;
        console.log(age);
    }
    // 公有方法
    this.say = function () {
        console.log(name);
        // 通过公有方法执行私有方法
        pv();
    }
}
let xfy = new Person('xfy');
console.log(xfy.name);
xfy.say();

// 静态私有化变量 //////////////////////////////////////////////

let Person;
(function () {
    'use strict'
    let v = 10;
    function pv() {
        v++;
        console.log(v);
    }

    Person = function () {};
    Person.prototype.say = function () {
        console.log(v);
    }
    Person.prototype.cha = function () {
        pv();
    }

})();

let xfy = new Person();
xfy.say();