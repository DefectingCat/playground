function* foo() {
  // yield 会先抛出值，第二次运行时再暂停等待值
  const a = yield 42;
  console.log(a);
}

const it = foo();

// console.log(it.next());
console.log(it.next(4242));
console.log(it.next(4242));
