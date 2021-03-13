let worker = {
  foo() {
    return '嘤嘤嘤';
  },
  slow(ds) {
    return `${ds} ${this.foo()}`;
  }
}

function cachingDcorator(fn) {
  let cache = new Map();

  return function(ds) {
    if (cache.has(ds)) {
      return cache.get(ds);
    }

    let res = fn(ds);
    cache.set(ds, res);
    return res;
  }
}

slow = cachingDcorator(worker.slow);

console.log(slow('xfy'));

// let func = worker.slow;
// func('xfy');
// console.log(func.call(worker, 'xfy'));