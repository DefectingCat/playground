// global.name = 'xfy';
// // window.name = 'xfy';
// let obj = {
//     name: 'xfy1',
//     age: 18,
//     say: function () {
//         return function () {
//             console.log(this.name);
//         }
//     }
// }

// obj.say()();

global.name = 'xfy';
// window.name = 'xfy';
let obj = {
    name: 'xxxfy',
    age: 18,
    say: function () {
        let that = this;
        return function () {
            console.log(that.name);
        }
    }
}

obj.say()();