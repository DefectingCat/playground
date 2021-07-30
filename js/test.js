let a = 0;
let b = 1;
let c = 0;

let n = 10;
while (n !== 0) {
  c = a;
  a = b;
  b = c + b;
  console.log(b);
  n--;
}
