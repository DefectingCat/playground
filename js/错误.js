//try 实例
let t = '';
function test() {
    try {
        allert('xfy');
    }
    catch (err) {
        t = '出现了意料之外的问题(*/ω＼*) \n';
        t += '描述：' + err + '\n';    // t += '描述：' + err.test + '\n';
        t += 'press enter to continue';
        alert(t);
    }
}