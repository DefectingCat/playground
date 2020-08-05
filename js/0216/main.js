// // 遍历数组可枚举属性
// var aa = {
//     a:1,
//     a1:2,
//     a2:3
// }
// // var a = "";
// // for (i = 1; i <= 2; i++) {
// //     a += aa['a' + i] + '\n';
// // }
// // console.log(a);
// var x;
// for (x in aa){
//     console.log(aa[x])
// }
// console.log(Object.values(aa));
// //inherit()返回了一个继承自原型对象p的属性的新对象
// //这里使用ECMAScript5中的Object.create()函数（如果存在的话）
// //如果不存在Object.create()，则退化使用其他方法
// function inherit(p) {
//     if (p == null) throw TypeError();
//     //p是一个对象，但不能是null
//     if(Object.create)
//     //如果Object.create()存在
//     return Object.create(p);
//     //直接使用它
//     var t = typeof p;
//     //否则进行进一步检测
//     if (t !== "object" && t !== "function") throw TypeError();
//     function f() {};//定义一个空构造函数
//     f.prototype = p;//将其原型属性设置为p
//     return new f();//使用f()创建p的继承对象
// }
// var n1 = 1;
// ++n1;               //2，已经自增
// var n2 = 2;
// console.log(n2);    //2，未自增
// console.log(n1+ n2++);
// console.log(n2);    //3，已自增

// let a = 1;
// let b = 2;
// let c = 0;
// console.log(a && b);        //2
// console.log(c || b);        //2
// console.log(a || c && b);   //1
let book = {
    'sub-title': 123
}
console.log(book.subtitle);             //undefined
console.log(book.subtitle.length);      //Uncaught TypeError: Cannot read property 'length' of undefined

let lenn = book && book.subtitle && book.subtitle.length;
console.log(lenn);

o = {
    x:1
}
delete o.x;
delete o.x;
delete o.toString();
delete xfy;

delete Object.prototype;
let x = 1;
delete x;
function y() {};
delete this.y;