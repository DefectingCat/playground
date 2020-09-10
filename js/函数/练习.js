// 匿名类
let Person = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(Person.name);   // Person

// 具名类
let Person = class Persona {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(Person.name);   // Persona