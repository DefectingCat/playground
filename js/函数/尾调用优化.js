// triditional fib
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  debugger;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fib(n) {
  if (!Number.isInteger(n)) {
    return `The n must be a integer!`;
  }
  return fibImpl(0, 1, n);
}
function fibImpl(a, b, n) {
  if (n === 0) {
    return a;
  }
  return fibImpl(b, a + b, --n);
}

console.time('a');
console.log('Calculate first 40 fibonacci numbers: ', fibonacci(40));
console.timeEnd('a');

console.time('b');
console.log('Calculate first 40 fibonacci numbers: ', fib(40));
console.timeEnd('b');
