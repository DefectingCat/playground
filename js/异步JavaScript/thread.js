let a = 20;

const foo = () => {
  a += 1;
};

const bar = () => {
  a *= 2;
};

ajax('url.1', foo);
ajax('url.2', bar);
