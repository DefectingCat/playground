function fibonacci(n, a = 1, b = 1) {
  if (n === 0) {
    return a;
  }
  return fibonacci(--n, b, a + b);
}
console.time('a');
console.log('Calculate first 40 fibonacci numbers: ', fibonacci(100));
console.timeEnd('a');
