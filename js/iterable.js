let arr = [1, 2, 3];
let s = new Set([4, 5, 6]);
let m = new Map([[1, 'q'], [2, 'w'], [3, 'e']]);
let x;

for (x of arr) {
    console.log(x);
}
// for (x in arr) {
//     console.log(x);
// }
for (x of s) {
    console.log(x);
}
// for (x in s){
//     console.log(x);
// }
for (x of m) {
    console.log(x[0] + ' = ' + x[1]);
}
// for (x in m){
//     console.log(x);
// }
console.log('\n----------------------\n')
arr.name = 'test';
console.log(arr.name);
for (x in arr) {
    console.log(x);
}
for (x of arr) {
    console.log(x);
}
console.log('\n----------------------\n')
let y = 0;
for (x of arr) {
    y += x;
}
console.log(y);
console.log('\n----------------------\n')
let str = 'xiaofeyang';
for (x of str) {
    console.log(x);
}