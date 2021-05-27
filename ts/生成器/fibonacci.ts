function* fibonacciSequences() {
  let x = 0,
    y = 1;
  for (;;) {
    yield y;
    [x, y] = [y, x + y];
  }
}

const fibonacci = (n: number) => {
  const arr = new Uint8Array(n + 1);
  let x = 0;
  for (const i of fibonacciSequences()) {
    arr[x++] = i;
    if (n-- <= 0) return arr;
  }
};

console.log(fibonacci(10));

function* take(n: number, iterable: IterableIterator<number>) {
  const it = iterable[Symbol.iterator]();
  while (n-- >= 0) {
    const next = it.next();
    if (next.done) return;
    yield next.value;
  }
}
console.log([...take(10, fibonacciSequences())]);