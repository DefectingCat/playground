class NumberRange {
  constructor(public from: number, public to: number) {}

  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }
}

console.log([...new NumberRange(1, 10)]);
