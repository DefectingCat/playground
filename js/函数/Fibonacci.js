// 三个月后的Fibonacci
function fibo(num) {
    let count = 0;
    let result = [1, 1];
    if (num <= 1) {
        return result;
    }
    let n = num - 2;
    for (let i = 0; i < n; i++) {
        result.push(result[count] + result[count + 1]);
        count++;
    }
    return result;
    // let rs = result.reduce((a, b) => a + b);
    // return rs;
}
let test = fibo(5);
console.log(test);

function fibo(n) {
    let count = 0;
    let result = [1, 1];
    if (n < 3) {
        result.push(2);
        return result;
    } else {
        for (let i = 3; i <= n; i++) {
            result.push(result[count] + result[count + 1]);     // 前一位加上后一位；
            count++
        }
    }
    count = 0;
    return result;
}
// console.log(fibo(10));

function fibo2(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fibo2(n - 1) + fibo2(n - 2);
    }
}

// 求和
function fibo3(n) {
    let count = 0;
    let result = [1, 1];
    let s = 0;
    if (n < 3) {
        result.push(2);
        return result;
    } else {
        for (let i = 3; i <= n; i++) {
            result.push(result[count] + result[count + 1]);     // 前一位加上后一位；
            count++
        }
    }
    count = 0;
    s = result.reduce((a,b) => a + b);
    return s;
}
// console.log(fibo3(10));

function fibo4(n) {
    let count = 0;
    let result = [1, 1];
    let s = 0;
    if (n < 3) {
        result.push(2);
        return result;
    } else {
        for (let i = 3; i <= n; i++) {
            result.push(result[count] + result[count + 1]);     // 前一位加上后一位；
            count++
        }
    }
    count = 0;
    s = result.reduce((a,b) => b);
    return s;
}
console.log(fibo4(10));