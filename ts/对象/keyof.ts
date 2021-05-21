const Obj = {
  a: 1,
  name: 'xfy',
};

type PickOne = {
  // T 是一个对象，K 是 T 中的一个键
  <T extends object, K extends keyof T>(obj: T, key: K): T[K];
};

const pickOne: PickOne = (obj, key) => {
  return obj[key];
};

const t1 = pickOne(Obj, 'a');
