function foo(x) {
  console.log(x);
}

function debounce(fn, ms) {
  let timer = null;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, ms);
  };
}

foo = debounce(foo, 1000);

foo(1);
foo(1);
foo(1);