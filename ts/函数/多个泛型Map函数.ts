type MyMap = {
  <T, R>(arr: T[], fn: (item: T) => R): R[];
};

const myMap: MyMap = (arr, fn) => {
  let result = [];
  for (const i of arr) {
    result.push(fn(i));
  }
  return result;
};

const arr = [1, 2, 3, 4];

myMap(arr, (item) => item * 2);
