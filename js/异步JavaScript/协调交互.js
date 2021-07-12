let a, b;

const foo = (x) => {
  a = x * 2;
  if (a && b) {
    baz();
  }
};

const bar = (y) => {
  b = y * 2;
  if (a && b) {
    baz();
  }
};

const baz = () => {
  console.log(a + b);
};

ajax('url.1', foo);
ajax('url.2', bar);
