// 有 许多 实用 工具 库 给 Object. prototype 添加 了 新的 方法 或 属性， 这些 方法 和 属性 可以 被 所有 对象 继承 并使 用。 然而 在 ECMAScript 5 标准 之前， 这些 新 添加 的 方法 是 不能 定义 为 不可枚举 的， 因此 它们 都可 以在 for/ in 循环 中 枚举 出来。 为了 避免 这种 情况， 需要 过滤 for/ in 循环 返回 的 属性
let x, obj = {
    a: 1,
    b: 2,
    c: 3,
    f: function () {
        alert('xfy');
    }
}
for (x in obj) {
    if (!obj.hasOwnProperty(x)) continue;
    if (typeof obj[x] === "function") continue;
    console.log(obj[x]);
}