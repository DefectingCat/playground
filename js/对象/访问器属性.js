let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
let xbox = {
    _name: 'xbox ',
    _year: 2020,
    edition: arr[1],
    name: function () {
        return this._name + this.edition;
    }
}
console.log(xbox.name());
Object.defineProperty(xbox, 'year', {
    get: function () {
        // 返回对象方法访问的属性
        return this._year;
    },
    set: function (value) {
        // 值不小于2020且不大于2030（因为数组就10个🤣）
        if (!(value < 2020) && !(value > 2030)) {
            // 根据值判断版本，并在数组取值
            this.edition = arr[value - this._year + 1];
            // 将属性访问的方法同时也设置
            this._year = value;
        }
    }
})
xbox.year = 2021;
console.log(xbox.year);
console.log(xbox.name());

// PlayStation？
let ps = {
    _name: 'PlayStation ',
    _year: 2020,
    edition: 4,
    name: function () {
        return this._name + this.edition;
    }
}
Object.defineProperty(ps, 'year', {
    get: function () {
        // 返回对象方法访问的属性
        return this._year;
    },
    set: function (value) {
        // 值不小于2020且不大于2030（xbox也10个🤣）
        if (!(value < 2020) && !(value > 2030)) {
            // 根据值判断版本，并加上基础版本：4
            this.edition = value - this._year + 4;
            // 将属性访问的方法同时也设置
            this._year = value;
        }
    }
})
ps.year = 2021
console.log(ps.name());

// 同时定义多个属性
let ps = {};
Object.defineProperties(ps, {
    _name: {
        value: 'PlayStation',
        writable: true,
        configurable: true
    },
    _year: {
        value: 2020,
        writable: true,
        configurable: true
    },
    edition: {
        value: 4,
        writable: true,
        configurable: true
    },
    name: {
        value: function () {
            return this._name + ' ' + this.edition;
        },
        writable: true,
        configurable: true
    },
    year: {
        get: function () {
            return this._year;
        },
        set: function (value) {
            if (!(value < 2020) && !(value > 2030)) {
                this.edition = value - this._year + 4;
                this._year = value;
            }
        }
    }
})

Object.getOwnPropertyDescriptor(ps, 'year');
// 输出：
// configurable: false
// enumerable: false
// get: function get()
// set: function set(value)
// <prototype>: Object { … }