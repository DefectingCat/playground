function sum (a,b) {
    return a + b;
}
let anotherSum = sum;
console.log(anotherSum(1,2));

sum = null;
console.log(anotherSum(1,2));

console.log(sum2(10,20));
function sum2(a,b) {
    return a * b;
}

// console.log(sum3(10,20));
// let sum3 = function (a,b) {
//     return a * b;
// }

function add(num) {
    return num + 10;
}
function addd(ff,num) {
    return ff(num);
}
console.log(addd(add,1));