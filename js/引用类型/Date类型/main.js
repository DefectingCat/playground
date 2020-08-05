// let dd = new Date();
// console.log(dd);

// let d2 = new Date(2017, 0, 1);
// console.log(d2);

// let d3 = new Date(Date.UTC(2000, 2, 3, 21, 23, 31));
// console.log(d3);

let start = Date.now();
console.log(start);
let arr = [1,2,3,4,5,666,745,23,441,323,123123,123,123,85858585,,3,23,1,23,123123123123];
console.log(arr.reduce((a1, a2) => a1 + a2));
let stop = Date.now();
console.log(stop);
let result = stop - start;
console.log(result);

let test = +new Date();
console.log(test);

let d4 = new Date();
console.log(d4.toLocaleString());
console.log(d4.toString())
console.log(d4.toUTCString());
