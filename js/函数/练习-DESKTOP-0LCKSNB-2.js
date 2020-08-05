function SuperType(name, age) {
    this.name = name;
    this.age = age;
    this.arr = [1, 2, 3, 4, 5];
}

function Subtype(name, age) {
    SuperType.call(this, name, age);
}