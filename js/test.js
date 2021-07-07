const decorate = (oldClass) => {
  return class NewClass extends oldClass {
    sayName() {
      console.log(this.name);
    }
  };
};

@decorate
class Person {
  constructor(name) {
    this.name = name;
  }
}

const p = new Person('xfy');
