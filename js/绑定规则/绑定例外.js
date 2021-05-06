function foo() {
  console.log(this.name);
}
foo.call(null);

function bar(a, b) {
  console.log(a, b);
}
bar.apply(null, [1, 2]);

const baz = bar.bind(null, 1);
baz(2);

function foo() {
  console.log(this.name);
}
const o = {
  foo,
};
const p = {};
(p.foo = o.foo)();
