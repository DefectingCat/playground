// Two.prototype.name = 'xxxfy';

// function Two(sex, say) {
//     this.sex = sex;
//     this.say = say;
// }
// let two = new Two('female', '嘤嘤嘤');
// let two1 = new Two('male', '咕咕咕');

// console.log(two.name);
// console.log(two.constructor);

// Two.prototype = {
//     name: 'xfy',
//     age: 18,
//     saySome: function () {
//         console.log(this.say);
//     }
// }
// Object.defineProperty(Two.prototype, 'constructor', {
//     enumerable: false,
//     value: Two
// })

// // (Two Prototype)
// // Two.prototype --> Two.prototype
// // two1.__proto__ --> Two.prototype

// String.prototype.yyy = function () {
//     return '嘤嘤嘤';
// }
// let str = 'xfy';
// console.log(str.yyy());

function Person() {

}
Person.prototype = {
    name: 'xfy',
    age: 18,
    job: null,
    consoles: ['xbox', 'playstation'],
    sayName: function () {
        console.log(this.name);
    }
}
Object.defineProperty(Person.prototype, 'constructor', {
    enumerable: false,
    value: Person
})

let xfy = new Person();
let dfy = new Person();

xfy.consoles.push('nintendo');
console.log(xfy.consoles);
console.log(dfy.consoles);

/////////////////////////////////////////////

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.consoles = ['xbox', 'playstation'];
}
Person.prototype = {
    sayName: function () {
        console.log(this.name);
    }
}
Object.defineProperty(Person.prototype, 'constructor', {
    enumerable: false,
    value: Person
})

let xfy = new Person();
let dfy = new Person();

xfy.consoles.push('nintendo');
console.log(xfy.consoles);
console.log(dfy.consoles);

////////////////////////////////////////////// 寄生构造函数

function myArray() {
    // 创建一个数组
    let val = new Array();
    // 将参数全部传递进去
    val.push.apply(val, arguments);
    // 自定义一个方法
    val.pid = function () {
        return val.join('|');
    }
    return val
}
let arr = new myArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
console.log(arr.pid());

/////////////////////////////////////////////// 稳妥构造函数

function Person(name, age) {
    let o = new Object();
    o.sayName = function () {
        console.log(name);
    }
    o.sayAge = function () {
        console.log(age);
    }
    return o;
}

let xfy = Person('yyy', 18);
console.log(xfy.name);
xfy.sayName();