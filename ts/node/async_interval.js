"use strict";
// Promise 封装 setTimeout
function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
// 异步生成器
async function* clock(interval, max = Infinity) {
    for (let count = 1; count <= max; count++) {
        await wait(interval);
        yield count;
    }
}
(async function () {
    for await (const i of clock(300, 100)) {
        console.log(i);
    }
})();
