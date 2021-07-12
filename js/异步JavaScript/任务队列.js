Promise.resolve('B').then((val) => {
  console.log(val);
});

const a = () => {
  console.log('A');
};

const c = () => {
  console.log('C');
};

const d = () => {
  console.log('D');
};

setTimeout(() => {
  d();
}, 0);

a();
c();
