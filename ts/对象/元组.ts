const tuple1 = [1, 'xfy'];
const tuple2 = [1, 'xfy'] as const;
const xfy: [number, string] = [1, 'xfy'];

const tuple = <T extends unknown[]>(...ts: T): T => {
  return ts;
};
const myTuple = tuple(1, 'xfy');
