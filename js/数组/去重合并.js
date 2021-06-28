let arr = [
  { name: 'zs', age: 15, happy: [{ hp1: '学习' }, { hp2: 'ea' }] },
  { name: 'ls', age: 15, happy: ['玩游戏'] },
  {
    name: 'zs',
    age: 15,
    happy: [{ hp1: '学习' }, { hp2: 'ubi' }, { hp3: 'valve' }],
  },
  {
    name: 'zs',
    age: 15,
    happy: [{ hp1: '学习' }, { hp2: 'ubi2' }, { hp3: 'valve' }],
  },
];

function test(arr) {
  let _obj = {};
  let _arr = [];
  let _test = [];
  let _num = 1;
  // 遍历整个数组
  arr.map((item) => {
    // 对象去重，如果当前对象已经有 name 作为 key 了
    // 即为有重复
    if (_obj[item.name]?.happy.length) {
      // 先将去重对象中已经保存的 happy 传递给 _test
      _obj[item.name].happy.map((item) => {
        // 这里只关心 happy 内的 value ，不关心 key
        _test = _test.concat(Object.values(item));
      });
      // 再将数组中的值和 _test 合并，并利用 set 去重
      item.happy.map(
        (item) =>
          (_test = Array.from(new Set(_test.concat(Object.values(item)))))
      );
      // 临时缓存数组
      let _toObj = [];
      // 遍历 _test 内的所有唯一的值，重新包装为 { hp0: 'xxx' } 的格式
      _test.map((item) => _toObj.push({ ['hp' + _num++]: item }));
      // 再保存到处理的对象中
      _obj[item.name].happy = _toObj;
      // 处理完了之后清空下 _test
      _test = [];
    } else {
      _obj[item.name] = item;
    }
  });
  _arr = Object.values(_obj);
  return _arr;
}

let arr2 = test(arr);
console.log(arr2);
