let obj = {
  a: 123,
};
// console.log('a' in obj);
// console.log('b' in obj);

// console.log(obj.hasOwnProperty('a'));
// console.log(obj.hasOwnProperty('b'));

let myObj = Object.create(obj);
// console.log('a' in myObj);

Object.defineProperty(obj, 'b', {
  enumerable: false,
  value: 456,
});

for (const i in obj) {
  console.log(i);
}

console.log(obj.propertyIsEnumerable('a'));
console.log(obj.propertyIsEnumerable('b'));

console.log(Object.keys(obj));

console.log(Object.getOwnPropertyNames(obj));
