const test: Element = document.querySelector('#test');
const btn: Element = document.querySelector('#btn');
const btnClick = (e: MouseEvent) => {
  console.log(e.target);
  // 点击后移除按钮，大部分浏览器会同时移除事件监听器
  test.innerHTML = '123';
};
btn.addEventListener('click', btnClick as EventListener);
