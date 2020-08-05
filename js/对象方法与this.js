// let xfy = {
//     name: '小肥羊',
//     birth: 2000,
//     age: function() {
//         let y = new Date().getFullYear();
//         return y - this.birth;
//     }
// }
// console.log(xfy.name + '今年' + xfy.age());
console.log('\n----------------------\n')
// let xfy = {
//     name: '小肥羊',
//     birth: 2000,
//     age: getAge
// }
// function getAge() {
//     let y = new Date().getFullYear();
//     return y - this.birth;
// }
// console.log(xfy.age());
// console.log(getAge());
console.log('\n----------------------\n')
// 'use strict';
// let xfy = {
//     name: '小肥羊',
//     birth: 2000,
//     age: function() {
//         let that = this;
//         function test() {
//             let y = new Date().getFullYear();
//             return y - that.birth;
//         }
//         return test();
//     }
// }
// let fn = xfy.age;
// console.log(fn());
// console.log(xfy.age())
console.log('\n----------------------\n')
'use strict';
let xfy = {
    name: '小肥羊',
    birth: 2000,
    age: function() {
        let y = new Date().getFullYear();
        return y - this.birth;
    }
}
let fn = xfy.age;
console.log(fn());