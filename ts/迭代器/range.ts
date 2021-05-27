/*
 * 可迭代的类
 */
class NumberRange {
  constructor(public from: number, public to: number) {}

  has(num: number) {
    if (typeof num === 'number') {
      return this.from <= num && num <= this.to;
    } else {
      return 'only int number.';
    }
  }

  [Symbol.iterator]() {
    let start = Math.ceil(this.from);

    return {
      next: () => {
        return start <= this.to
          ? { value: start++, done: false }
          : { value: start, done: true };
      },
    };
  }
}

const myNumber = new NumberRange(10, 20);
// console.log(myNumber.has(11));

// for (const i of myNumber) {
//   console.log(i);
// }

// console.log([...myNumber]);

/*
 * 利用迭代器实现的自定义 map 方法
 */
type MyMap = {
  (iterable: NumberRange, fn: (x: number) => number | string): IterableIterator<
    number | string
  >;
};
const map: MyMap = (iterable, fn) => {
  const iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      const v = iterator.next();
      if (v.done) {
        return v;
      } else {
        return { value: fn(v.value) };
      }
    },
  };
};
console.log([...map(myNumber, (x) => x * x)]);

/*
 * 利用迭代器实现的自定义 filter 方法
 */
type MyFilter = {
  (iterable: NumberRange, fn: (x: number) => boolean): IterableIterator<number>;
};
const filter: MyFilter = (iterable, fn) => {
  const iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      // 循环对所有数据进行检查
      for (;;) {
        const v = iterator.next();
        if (v.done || fn(v.value)) {
          return v;
        }
      }
    },
  };
};
console.log([...filter(myNumber, (x) => x > 15)]);
