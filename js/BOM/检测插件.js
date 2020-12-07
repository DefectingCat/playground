
function plus(name) {
    name = name.toLowerCase();
    for (let i of navigator.plugins) {
        let res = i.name.toLowerCase().includes(name);
        return res;
    }
}


// 这里使用了es6的`includes`方法，当然也可以使用es5的`indexOf`来实现


function plus(name) {
    name = name.toLowerCase();
    for (let i of navigator.plugins) {
        if (i.name.toLowerCase().indexOf(name) > -1) {
            return true;
        } else {
            return false;
        }
    }
}


// 使用字符查找的方法来确定其名称是否有指定字符时会有个小缺陷，例如需要查找`chrome pdf viewer`，在传入一个字母`c`的时候，就能够返回`true`，无法确定具体找到哪个插件。只有继续增加参数的长度才能确定，。

// 我这里根据上述函数稍稍修改了下，将匹配到的结果都由一个数组保存，最后返回整个数组，有点类似于搜索结果。


function plus(name) {
    name = name.toLowerCase();
    let out = [];
    for (let i of navigator.plugins) {
        let res = i.name.toLowerCase().includes(name);
        if (res) {
            out.push(i.name);
        }
    }
    return out;
}


// 这时的数组就会保存所有匹配到的字符：


plus('chrome')
(2) ["Chrome PDF Plugin", "Chrome PDF Viewer"]
