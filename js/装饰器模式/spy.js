function work(x, y) {
  console.log(x, y);
}

function spy(fn) {
  function ret() {
    ret.calls.push(`calls:${[].join.call(arguments)}`);
    fn.apply(this, arguments);
  }
  ret.calls = [];

  return ret;
}

work = spy(work); 

work(1, 2);
work(3, 4);
console.log(work.calls);
