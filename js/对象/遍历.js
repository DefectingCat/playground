// let obj = {
//   start: 0,
//   end: 10,
//   [Symbol.iterator]() {
//     return {
//       next: () => {
//         return {
//           value: ++this.start,
//           done: this.start > this.end,
//         };
//       },
//     };
//   },
// };

// const it = obj[Symbol.iterator]();

// for (const i of obj) {
//   console.log(i);
// }

let obj = {
  start: 0,
  end: 10,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    return {
      value: ++this.start,
      done: this.start > this.end,
    };
  },
};
for (const i of obj) {
  console.log(i);
}
