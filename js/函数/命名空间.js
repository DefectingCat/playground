// 旧方法
let org = {
    department1: {
        xfy: {
            name: 'xfy',
            age: 18
        }
    },
    department2: {
        dfy: {
            name: 'dfy',
            age: 81
        }
    }
}
let xfy = org.department1.xfy;
console.log(xfy.name);

// 新方法，闭包
let initXfy = (function () {
    let name = 'xfy',
        age = 18;
    function sayIt() {
        console.log('my name is' + name + 'and age is ' + age);
    }
    return function () {
        sayIt();
    }
}())

let xfy = {
    ps: function () {
        console.log('turn on the ps4');
        return this;
    },
    xbox: function () {
        console.log('turn off the xbox');
        return this;
    },
    nintendo: function () {
        console.log('but the nintendo');
        return this;
    }
}
xfy.ps().xbox().nintendo().ps().ps().ps().ps().xbox();