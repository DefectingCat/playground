const p = Promise.resolve('xfy');

p.then((val) => {
  console.log(val);
});

p.then((val) => {
  console.log(val);
  return Promise.resolve('dfy');
}).then((val) => {
  console.log(val);
});

p.then((val) => {
  console.log(val);
});
