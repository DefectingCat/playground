type A = number;
type B = A | string;

// interface Animal {
//   good(x: string): string;
// }
// interface Dog extends Animal {
//   good(x: number): void;
// }

// type C = {
//   (x: string): string;
// };
// type D = C & {
//   (x: number): string;
// };

// const ef: D = (x) => {
//   console.log(x);
//   return 'xfy';
// };
// ef('123');

interface Animal {
  eat(food: string): void;
  sleep(hours: number): void;
}

class Cat implements Animal {
  constructor(public name: string) {}
  eat(food: string) {
    console.log(`eating ${food}`);
  }
  sleep(hours: number) {
    console.log(`slept for ${hours} hours`);
  }
}
const myCat = new Cat('xfy');
myCat.sleep(10);
