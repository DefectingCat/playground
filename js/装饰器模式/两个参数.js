let worker = {
  slow(x, y) {
    return x + y;
  },
};

function cachingDcorator(fn, hash) {
  let map = new Map();
  return function () {
    let key = hash(arguments);
    if (map.has(key)) {
      return map.get(key);
    }

    let res = fn.call(this, ...arguments);
    map.set(key, res);
    return res;
  };
}

function hash(args) {
  return `${args[0]}${args[1]}`;
}

worker.slow = cachingDcorator(worker.slow, hash);
console.log(worker.slow(2, 3));
