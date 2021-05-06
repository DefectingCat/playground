// function foo() {
//   console.log(this.age);
// }

// const xfy = {
//   name: 'xfy',
//   age: 18,
//   foo,
// };
// const dfy = {
//   name: 'dfy',
//   age: 81,
//   foo,
// };

// xfy.foo();
// dfy.foo();

// xfy.foo.call(dfy);
// dfy.foo.call(xfy);

// function foo(msg) {
//   this.a = msg;
// }

// const xfy = {
//   name: 'xfy',
//   foo,
// };
// xfy.foo('test');
// console.log(xfy);

// const obj = new xfy.foo('this is obj');
// console.log(obj);

// function foo(msg) {
//   this.a = msg;
// }

// const xfy = {
//   name: 'xfy',
//   foo,
// };

// let obj = {};

// const bar = xfy.foo.bind(obj);
// bar('obj');
// console.log(obj);

// // bar was bind to obj
// const baz = new bar('this is baz');
// console.log(obj);
// console.log(baz);

function wrapBind(fn, obj) {
  return function (...rest) {
    fn.apply(obj, rest);
  };
}
const obj = {};
function foo(msg) {
  this.name = msg;
}
const bar = wrapBind(foo, obj);
bar('test');
console.log(obj);

const baz = new bar('332');
console.log(baz);
console.log(obj);
