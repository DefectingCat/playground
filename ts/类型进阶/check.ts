type Option = {
  baseUrl: string;
  cacheSize?: number;
};

class API {
  constructor(option: Option) {}
}

new API({
  baseUrl: 'https://xfy.plus',
  cacheSizee: 123,
});

let option = {
  baseUrl: 'https://xfy.plus',
  cacheSizee: 123,
};
new API(option);
