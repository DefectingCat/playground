"use strict";
class NumberRange {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++)
            yield x;
    }
}
console.log([...new NumberRange(1, 10)]);
