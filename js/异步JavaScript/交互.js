const res = [];

const foo = (result) => {
  res.push(result);
};

ajax('url.1', foo);
ajax('url.2', bar);
