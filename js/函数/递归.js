function add(num) {
    if (num <= 1) {
        return 1;
    }
    return num + arguments.callee(num - 1);
}

let minus = add;
add = null;
console.log(minus(5));

//////////////////////////////////

let add = (function a(num) {
    if (num <= 1) {
        return 1;
    }
    return num + a(num - 1);
})