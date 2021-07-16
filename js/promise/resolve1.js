const p3 = new Promise((resolve) => {
  resolve(42);
});

const p1 = Promise.resolve(p3);

console.log(p1 === p3); // true
