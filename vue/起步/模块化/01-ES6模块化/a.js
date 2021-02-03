let xfy = '小肥羊';
let arr = [1, 2, 3, 5, 5, 67, 3, 3];
let obj = {
  key: 'value'
}
class Person {
  constructor(name) {
    this.name = name
  }
  run() {
    console.log('running!');
  }
}
class Student extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

export { xfy, arr, obj, Person, Student }