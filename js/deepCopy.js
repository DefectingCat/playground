let obj = {
    a: "xfy",
    b: {
        c: "test",
    },
    d: 123,
    e: [1, 2, 3, 4, 5],
    f: {
        g: 'array',
        h: [1, 2, 3, 4, 5, 6, {
            i: '嘤嘤嘤'
        }]
    }
};
let test = {};

function deepCopy(origin, target) {
    target = target || {};

    let sw = {
        Object: "[object Object]",
        Array: "[object Array]",
        Function: "[object Function]",
    };

    for (let i in origin) {
        let detect = Object.prototype.toString.call(origin[i]);
        if (detect === sw.Object) {
            target[i] = {};
            deepCopy(origin[i], target[i]);
        } else if (detect === sw.Array) {
            target[i] = [];
            deepCopy(origin[i], target[i]);
        } else if (detect === sw.Function) {
            target[i] = function() {};
            deepCopy(origin[i], target[i]);
        } else {
            target[i] = origin[i];
        }
    }
}

deepCopy(obj, test);
