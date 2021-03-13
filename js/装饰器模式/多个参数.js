let worker = {
  slow(x, y, z) {
    return x * y + z;
  },
};

function cachingDcorator(fn, hash) {
  let map = new Map();
  return function () {
    let key = hash(arguments);
    if (map.has(key)) {
      return map.get(key);
    }

    let res = fn.apply(this, arguments);
    map.set(key, res);
    return res;
  };
}

function hash(args) {
  return [].join.call(args);
}

worker.slow = cachingDcorator(worker.slow, hash);

console.log(worker.slow(1, 2, 3));
