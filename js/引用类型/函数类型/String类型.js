// let str = new String('xfy');
// console.log(str);
// let str2 = 'xfy';
// console.log(str2);

// console.log(typeof str);
// console.log(typeof str2);
// console.log(str instanceof String);
// console.log(str2 instanceof String);

// let str = 'xfy';
// console.log(str.charAt(1));
// console.log(str.charCodeAt(1));

// console.log(str[1]);
// let str2 = 'yyy';
// console.log(str.concat('abc',str2));

let str = 'xiaofeiyang';
console.log(str.slice(4));
console.log(str.substr(4));
console.log(str.substring(4));
console.log('---');
console.log(str.slice(4,7));
console.log(str.substr(4,7));
console.log(str.substring(4,7));

let arr = [1,2],
    arr1 = arr;
    arr = [1,3];
console.log(arr);
console.log(arr1);
