let arr1 = [1, 2, 3];
let arr2 = arr1;

arr1 = { name: 'xfy' };
console.log(arr1); // { name: 'xfy' }
console.log(arr2); // [ 1, 2, 3, 99 ]
