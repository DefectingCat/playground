var a = 123;

function foo() {
  console.log(this.a);
}

(() => {
  'use strict';
  foo();
})();
