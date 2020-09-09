let xfy = (() => {
    let name = 'xfy';
    let age = 18;
    let obj = {};
    Object.defineProperty(obj, 'test', {
        get: function () {
            return name + ' : ' + age;
        },
        set: function (value) {
            name = value;
            age++;
        }
    })
    return obj;
})();