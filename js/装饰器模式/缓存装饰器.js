function slow(ds) {
  // do something slowly
  return `${ds}`;
}

function cachingDcorator(fn) {
  // 创建一个 map 用于缓存
  let cache = new Map();
  // 返回一个闭包
  return function(ds) {
    // 检查缓存中是否有结果
    if (cache.has(ds)) {
      return cache.get(ds);
    }
    // 没有结果时，记录结果
    let res = fn(ds);
    cache.set(ds, res);
    return res;
  }
}

cacheSlow = cachingDcorator(slow);

console.log(cacheSlow('124'));