self.addEventListener('message', ({ data }) => {
  const view = new Int8Array(data);
  console.log(`buffer value before woker modification : ${view[0]}`);

  for (let i = 0; i < 100; i++) {
    view[0] += 1;
  }

  self.postMessage(null);
});
