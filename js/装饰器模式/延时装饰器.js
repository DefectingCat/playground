function foo(x) {
  console.log(x);
}

function delayRun(fn, ms) {
  return function() {
    setTimeout(() => {
      fn.apply(this, arguments);
    }, ms);
  }
}

foo = delayRun(foo, 500);

foo('xfy');