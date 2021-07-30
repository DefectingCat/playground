class ParentA {
  constructor() {
    this.id = 'a';
  }
  foo() {
    console.log('Parent A: ', this.id);
  }
}

class ParentB {
  constructor() {
    this.id = 'b';
  }
  foo() {
    console.log('Parent B: ', this.id);
  }
}

class ChildA extends ParentA {
  foo() {
    super.foo();
    console.log('Child A: ', this.id);
  }
}

class ChildB extends ParentB {
  foo() {
    /**
     * super 不会随着 this 的改变，
     * 而改变所调用的父类
     *
     * 这里本质上与 ParentB.prototype.foo.call(this); 同理
     * 实例使用 call 来借用 foo 时，只改变了 this
     */
    super.foo();
    console.log('Child B: ', this.id);
  }
}

const a = new ChildA();
const b = new ChildB();

a.foo();
b.foo();
b.foo.call(a);
