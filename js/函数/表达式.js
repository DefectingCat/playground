let test = function abc() {
    return arguments;
}
console.log(test);
// console.log(abc);
console.log(test.name);

function name(a, b) {
    if (name.length > arguments.length) {
        console.log('形参更多！');
    } else {
        console.log('实参更多！');
    }
}
name(1);