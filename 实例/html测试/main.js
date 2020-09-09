let oob = {};
oob.t1 = 1;
oob.t2 = "a";
console.log(oob);
let arr = [];
arr.push(oob);
console.log(arr);

let arr = []; //创建一个空数组
let q = [1,2,3,4]; 
let w = ['a','b','c','d'];
for (i=0; i<4; i++) {
    ob = {};
    ob.num = q[i];
    ob.name = w[i];
    arr.push(ob);
}
console.log(arr);

function cuu(a,b){
    return a * b
}
var cu = "";
for (i=1; i<=9; i++){
    cu += cuu(i,i);
}