let counter = 0;
function increment() {
  return ++counter;
}

console.log(increment());
console.log(increment());

const newCounter = 0;
const plus1 = (counter: number) => {
  return counter + 1;
};

const myCounter1 = plus1(newCounter); // 1
const myCounter2 = plus1(newCounter); // 1

console.log(myCounter1, myCounter2);
