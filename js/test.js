/*
 * @Author: your name
 * @Date: 2020-11-04 00:00:29
 * @LastEditTime: 2020-12-29 17:51:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript高级程序设计c:\Users\xfy\OneDrive\Defectink\test\js\test.js
 */
function Test1(age) {
    this.age = age;
    this.sayAge = function () {
        console.log(this.age);
    }
}


class Test {
    constructor(age) {
        this.age = age;
    }
    sayAge = () => {
        debugger;
        console.log(this.age);
    }
}

let t = new Test(12);

let test = {
    age: 18,
    sayAge: function () {
        console.log(this.age);
    }
}

let test = {
    age: 18,
    sayAge: function () {
        return function () {
            console.log(this.age);
        }
    }
}

setTimeout(() => { test.sayAge() }, 0)


///////////////////////

class Test {
    constructor(age) {
        this.age = age;
    }

    sayAge() {
        console.log(`hi, ${this.age}`);
    }
}

let t = new Test(18);

function Test1(age) {
    this.age = age;
    this.sayAge = () => {
        console.log(this.age);
    }
}

let t1 = new Test1(18);

class Test {
    constructor(age) {
        this.age = age;
    }

    sayAge = () => {
        console.log(`hi, ${this.age}`);
    }
}

let t = new Test(18);