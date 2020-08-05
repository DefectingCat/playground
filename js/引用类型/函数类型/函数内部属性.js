function test(num) {
    if (num <= 1) {
        return 1;
    }
    return num + test(num - 1);
}
console.log(test(100));

let test2 = test;
test = function() {
    return 1;
}
console.log(test2(100));    // test2不能完成回调，因为函数中还是test(num -1)
console.log(test(100));

console.log("\n")

function cb(num) {
    if (num <= 1) {
        return 1;
    }
    return num + arguments.callee(num - 1);
}
console.log(cb(100));
let cb2 = cb;       // 指针交换
cb = function() {
    return 0;
}
console.log(cb2(100));
console.log(cb(100));

function outer() {
    return inner();
}
function inner() {
    return inner.caller;
}
console.log(outer());

function outer() {
    return inner();
}
function inner() {
    return arguments.callee.caller;
}