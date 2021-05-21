function isString(str: unknown): str is string {
  return typeof str === 'string';
}
console.log(isString('123')); // true
console.log(isString(123)); // false

function parseInput(input: string | number) {
  if (isString(input)) {
    input.toUpperCase(); // worked!
  }
}
