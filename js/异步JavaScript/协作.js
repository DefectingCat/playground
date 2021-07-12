const res = [];

const response = (data) => {
  const chunk = data.splice(0, 1000);

  res = res.concat(chunk.map((item) => item * 3.14));

  if (data.length > 0) {
    setTimeout(() => {
      response(data);
    }, 0);
  }
};

ajax('url.1', response);
ajax('url.2', response);
