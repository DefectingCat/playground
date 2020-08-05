global.name = 222;  // 全局
let a = {
    name: 111,
    say: function () {
        console.log(this.name);
    }
};
a.say();    // 谁调用this就指向谁
let fun = a.say;    // a.say这个函数体被赋值给fun
fun();  // fun仅仅只是执行了a.say这个函数体，所以this指向window/global

let b = {
    name: 333,
    say: function (f) {
        // b.say: this --> b
        f();
    }
};
b.say(a.say);  // a.say这个函数体被当参数传入，所以也仅仅只是执行了函数体，和fun()同理
b.say = a.say;  // a.say这个函数体被传入b的属性
b.say()  // 所以b.say也只是执行a.say这个函数体，this指向b

let c = {
    name: 'xfy',
    say: function (fun) {
        fun();
    }
}
function test() {
    console.log(this);
}