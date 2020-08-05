function compare(prep) {
    return function (obj1, obj2) {
        let o1 = obj1[prep];
        let o2 = obj2[prep];
        if (obj1[prep] < obj2[prep]) {
            return -1;
        } else if (obj1[prep] > obj2[prep]) {
            return 1;
        } else {
            return 0
        }
    }
}

let arr = [{
    name: 'xfy',
    age: 128
}, {
    name: 'dfy',
    age: 118
}]

arr.sort(compare(name));
