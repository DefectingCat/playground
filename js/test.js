function a(xx) {
  this.x = xx;
  return this;
}

const x = a(5);
const y = a(6);

console.log(x.x, y.x);
