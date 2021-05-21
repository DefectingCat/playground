const bytes = new Uint8Array(512);

const countPrimes = function (n) {
  let count = 0;
  let signs = new Uint8Array(n);

  for (let i = 2; i <= n; i++) {
    if (!signs[i - 1]) {
      count++;

      for (let j = i * i; j <= n; j += i) {
        signs[j - 1] = true;
      }
    }
  }
  return count;
};
console.time('test');
console.log(countPrimes(999999));
console.timeEnd('test');
