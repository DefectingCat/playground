// function test(arg1,arg2) {
//     return arg1 + arg2;
// }
// console.log(test.length);

function fruits() {};

fruits.prototype = {
    color: 'red',
    say: function() {
        console.log('the color is : ' + this.color);
    }
}
let apple = new fruits();
console.log(apple);
console.log(apple.say());

let banana = {
    color: 'yellow'
}
console.log(apple.say.apply(banana));

window.color = 'red';
let o = {
    color: 'blue'
};
function sayColor() {
    return this.color;
}

let sayAnotherColor = sayColor.bind(o);
