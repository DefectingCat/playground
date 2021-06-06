function changeValue(value) {
  // 按引用传递，可以直接修改
  value.push(99);
  // 重新赋值，并没有修改内存中的值
  value = { name: 'xfy' };
}

let arr = [1, 2, 3];
changeValue(arr);
console.log(arr); // [ 1, 2, 3, 99 ]
