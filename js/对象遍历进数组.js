//遍历属性进数组
let x, i = 0, arr = [];
let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (arr[i++] in obj);

// 遍历属性值进数组
let x, i = 0, arr = [];
let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (x in obj) {
    arr.push(obj[x]);
}

// 有函数的情况
let x, i = 0, arr = [];
let obj = {
    a: 1,
    b: 2,
    c: 3,
    fun: function () {
        alert('xfy');
    }
}
for (x in obj) {
    arr.push(obj[x]);
}
arr[3];
// ƒ () {
//         alert('xfy');
//     }
arr[3]();   //执行函数