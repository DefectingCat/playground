const worker = new Worker('./worker.js');

const shared = new SharedArrayBuffer(1);

const view = new Int8Array(shared);

view[0] = 1;

worker.addEventListener('message', () => {
  console.log(`buffer value after woker modification : ${view[0]}`);
});

worker.postMessage(shared);
