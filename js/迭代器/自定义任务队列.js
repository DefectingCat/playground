const task = {
  action: [], // 用于保存任务队列

  [Symbol.iterator]() {
    const step = this.action.slice(); // 复制一份任务队列副本

    return {
      /**
       * 每次从任务队列中取出一个任务进行执行
       * 并直接传递剩余参数到任务中
       * 返回值会被直接作为迭代器的 value 返回
       * @param  {...any} args
       * @returns 可能是这样：{ value: 20, done: false }
       */
      next(...args) {
        if (step.length > 0) {
          const res = step.shift()(...args);
          return { value: res, done: false };
        } else {
          return { done: true };
        }
      },

      return(v) {
        step.length = 0;
        return { value: v, done: true };
      },
    };
  },
};

task.action.push(
  function step1(a) {
    console.log(a);
    return a * 2;
  },
  function step2(a, b) {
    console.log(a, b);
    return a + b * 42;
  },
  function step3(a, b, c) {
    console.log(a, b, c);
    return ((a + 1) * (b + Math.PI)) / c;
  }
);

const it = task[Symbol.iterator]();

console.log(it.next(10)); // { value: 20, done: false }
console.log(it.next(38, 22)); // { value: 962, done: false }
console.log(it.next(42, 4, 2)); // { value: 153.54424205218055, done: false }
console.log(it.next());
