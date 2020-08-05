let pattern = /at/gi;
console.log(pattern);
let pattern2 = new RegExp("[bc]at","g");
console.log(pattern2);
let pattern3 = new RegExp("\\[bc\\]at","g");
console.log(pattern3);

console.log("\n");

let re = null,
    i;

for (i = 0; i < 10; i++) {
    re = /cat/g;
    re.test('catastrophe');
}

for (i = 0; i < 10; i++) {
    re = new RegExp("cat","g");
    re.test('catastrophe')
}

console.log(pattern.global);
console.log(pattern.ignoreCase);
console.log(pattern.multiline);
console.log(pattern.lastIndex);
console.log(pattern.source);

let text = '123-00-12345';
let pattern4 = /\d{3}-\d{2}-\d{4}/;
if (pattern4.test(text)) {
    console.log('all matched');
}