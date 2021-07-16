// const p3 = Promise.resolve('B');
// const p1 = Promise.resolve(p3);
// const p2 = Promise.resolve('A');

// p1.then((val) => {
//   console.log(val);
// });

// p2.then((val) => {
//   console.log(val);
// });

const p3 = new Promise((resolve) => {
  resolve('B');
});
const p1 = Promise.resolve(p3);
const p2 = new Promise((resolve) => {
  resolve('A');
});

p1.then((val) => {
  console.log(val);
});
p2.then((val) => {
  console.log(val);
});
