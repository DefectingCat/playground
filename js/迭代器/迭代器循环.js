const arr = [1, 2, 3, 'x', 'f', 'y'];

// for (const i of arr) {
//   console.log(i);
// }

const it = arr[Symbol.iterator]();

for (let res; (res = it.next()) && !res.done; ) {
  console.log(res.value);
}
