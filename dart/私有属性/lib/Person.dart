class Person {
  String name = '';
  int _age = 0;

  Person(this.name, this._age);
  sayAge() {
    print(this._age);
  }

  get age {
    return this._age;
  }
}

class Web extends Person {
  String sex;
  Web(String name, int age, this.sex) : super(name, age);

  @override
  sayAge() {
    super.sayAge();
  }
}
