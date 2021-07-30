function* foo() {
  yield* [1, 2, 3];
  return 42;
}

/**
 * 调用 bar() 时，委托到内部的 foo()
 * 其所有 yield 的值都会被 bar() 的 yield 产出
 * 其 foo() return 的值，会被赋值给 yield
 */
function* bar() {
  const x = yield* foo();
  console.log('x: ', x);
}

for (const i of bar()) {
  console.log(i);
}
