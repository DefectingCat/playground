type Debounce = {
  <T extends unknown[]>(fn: (...arg: T) => void | unknown, ms: number): (
    this: unknown,
    ...arg: T
  ) => void | unknown;
};

const debounce: Debounce = (fn, ms) => {
  let timer = 0;
  return function (...arg) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arg);
    }, ms);
  };
};

function test66(msg: string) {
  console.log(msg);
}
const test67 = debounce(test66, 100);
test67('xfy');
test67('xfy');
test67('xfy');
setTimeout(() => {
  test67('xfy');
}, 100);
setTimeout(() => {
  test67('xfy');
}, 200);
setTimeout(() => {
  test67('xfy');
}, 300);
setTimeout(() => {
  test67('xfy');
}, 400);
setTimeout(() => {
  test67('xfy');
}, 500);
