function ran(min,max) {
    Math.ceil(min);
    Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let x = Math.floor(Math.random() * 256);
console.log(x);
