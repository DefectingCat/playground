// let obj = {
//   name: 'xfy',
// };
// const otherObj = Object.create(obj);
// console.log(otherObj.name);

const { isConstructorDeclaration } = require('typescript');

let myObj = {
  name: 'xfy',
  set foo(val) {
    this._a_ = val * 2;
  },
  get foo() {
    return this._a_;
  },
};
const obj = Object.create(myObj);
obj.foo = '110';
console.log(obj.foo);

function Foo() {}
function Bar() {}

Bar.prototype = Foo.prototype;

Bar.prototype = new Foo();

// ES6 之前需要抛弃默认的 Bar.prototype
Bar.prototype = Object.create(Foo.prototype);
// ES6 之后可以直接修改现有的 Bar.prototype
Object.setPrototypeOf(Bar.prototype, Foo.prototype);

function Foo() {}
const obj = new Foo();

a instanceof Foo; // true

class Foo {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}

const obj = new Foo('xfy');

Object.getPrototypeOf(obj);
// {constructor: ƒ, sayName: ƒ}
// constructor: class Foo
// sayName: ƒ sayName()
// __proto__: Object
