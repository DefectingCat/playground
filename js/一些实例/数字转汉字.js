let hz = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let dw = ['拾', '佰', '仟', '万', '亿', '圆'];
// console.log(hz[arr[1]]);

// let x;
// for (x in arr) {
//     console.log(hz[arr[x]]);
// }

let str = '4325';
// for (let i = 0; i < str.length; i ++) {
//     console.log(hz[str[i]]);
// }

function change(target) {
    let result = '';
    for (let i = 0; i < target.length; i++) {
        result += hz[target[i]];
    }
    // let count = 0;
    // for (i = -1; i > -(result.length); i--) {
    //     insert(result, i, dw[count]);
    //     count++;
    // }
    return result;
}
// function insert(souce, start, newStr) {
//     return souce.slice(0,start) + newStr + souce.slice(start);
// }
console.log(change(str));
