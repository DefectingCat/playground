"use strict";
function* fibonacciSquence() {
    let x = 0, y = 1;
    for (;;) {
        yield y;
        [x, y] = [y, x + y];
    }
}
const fibonacci = (n) => {
    const arr = new Uint8Array(n + 1);
    let x = 0;
    for (const i of fibonacciSquence()) {
        arr[x++] = i;
        if (n-- <= 0)
            return arr;
    }
    console.log(arr.length);
};
console.log(fibonacci(10));
function* take(n, iterable) {
    const it = iterable[Symbol.iterator]();
    while (n-- >= 0) {
        const next = it.next();
        if (next.done)
            return;
        yield next.value;
    }
}
// console.log([...take(10, fibonacciSquence())]);
