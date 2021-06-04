// 在异步函数中遇到 await 会将整个函数抛出主线程 进行异步执行
async function foo() {
  console.log(2);
  console.log(await Promise.resolve(6));
  console.log(8);
}

async function bar() {
  console.log(4);
  console.log(await 7);
  console.log(9);
}

console.log(1);
foo();
console.log(3);
bar();
console.log(5);
