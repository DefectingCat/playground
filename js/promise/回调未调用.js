const timeoutPromise = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Timeout!');
    }, delay);
  });
};

const foo = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

Promise.race([foo(), timeoutPromise(100)])
  .then((val) => {
    console.log('foo done');
  })
  .catch((e) => {
    console.log(e);
  });
