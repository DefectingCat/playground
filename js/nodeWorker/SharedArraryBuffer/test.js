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

  const worker = new Worker(__filename, { workerData: view });

  worker.on('online', () => {
    console.log(view[0]);

    worker.on('message', () => {
      console.log(view[0]);
    });
  });
} else {
  console.log('child pid: ', process.ppid);

  let view = workerData;

  for (let i = 0; i <= 1e5; i++) view[0]++;
  console.log(view);

  parentPort.postMessage(null);
}
