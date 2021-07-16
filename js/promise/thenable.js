const p = {
  then(cb, ecb) {
    cb(42);
    ecb('evil laugh');
  },
};

p.then(
  (val) => {
    console.log(val);
  },
  (err) => {
    console.log(err);
  }
);

Promise.resolve(p).then(
  (val) => {
    console.log(val); // 42
  },
  (err) => {
    console.log(err); // 没有被执行！
  }
);
