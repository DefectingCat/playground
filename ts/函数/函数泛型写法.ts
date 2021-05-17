type Filter = {
  <T>(arr: T[], fn: (item: T) => boolean): T[];
};
const filter: Filter = (arr, fn); // ...

type Filter<T> = {
  (arr: T[], fn: (item: T) => boolean): T[];
};
const filter: Filter<number> = (arr, fn); // ...

type Filter = <T>(arr: T[], fn: (item: T) => boolean) => T[];
const filter: Filter = (arr, fn); // ...

type Filter<T> = (arr: T[], fn: (item: T) => boolean) => T[];
const filter: Filter<number> = (arr, fn); // ...
