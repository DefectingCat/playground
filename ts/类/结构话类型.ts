class Cat {
  sleep(hours: number) {}
}
class Dog {
  sleep(hours: number) {}
}
const checkCat = (animal: Cat) => {
  animal.sleep(10);
};

/* 这里传入狗狗也是可以的 */
checkCat(new Dog());

class G {}
// 声明值的同时也声明了类型
let g: G = new G();

enum H {
  J,
  K,
}
let h: H = H.J;
