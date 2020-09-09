let xfy = 'xf';
setInterval(() => {
    xfy += 'y';
    console.log(xfy); 
}, 1000)

let xfy = 'fy';
setInterval(() => {
    xfy = 'x' + xfy;
    console.log(xfy); 
}, 500)

//////////////////////////////////////////////////////////////////

let xfy = 'fy';
let num = 0;
let max = 100;
let ID;
function xxfy() {
    xfy = 'x' + xfy;
    num ++;
    console.log(xfy);
    if (num == max) {
        clearInterval(ID);
        console.log('--- xfy! ----');
    }
}

ID = setInterval(xxfy, 100);

//////////////////////////////////////////////////////////////////

let xfy = 'fy';
let num = 0;
let max = 5;
function xxfy() {
    xfy = 'x' + xfy;
    num ++;
    console.log(xfy);
    if (num < max) {
        setTimeout(xxfy, 500);
    } else {
        console.log('--- xfy! ----');
    }
}

setTimeout(xxfy, 500);