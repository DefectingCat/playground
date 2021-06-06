function changeValue(value) {
  value = [1, 2];
  console.log('in function:', value);
}

let t = [1, 2, 3, 4];
changeValue(t);
console.log(t);
