const target = {
  showThis() {
    console.log(this);
    console.log(this.foo);
    console.log(this === proxy);
  },
  foo: 'bar',
};

const proxy = new Proxy(target, {});
