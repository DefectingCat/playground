// 同步
'use strict'
console.log(Date.now().toString() + ': 主进程开始;');
console.log(Date.now().toString() + ': 创造一个延迟;');
let start = Date.now();
let end = start;
while(end < start + 2000) {
    end = Date.now();   // 阻塞延迟
}
console.log(Date.now().toString() + ': 主进程结束;');

// 异步
'use strict'
console.log(Date.now().toString() + ': 主进程开始;');
setTimeout(() => {
    console.log(Date.now().toString() + ': 事件循环回调');
}, 20);
console.log(Date.now().toString() + ': 主进程结束;');