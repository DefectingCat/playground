type Call = {
  <T extends string[], R>(
    fn: (length: number, ...arg: T) => R,
    length: number,
    ...arg: T
  ): R;
};

const call: Call = (fn, length, ...arg) => {
  return fn(length, ...arg);
};

const fill = (length: number, val: string) => {
  return Array.from({ length }, () => val);
};

// console.log(call(fill, 10, 'xfy'));

// is asset
type Is = {
  <T>(...arg: T[]): boolean;
};
const is: Is = (...arg) => {
  const len = arg.length;
  let result = false;
  for (let i = 0; i < len; i++) {
    if (i + 1 < len) {
      if (arg[i] === arg[i + 1]) {
        result = true;
      } else {
        return false;
      }
    }
  }
  return result;
};

console.log(is(1, 1, 1, 1, 1));
