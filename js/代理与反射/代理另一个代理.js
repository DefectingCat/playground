const target = {
  foo: 'bar',
};

const firstProxy = new Proxy(target, {
  get() {
    return Reflect.get(...arguments) + 'first proxy!';
  },
});

const secondProxy = new Proxy(firstProxy, {
  get() {
    return Reflect.get(...arguments) + 'second proxy!';
  },
});

console.log(firstProxy.foo);
console.log(secondProxy.foo);
