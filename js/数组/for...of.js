let obj = {
    from: 1,
    to: 5
}

for (let num of obj) {
    console.log(num);
}

let arr = [1, 2, 3, 4, 5];

for (let num of arr) {
    console.log(num);
}

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let i in arr) {
    console.log(arr[i]);
}

arr.forEach(element => {
    console.log(element);
});

// 缺点 ////////////////////////////////////////////

Array.prototype.arrTest = function test() {};

Object.defineProperty(Array.prototype, 'push', {
    enumerable: true
})

let arr = [1, 2, 3, 4, 5];

for (let i in arr) {
    console.log(arr[i]);
};

// 
let obj = {
    start: 1,
    end: 5
}

obj[Symbol.iterator] = function () {
    return {
        cur: this.start,
        las: this.end,
        next() {
            if (this.cur <= this.las) {
                return {
                    value: this.cur++,
                    done: false
                };
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

for (let num of obj) {
    console.log(num);
}

// 迭代器 //////////////////////////
let obj = {
    start: 1,
    end: 5
};

// for..of 调用首先会调用这个：
obj[Symbol.iterator] = function () {
    return {
           // 这个function还是属于obj，所以this指向obj。
        //接下来，for..of 仅与此迭代器一起工作，要求它提供下一个值
        current: this.start,
        last: this.end,
        // next() 在 for..of 的每一轮循环迭代中被调用
        // 所以通常next都带有一个判断语句
        next() {
            // Symbol.iterator返回的是一个对象，this不会多级指向，所以这里用到了刚刚定义的属性
            if (this.current <= this.last) {
                return {
                    value: this.current++,
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }       
    }
};

for (let num of obj) {
    console.log(num);
};

let str = '𝒳😂𩷶';
function aSlice(arr, star, end) {
    return Array.from(arr).slice(star, end).join('');
}