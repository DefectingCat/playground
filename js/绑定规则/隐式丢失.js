const { isTypeReferenceNode } = require('typescript');

(() => {
  function foo() {
    console.log(this.name);
  }

  const obj = {
    name: 'xfy',
    age: 18,
    foo,
  };

  const bar = obj.foo;
  bar();
})();

(() => {
  function foo() {
    console.log(this.name);
  }

  function doFoo(fn) {
    fn();
  }

  const obj = {
    name: 'xfy',
    age: 18,
    foo,
  };

  doFoo(obj.foo);
})();
