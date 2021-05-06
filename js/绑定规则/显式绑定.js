(() => {
  function foo() {
    console.log(this.name);
  }
  const obj = {
    name: 'xfy',
    age: 18,
    foo,
  };
  foo.call(obj);
})();

(() => {
  function foo() {
    console.log(this.name);
  }
  const obj = {
    name: 'xfy',
    age: 18,
    foo,
  };
  function bar() {
    foo.call(obj);
  }
  setTimeout(bar, 1000);
  // 同理
  // setTimeout(() => {
  //   obj.foo();
  // }, 1000);
})();

(() => {
  function foo(msg) {
    console.log(this.name);
    console.log(msg);
  }
  function wrapper(fn, obj) {
    return (...rest) => {
      fn.apply(obj, rest);
    };
  }
  const obj = {
    name: 'xfy',
    age: 18,
  };
  const bar = wrapper(foo, obj);
  bar('嘤嘤嘤');
})();

(() => {
  function foo() {
    console.log(this.name);
  }
  const obj = {
    name: 'xfy',
    age: 18,
  };
  const bar = foo.bind(obj);
  bar();
})();

function Foo(name) {
  this.name = name;
}
const bar = new Foo('xfy');
console.log(bar.name);
