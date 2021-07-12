console.log('A');

setTimeout(() => {
  console.log('B');
}, 0);

process.nextTick(() => {
  console.log('C');
});

setImmediate(() => {
  console.log('D');
});

setTimeout(() => {
  console.log('E');
}, 0);

Promise.resolve('F').then((val) => {
  console.log(val);
});
