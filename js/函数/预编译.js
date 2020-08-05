function test(a) {
    console.log(a);
    var a = 123;
    // let a = 123;将会检测到a已经存在
    console.log(a);
    function a() {}
    console.log(a);
    let b = function() {}
    console.log(b);
}

function fo(a, b) {
    console.log(a);
    var a = 333;
    console.log(a);
    var a = function() {};
    console.log(a);
    console.log(b);
    var b = 444;
    console.log(b);
}

gl = 123;
function test() {
    console.log(gl);
    gl = 333;
    console.log(gl);
    let gl = 444;
}
// console.log(test());

let str = false + 1;
// console.log(str);
let de = false == 1;
// console.log(de);

console.log(-true);




