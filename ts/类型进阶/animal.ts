class Animal {}
class Cat extends Animal {
  miao() {}
}
class Lion extends Cat {
  wawu() {}
}

function miaomiao(cat: Cat) {
  cat.miao();
  return cat;
}

// 需要超类型的地方也可以使用子类型
miaomiao(new Animal());
miaomiao(new Cat());
miaomiao(new Lion());

// 回调函数 fn 为超类型
function clone(fn: (cat: Cat) => Cat): void {
  const parent = new Cat();
  const baby = fn(parent);
  baby.miao();
}

// catToLion 即是回调函数 fn 的子类型
// 满足返回值是其子类型
function catToLion(c: Cat): Lion {
  return new Lion();
}
clone(catToLion);

// catToAnimal 返回值是其超类型，所以无法调用
function catToAnimal(c: Cat): Animal {
  return new Animal();
}
clone(catToAnimal);

// animalToCat 即是回调函数 fn 的子类型
// 满足参数是其超类型
function animalToCat(a: Animal): Cat {
  return new Cat();
}
clone(animalToCat);

// animalToLion 参数是其子类型，所以无法调用
function animalToLion(l: Lion): Cat {
  return new Cat();
}
clone(animalToLion);

let a = 'xfy';
const b = 'xfy';

let c = { x: 123 } as const;
// d: { readonly x: 1; readonly y: { readonly z: 3; }; }
let d = { x: 1, y: { z: 3 } } as const;
