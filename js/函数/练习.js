let singleton = function () {

    // 定义私有变量和函数
    let pv = 10;
    function prif() {
        return '嘤嘤嘤';
    }

    // 创建特例对象
    let obj = Object.create(someobj); // new SomeType();

    //添加公有属性和方法
    obj.pubv = function () {
        return true;
    }
    obj.pubf = function () {
        pv++;
        return pv;
    }

    // 返回这个对象
    return obj;
}();