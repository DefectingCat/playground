class Stack<T> {
  constructor(public items: T[] = []) {}

  push(item: T) {
    return this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }

  toString() {
    return this.items.join(' ');
  }

  reverse() {
    return this.items.reverse();
  }
}

const dec2bin = (decNum: number) => {
  const s = new Stack();

  while (decNum > 0) {
    s.push(decNum % 2);
    decNum = Math.floor(decNum / 2);
  }

  return s.reverse().join('');
};

console.log(dec2bin(255));
console.log(dec2bin(192));
console.log(dec2bin(168));
export default {};
