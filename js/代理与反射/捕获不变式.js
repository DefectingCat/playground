const target = {};

Object.defineProperty(target, 'foo', {
  configurable: false,
  writable: false,
  value: 'bar',
});

const handler = {
  get() {
    return 'bazzz';
  },
};

const proxyObj = new Proxy(target, handler);
