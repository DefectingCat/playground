console.log(location.href);
const worker = new Worker('./worker.js');

worker.postMessage('foo');
worker.postMessage('bar');
worker.postMessage('baz');
