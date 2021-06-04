function testN(n) {
  if (n === 0) return n;
  return testN(--n);
}

console.log(testN(1));
