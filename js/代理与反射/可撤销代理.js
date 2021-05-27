const target = {
  foo: 'bar',
};

const handler = {
  get(target, property, recevier) {
    let decoration = '';
    property === 'foo' ? (decoration = '!!!') : void 0;
    return Reflect.get(...arguments) + decoration;
  },
};

const { proxy, revoke } = Proxy.revocable(target, handler);

console.log(proxy.foo);
console.log(target.foo);

revoke();

console.log(proxy.foo);
