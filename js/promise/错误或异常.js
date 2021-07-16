const p1 = new Promise((resolve) => {
  resolve(42);
});

p1.then((val) => {
  foo.bar();
  console.log(val);
})
  .catch((err) => {
    console.log('Catch in catch');
    console.log(err);
  })
  .finally(() => {
    cleanFunc();
  });
