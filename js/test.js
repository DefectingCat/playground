function foo(x) {
  console.log(x);
}

function throttle(fn, ms) {
  let isThrottle = false,
    savedArgs,
    savedCont;

  function wrapper() {
    if (isThrottle) {
      savedArgs = arguments;
      savedCont = this;
      return;
    }

    fn.apply(this, arguments);
    isThrottle = true;

    setTimeout(() => {
      isThrottle = false;
      if (savedArgs) {
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
