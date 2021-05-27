const obj = {
  name: 'xfy',
};

const handler = {
  get(target, property, receiver) {
    let decoration = '';
    property === 'name' ? (decoration = '! yyds!') : void 0;
    return Reflect.get(...arguments) + decoration;
  },
};

const proxyObj = new Proxy(obj, handler);
