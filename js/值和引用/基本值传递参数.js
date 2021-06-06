function changeValue(value) {
  // 按值传递，value 获取到 num 的值
  // 但是他们分别保存在两个内存中
  value++;
}

let num = 123;
changeValue(num);
console.log(num); // 123
