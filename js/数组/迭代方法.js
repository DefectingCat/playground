// every()
let dd = input => input < 9;
// let dd = function (input) {
//     return input < 9;
// }
let arr = [1,2,3,4,5];
console.log(arr.every(dd));

console.log('\n----------------------\n');

let ff = word => word.length > 5;
let arr2 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(arr2.filter(ff));

console.log('\n----------------------\n');

let arr3 = ['a','b','c',1,2,3];
arr3.forEach(ele => console.log(ele));

console.log('\n----------------------\n');

let arr4 = [1,2,3,4,5,6];
console.log(arr4.map(sx => (sx + 1) * 2 / 3));

console.log('\n----------------------\n');

let arr5 = [1,2,3,4,5,6,7,8,9];
console.log(arr5.some(qy => qy % 2 === 0));

// 找出数组中能被2整除的数
console.log('\n----------------------\n');
let arr6 = [1,2,3,4,5,6,7,8,9,0,12,33,276,122,43,'xfy','xiaofeiyang'];
console.log(arr6.filter(xb => xb % 2 === 0));