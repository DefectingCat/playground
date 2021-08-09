abstract class Animal {
  eat();
  printInfo() {
    print("Here is class Animal");
  }
}

class Dog extends Animal {
  @override
  eat() {
    print('Eating');
  }
}

class Cat implements Animal {
  @override
  eat() {
    print('Cat eating');
  }

  @override
  printInfo() {
    print('Here is class Cat');
  }
}

class Bird with Animal, Cat {}

void main() {
  var d = new Dog();
  d.eat();
  d.printInfo();

  var c = new Cat();
  c.eat();
  c.printInfo();

  var b = new Bird();
  b.eat();
  b.printInfo();
}
