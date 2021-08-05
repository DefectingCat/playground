// import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';
const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require('worker_threads');

if (isMainThread) {
  console.log('parent pid: ', process.pid);

  const shared = new ArrayBuffer(4);
  const view = new Uint32Array(shared);
  view[0] = 1;

  const workers = [];
  for (let i = 0; i < 3; i++) {
    workers.push(new Worker(__filename, { workerData: view }));
  }

  let count = 0;
  for (const worker of workers) {
    worker.addListener('message', () => {
      const len = workers.length;

      if (++count == len) console.log('Final buffer value is: ', view[0]);
    });
  }
} else {
  console.log('child pid: ', process.ppid);

  let view = workerData;

  for (let i = 0; i <= 1e5; i++) view[0]++;
  console.log(view);

  parentPort.postMessage(null);
}
