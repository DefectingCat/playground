// let arr = [1, 2, 2, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 'a', 'a', 'a', 'b', 'b', 'b', 'c'],
//     x,
//     y;
// for (x in arr) {
//     if (y == arr[x]) continue;
//     console.log(arr[x]);
//     y = arr[x];
// }

// //使用ES6新特性去重
// // 难道我Set只能这样用吗？
// let arr = [1, 2, 2, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 9, 'a', 'a', 'a', 'b', 'b', 'b', 'c'];
// function just(arr) {
//     let s = new Set(arr);
//     let t = Array.from(s);
//     return t;
// }

Array.prototype.unique = function () {
    let arr = [],
        x,
        y;
    for (x of this) {
        if (y === x) continue;
        arr.push(x);
        y = x;
    }
    return arr;
}
let arr = [1, 2, 2, 2, 3, 3, 4, 5, 6, 2, 2, 2, 3, 6, 7, 8, 9, 9, 'a', 'a', 'a', 'b', 'b', 'b', 'c'];
arr.unique();

Array.prototype.unique = function () {
    let x,
        y;
    let uni = {};
    for (x of this) {
        uni[x] = 'xfy';
    }
    let arr = Object.keys(uni);
    return arr;
}

Array.prototype.unique = function () {
    let temp = {},
        arr = [];
    let len = this.length;
    for (let i = 0; i < len; i++) {
        if(!temp[this[i]]) {
            temp[this[i]] = 'xfy';
            arr.push(this[i]);
        }
    }
    return arr;
}