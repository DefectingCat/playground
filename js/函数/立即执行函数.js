(function (a, b ,c){
    console.log(a + b - c + a * 2);
}(1, 2, 3))

let re = (function (a, b) {
    let d = a + b;
    return d;
}(1, 2))

(function (){}())
(function (){})()

// function test() {
//     let a = 'xfy';
// }()

// let xfy = function () {
//     console.log('xfy');
// }();

// + function t() {
//     console.log('a');
// }();

function t(a, b) {
    console.log(a + b);
    
}(1, 2);