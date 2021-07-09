// 事件循环队列，先进先出
const eventLoop = [];
let event;

// while 相当于执行代码
while (true) {
  // 每拿出一个事件进行执行，都是一次 tick
  if (eventLoop.length > 0) {
    // 拿到事件队列中的下个事件
    event = eventLoop.shift();
    // 执行下一个事件
    try {
      event();
    } catch (e) {
      reportError(e);
    }
  }
}
