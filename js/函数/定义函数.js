// 函数声明
function test() {
    console.log('Hi, there');
}

// 函数表达式
let test = function () {
    console.log('Yo, there');
}

// 函数声明提升
test();
function test() {
    console.log('Hi, there');
}

// 
test();
let test = function () {
    console.log('something...');
}

if (1) {
    function hi() {
        console.log('hi');
    }
} else {
    function hi() {
        console.log('yo');
    }
}

////////////////////////////////////////////////////

let hi;
if (1) {
    hi = function () {
        console.log('hi');
    }
} else {
    hi = function () {
        console.log('yo');
    }
}