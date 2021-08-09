class Person {
  private _age = 0;

  static info = 'test';

  constructor(public name: string) {
    this.name = name;
    console.log(`Hello, world! My name is: ${this.name}`);
  }

  showInfo() {
    console.log(Person.info);
  }

  get age() {
    return this._age;
  }
  set age(val) {
    this._age = val;
  }
}

const p = new Person('xfy');
const p2 = new Person('2p');

p.age = 42;
console.log(p.name);
console.log(p2.showInfo());
