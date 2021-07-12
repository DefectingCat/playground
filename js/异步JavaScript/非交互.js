const res = {};

const foo = (result) => {
  res.foo = result;
};

const bar = (result) => {
  res.bar = result;
};

ajax('url.1', foo);
ajax('url.2', bar);
