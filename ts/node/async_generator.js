"use strict";
class Clock {
    constructor(ms, max) {
        this.ms = ms;
        this.max = max;
        this.num = 0;
    }
    wait() {
        return new Promise((resolve) => setTimeout(resolve, this.ms));
    }
    [Symbol.asyncIterator]() {
        return {
            next: async () => {
                await this.wait();
                if (this.num++ < this.max) {
                    return { value: this.num, done: false };
                }
                else {
                    return { value: this.num, done: true };
                }
            },
        };
    }
}
const test = new Clock(300, 10);
(async function () {
    for await (const i of test) {
        console.log(i);
    }
})();
