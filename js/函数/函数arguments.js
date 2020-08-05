function test(x) {
    console.log('x = ' + x);
    for (let i = 0; i < arguments.length; i++) {
        console.log('arg' + i + ' = ' + arguments[i]);
    }
}

function rest(a, b) {
    let i, rest = [];
    if (arguments.length > 2) {
        for (i = 2; i < arguments.length; i++) {
            rest.push(arguments[i]);
        }
    }
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

function rest(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

// 默认值
function test(r, pi) {
    if (arguments[1] == undefined) {
        let s = 3.14 * (r * r);
        return s;
    } else {
        console.log(pi,r)
        s = pi * (r * r);
        return s;
    }
}

// 遍历求和
function sum(...rest) {
    let x, y = 0;
    for (x in rest) {
        y += rest[x];
    }
    return y;
}

function test(a, b) {
    a = 1;
    console.log(arguments[0]);
    // 形参与实参有映射关系，当实参传入形参的名称时，arguments与其相对应。二者都会同时变化。
}
test(123123);

function test2(a, b) {
    b = 11;
    console.log(arguments[1]);
    // 未传入的那个实参将不会与arguments想映射。二者不会同时变化。
}
test2(123123);