let a = 123;
let b = a; // 按值进行传递

a += 1; // 修改 a
console.log(a); // 124
console.log(b); // 123 b 不受影响

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1.push(99); // 修改 aar1
console.log(arr1); // [ 1, 2, 3, 99 ]
console.log(arr2); // [ 1, 2, 3, 99 ]
