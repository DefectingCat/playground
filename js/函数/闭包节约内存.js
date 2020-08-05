function add3(num) {
    return function () {
        return num + 3;
    }
}
let add = add3(3);
let result = add();
add = null;
console.log(add);