let str = '肆叁贰伍';
let insert = (sou, start, newStr) => {
    return sou.slice(0,start) + newStr + sou.slice(start);
}
// console.log(insert(str,-1,'t'));

let hz = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let dw = ['拾', '佰', '仟', '万', '亿', '圆'];

let test = '';
let count = 0;
    for (i = -1; i > -(str.length); i--) {
        console.log(insert(str, i, dw[count]));
        count++;
    }
console.log(test);
