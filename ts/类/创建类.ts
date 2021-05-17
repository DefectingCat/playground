class Person {
  constructor(public name: string, public age: number) {}
}

const xfy = new Person('xfy', 18);
console.log(xfy);

class alotherPerson extends Person {
  protected static country: number;
  constructor(
    name: string,
    age: number,
    public sex: string,
    private nickname: string
  ) {
    super(name, age);
  }
}
const dfy = new alotherPerson('dfy', 18, 'female', 'xfy');
console.log(dfy);
