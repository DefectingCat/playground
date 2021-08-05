const test = () => {
  let a = 1;
  return () => {
    a++;
    console.log(a);
  };
};

const fn1 = test();
const fn2 = test();

console.log(fn1 === fn2);
