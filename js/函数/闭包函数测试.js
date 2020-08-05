// function sum() {
//     let num = arguments[0];
//     if (arguments.length == 1) {
//         return function (sec) {
//             return num + sec;
//         }
//     }else{
//         // return arguments[0] + arguments[1];
//         let num = 0;
//         for (let i = 0; i < arguments.length; i++){
//             num += arguments[i];
//         }
//         return num;
//     }
// }
// function a() {
//     function b() {
//         let bb = 234;
//         console.log(aa);
//     }
//     let aa = 124;
//     return b;
// }
// let glob = 100;

// function a1() {
//     let num = 100;
//     function a2() {
//         num++;
//         console.log(num);
//     }
//     return a2;
// }
// let dd = a1();

// function aa1() {
//     let num = 100;
//     function aa2() {
//         num ++;
//     }
//     aa2();
//     console.log(num);
// }

// function test() {
//     let num = 100;
//     function a() {
//         num ++;
//         console.log(num);
//     }
//     function b() {
//         num --;
//         console.log(num);
//     }
//     return [a,b];
// }
// let tt = test();
// tt[0]();
// tt[1]();
// test()[0]();
// test()[1]();

// function test() {
//     let arr = [],
//         i;
//     for (i = 0; i < 10; i++) {
//         arr[i] = function () {
//             console.log(i);
//         }
//     }
//     return arr;
// }
// let myArr = test();

// function test() {
//     let arr = [],
//         i;
//     for (i = 0; i < 10; i++) {
//         (function (j) {
//             arr[j] = function () {
//                 console.log(j);
//             }
//         }(i))
//     }
//     return arr;
// }
// let myArr = test();
// myArr[0]();

// 不使用return
// let demo;
// function test() {
//     let go = 100;
//     function a() {
//         console.log(go);
//     }
//     demo = a;
// }
// test();
// demo();

// 函数累加器
// function test() {
//     let count = 1;
//     function a() {
//         console.log('这是第' + count + '次执行！');
//         count++;
//     }
//     return a;
// }
// let demo = test();
// demo();
// demo();
// demo();
// demo();
// demo();

// 函数缓存
// function eater() {
//     let food = '';
//     let p = {
//         name: 'xfy',
//         eat: function () {
//             console.log('im eated' + ' ' + food);
//             food = '';
//         },
//         push: function (addF) {
//             food = addF;
//         }
//     }
//     return p;
// }
// let demo = eater();
// demo.push('banana')
// demo.eat();

// 闭包循环
// function test() {
//     let arr = [],
//         i;
//     for (i = 0; i < 10; i ++) {
//         arr[i] = function () {
//             console.log(i);
//         }
//     }
//     return arr;
// }
// let demo = test();
// demo[2]();

//
// function test(char) {
//     let str = char.toString();
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str.charCodeAt(i) <= 255) {
//             count++;
//         } else {
//             count += 2;
//         }
//     }
//     return count;
// }

// //
// function ret(char) {
//     let str = char.toString();
//     let count,
//         len;
//     count = len = str.length;
//     for (let i = 0; i < len; i++) {
//         if (str.charCodeAt(i) > 255) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(ret('小肥羊'));

let x = 1;
if (function f() {}) {
    x += typeof f;
}
console.log(x);

function test() {
    let count = 1;
    function a() {
        console.log('这是第' + count + '次执行！');
        count++;
    }
    return a;
}