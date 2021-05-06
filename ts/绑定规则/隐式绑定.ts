function foo(this: typeof obj) {
  console.log(this.name);
}
const obj = {
  name: 'xfy',
  foo: foo,
};
obj.foo(); // xfy

const alotherObj = {
  name: 'dfy',
  obj: obj,
};
alotherObj.obj.foo();
