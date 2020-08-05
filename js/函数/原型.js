// Person.prototype  -- 原型
// Person.prototype = {}  -- 祖先
Person.prototype.xfy = 'xfy';
function Person() {
    this.xfy = 'notXfy';
}
let person = new Person();
let person1 = new Person();

Animal.prototype.lastName = 'miao';
function Animal(name, kind, sex) {
    this.name = name;
    this.kind = kind;
    this.sex = sex;
}
let an = new Animal('miao', 'cat', 'female');

// CarMake.prototype.name = 'Merceds';
// CarMake.prototype.height = '1400';
// CarMake.prototype.weight = '2t';
CarMake.prototype = {
    name = 'Merceds',
    height = '1400',
    weight  = '2t'
}
function CarMake(owner, color) {
    this.color = color;
    this.owner = owner;
}
let car1 = new CarMake('xfy', 'pink');

function Person(name, age) {
    this.name = name;
    this.age = age;
}
let xfy = new Person()

function Car() {

}
Person.prototype = {
    constructor : Car,
    age : 18
}
function Person() {
    this.name = 'xfy';
}
let person = new Person();
let obj = {
    age : 81
}

Person.prototype = {
    yyy : 123
}
function Person() {
    this.name = 'xfy';
}
let xfy = new Person();

Person.prototype = {
    test : 'test'
}
function Person() {
    this.name = '嘤嘤嘤';
}
let xfy = new Person();