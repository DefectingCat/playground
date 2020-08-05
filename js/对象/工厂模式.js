// function createOne(name, age, sex) {
//     let o = {};
//     o.name = name;
//     o.age = age;
//     o.sex = sex;
//     o.say = function () {
//         console.log(this.name);
//     }
//     return o;
// }
// let person1 = createOne('xfy', 18, 'male');
// let person2 = createOne('dfy', 81, 'female');
// console.log(person1.constructor);
// console.log(person2);

function One(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
let person1 = new One('xfy', 18, 'female');
let person2 = new One('dfy', 81, 'male');
console.log(person1.constructor);
console.log(person2);

let obj = {};
One.call(obj, 'xfy', 18, 'female');
console.log(obj);

Two.prototype.name = 'xfy';
Two.prototype.age = 18;
Two.prototype.saySome = function () {
    console.log(this.say);
}

function Two(name, age, sex, say) {
    this.sex = sex;
    this.say = say;
}
let two = new Two('female', '嘤嘤嘤');
let two1 = new Two('male', '咕咕咕');
console.log(two.saySome);
