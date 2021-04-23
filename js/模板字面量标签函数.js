const a = 1;
const b = 2;

function simpleTag(strs, ...expressions) {
  console.log(strs);
  expressions.map((e, i) => {
    console.log(`${e}${strs[i + 1]}`);
  });
  // expressions
}
simpleTag`${a} + ${b} = ${a + b}`;

function foo(a) {
  var b = a;
  return a + b;
}
var c = foo(2);
