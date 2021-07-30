function ParentA() {
  this.id = 'a';
}
ParentA.prototype.foo = function () {
  console.log('Parent A: ', this.id);
};

function ParentB() {
  this.id = 'b';
}
ParentB.prototype.foo = function () {
  console.log('Parent B: ', this.id);
};

function inherit(sup, sub) {
  function F() {}
  Object.setPrototypeOf(F.prototype, sup.prototype);
  sub.prototype = new F();
  sub.prototype.constructor = sub;
  sub.prototype.uber = sup;
}

function ChildA() {
  ParentA.call(this);
}
inherit(ParentA, ChildA);

ChildA.prototype.foo = function () {
  ParentA.prototype.foo.call(this);
  console.log('Child A: ', this.id);
};

function ChildB() {
  ParentB.call(this);
}
inherit(ParentB, ChildB);
ChildB.prototype.foo = function () {
  ParentB.prototype.foo.call(this);
  console.log('Child B: ', this.id);
};

const a = new ChildA();
const b = new ChildB();

a.foo();
b.foo();
b.foo.call(a);
