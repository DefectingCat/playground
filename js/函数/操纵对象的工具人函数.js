let o = {
    a: 1,
    b: 2,
    c: 3
},
    p = {
    d: 'x',
    e: 'f',
    f: 'y'
},
prop;

// 把p中可枚举的属性复制进o中，并返回o。覆盖同名属性
function extend(o, p) {
    for (prop in p) {    // 将p循环进o，所以遍历p
        o[prop] = p[prop];      // 此时的o[prop]应该是undefined，因为遍历的是p，且没有同名，所以长度与p相等。然后将p的属性与值赋值给o
    }
    return o;
}

let o = {
    a: 1,
    b: 2,
    c: 3
},
    p = {
    a: 'ww',
    d: 'x',
    e: 'f',
    f: 'y'
},
prop;
// 把p中可枚举的属性复制进o中，并返回o。不覆盖同名属性
function merge(o, p) {
    for (prop in p) {
        if (o.hasOwnProperty([prop])) continue;
        o[prop] = p[prop];
    }
    return o;
}

let o = {
    a: 1,
    b: 2,
    c: 3
},
    p = {
    a: 'ww',
    d: 'x',
    e: 'f',
    f: 'y',
    w: 3
},
prop;
// 如果o中没有和p同名的属性，则删除；
function restrict(o,p) {
    for (prop in o) {
        if (! (prop in p) )   delete o[prop];   // if (!p[prop])
    }
    return o;
}

let o = {
    a: 1,
    b: 2,
    c: 3
},
    p = {
    a: 'ww',
    d: 'x',
    e: 'f',
    f: 'y',
    w: 3
},
prop;
// 如果o中有和p同名的属性，则删除
function sub(o,p) {
    for (prop in p) {
        delete o[prop];
    }
    return o;
}