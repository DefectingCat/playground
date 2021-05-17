let obj = {
  get a() {
    return 123;
  },
};
Object.defineProperty(obj, 'b', {
  get: function () {
    return this.a * 2;
  },
});
console.log(obj.a);
console.log(obj.b);

let myObj = {
  get a() {
    return this._a_;
  },
  set a(val) {
    this._a_ = val * 3.14;
  },
};
myObj.a = 15;
console.log(myObj.a);
