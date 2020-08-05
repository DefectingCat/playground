let dao = {
    name : 'shuidao',
    sex : 'male',
    merry : 50,
    gameHealth : 150,
    hunter : function () {
        console.log('i love miemiezi!');
        this.merry++;
    },
    work : function () {
        console.log('i just love miemiezi!');
        this.merry--;
    },
    monster : function (long) {
        console.log('i love ' + long);
        this.gameHealth--;
    }
}
// function Person() {

// }
// let p1 = new Person();

function MakeCar(cc) {
    this.name = 'BMW';
    this.height = '1080';
    this.lang = 2080;
    this.weight = '999';
    this.health = 100;
    this.run = function () {
        this.health--;
    }
    this.color = cc;
}
let car = new MakeCar();

function Make() {
    this.name = 'xfy';
}

function Xfy() {
    let that = {};
    that.name = 'xfy';
    that.age = 18;
    return that;
}
let xfy = Xfy();

function Person() {
    this.name = 'xfy';
    this.age = '18';
    this.say = function () {
        console.log(this.name);
    }
}
let p = new Person();

function foo(x) {
    console.log(arguments);
}

function foo(x) {
    let arr = [];
    for (w in arguments) {
        arr.push(arguments[w]);
    }
    console.log(arr);
}

function foo (a, b, c) {
    arguments[2] = 10;
    alert(c);
}

function char(target) {
    let str = target.toString();
    let len = str.length;
    let count = len;
    for (let i = 0; i < len; i++) {
        if(str.charCodeAt(i) > 255) {
            count++
        }
    }
    return count;
}

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    function sss() {
        this.age++;
    }
    this.old = sss;
}
let p = new Person(xfy, 18 ,male);