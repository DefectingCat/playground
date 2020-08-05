// 字符串 数字(new Number()) boolean 对象 数组 函数  null undefined RegExp Date
// function type(target) {
//     let tos = Object.prototype.toString.call(target);
//     switch (tos) {
//         case "[object String]":
//             return 'String';
//         case "[object Number]":
//             if (typeof(target) === "number") {
//                 return 'Number';
//             } else {
//                 return 'Object Number';
//             }
//         case "[object Boolean]":
//             return 'Boolean';
//         case "[object Object]":
//             return 'Object';
//         case "[object Array]":
//             return 'Array';
//         case "[object Function]":
//             return 'Function';
//         case "[object Null]":
//             return 'Null';
//         case "[object Undefined]":
//             return 'Undefined';
//         case "[object RegExp]":
//             return 'RegExp';
//         case "[object Date]":
//             return 'Date';
//         default:
//             return '嘤嘤嘤';
//     }
// }

function type(target) {
    let temp = {
        "[object String]": 'ObjectString',
        "[object Number]": 'ObejctNumber',
        "[object Array]": 'Array',
        "[object RegExp]": 'RegExp',
        "[object Date]": 'Date'
    }
    if (target === null) {
        return 'null';
    }
    if (typeof(target) == 'object') {
        let str = Object.prototype.toString.call(target);
        return temp[str];
    } else {
        return typeof(target);
    }
}