"use strict";
/*
 * 可迭代的类
 */
class NumberRange {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    has(num) {
        if (typeof num === 'number') {
            return this.from <= num && num <= this.to;
        }
        else {
            return 'only int number.';
        }
    }
    [Symbol.iterator]() {
        let start = Math.ceil(this.from);
        return {
            next: () => {
                return start <= this.to ? { value: start++ } : { done: true };
            },
        };
    }
}
const myNumber = new NumberRange(10, 30);
console.log(myNumber.has(11));
for (const i of myNumber) {
    console.log(i);
}
console.log([...myNumber]);
