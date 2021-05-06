// type Filter = {
//   (arr: number[], fn: (item: number) => boolean): number[];
//   (arr: string[], fn: (item: string) => boolean): string[];
//   (arr: Object[], fn: (item: Object) => boolean): Object[];
// };

type Filter = {
  <T>(arr: T[], fn: (item: T) => boolean): T[];
};

const filter: Filter = (arr, fn) => {
  let result = [];
  for (const i of arr) {
    if (fn(i)) {
      result.push(i);
    }
  }
  return result;
};
