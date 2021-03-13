function foo(x) {
  console.log(x);
}

function throttle(fn, ms) {
  // 初始状态为不节流
  let isThrottle = false,
    savedArgs,
    savedCont;

  function wrapper() {
    // 如果节流是打开的，则保存当前运行的上下文和参数
    if (isThrottle) {
      savedArgs = arguments;
      savedCont = this;
      return;
    }
    // 第一次直接运行原函数
    fn.apply(this, arguments);
    // 第一次运行完后打开节流
    isThrottle = true;

    setTimeout(() => {
      // 在节流时间后关闭节流阀
      isThrottle = false;
      if (savedArgs) {
        // 调用 wrapper 自身，并传递保存的上下文
        wrapper.apply(savedCont, savedArgs);
        savedArgs = savedCont = null;
      }
    }, ms);
  }
  return wrapper;
}

let f1000 = throttle(foo, 1000);

f1000(1);
f1000(2);
f1000(3);
f1000(4);
f1000(5);
f1000(6);
setTimeout(() => {
  f1000(7);
}, 500);
setTimeout(() => {
  f1000(8);
}, 1000);
setTimeout(() => {
  f1000(9);
}, 1520);
setTimeout(() => {
  f1000('a');
}, 2000);
setTimeout(() => {
  f1000('b');
}, 2500);
setTimeout(() => {
  f1000('c');
}, 3000);
