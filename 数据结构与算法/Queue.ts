class Queue<T> {
  constructor(public items: T[] = []) {}

  enqueue(item: T) {
    return this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
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

export default {};
