const num = 123;
console.log(num);

// let num1: 33 = 44; // Type '44' is not assignable to type '33'
const bigNum = 123n;
console.log(bigNum);

/*global Symbol*/
const uniqueS = Symbol('xfy');
console.log(uniqueS);

// let obj:object;
// console.log(obj);
let h = null;
console.log(h);

// let greet5 = new Function('test');
// console.log(greet5);

const obj = {
  a: 1,
  b: 'xfy',
};
function logObj(this: Date) {
  const t = this.getDate();
  return t;
}
logObj.call(new Date());
