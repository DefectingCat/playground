// // 基本的浅拷贝
// let uber = {
//     name: 'u',
//     age: 18,
//     money: 100,
//     arr: [1, 2, 3, ['a', 'b']],
//     obj: {
//         anotherName: 'xfy'
//     },
//     fun: function() {
//         console.log('xfy!');
//     }
// }
// uber.u = uber;
// function basicCopy(origin, target) {
//     target = target || {};
//     for (prop in origin) {
//         target[prop] = origin[prop];
//     }
//     return target;
// }
// let test = basicCopy(uber);
// console.log(test);

// function deepCopy(origin, target) {
//     target = target || {};
//     let isObj = Object.prototype.toString;
//     for (prop in origin) {
//         if (origin.hasOwnProperty(prop)) {
//             if (typeof(origin[prop]) == 'object') {
//                 if (isObj.call(origin[prop]) === "[object Object]") {
//                     target[prop] = {};
//                 } else {
//                     target[prop] = [];
//                 }
//                 deepCopy(origin[prop], target[prop]);
//             } else {
//                 target[prop] = origin[prop];
//             }
//         }
//     }
//     return target;
// }
// let tt = deepCopy(uber);
// uber.fun = function() {
//     console.log('test');
// };
// console.log(uber.fun());
// console.log(tt.fun());

// // function deepCopy(origin, target) {
// //     target = target || {};
// //     let arr = [];
// //     function isArr(ori) {
// //         for (key of ori) {
// //             if (origin.toString.call(key) === "[object Array]") {
// //                isArr(ori[key]);
// //             }
// //             arr.push(key);
// //             target[prop] = arr;
// //         }
// //     }
// //     for (prop in origin) {
// //         // Array
// //         if (origin.toString.call(origin[prop]) === "[object Array]") {
// //             isArr(origin[prop])
// //         }
// //         // target[prop] = origin[prop];
// //     }
// //     return target;
// // }
// // let t = deepCopy(uber);
// // uber.arr[0] = 123123;
// // console.log(t.arr);

// basicClone
let obj = {
    name: 'xfy',
    age: 18,
    br: true,
    arr: [1, 2, 3, [4, 5, [6, 7]]],
    ob: {
        name: 'dfy',
        age: 81,
        objj: {
            arr1: [1, 2, 3, [4, 5]]
        }
    },
    re: /ab+c/
}
obj.uber = obj;  // 自身循环引用
obj.date = new Date();

function clone(origin, target) {
    target = target || {};
    for (prop in origin) {
        target[prop] = origin[prop];
    }
    return target;
}
let test1 = clone(obj);
// obj.arr[0] = 123123123123;  // 修改原对象属性值
console.log(test1.arr[0]);

function deepClone(origin, target) {
    target = target || {};
    let isObj = Object.prototype.toString;
    for (prop in origin) {
        if (!origin.hasOwnProperty(prop)) continue;
        if (origin[prop] === origin) {
            target[prop] = target;
        } else {
            if (typeof (origin[prop]) == 'object') {
                if (isObj.call(origin[prop]) === "[object object]") {
                    target[prop] = {};
                } else if (isObj.call(origin[prop]) === "[object RegExp]") {
                    target[prop] = origin[prop];    //这里不需要创建空的引用值，因为日期和正则都是基本值赋值。
                } else if (isObj.call(origin[prop]) === "[object Date]") {
                    target[prop] = origin[prop];
                } else {
                    target[prop] = [];
                }
                deepClone(origin[prop], target[prop]);
            } else {
                target[prop] = origin[prop];
            }
        }
    }
    return target;
}
let test2 = deepClone(obj);
obj.arr[0] = '1alsdkfj';
console.log(test2.date);