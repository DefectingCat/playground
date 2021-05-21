class Person<T, U> {
  constructor(public name: string) {}
  say(something: T) {
    console.log(something);
    return something;
  }
  do(something: U) {
    return something;
  }
}
const person = new Person('test');
person.say('test');
