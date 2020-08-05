let obj = {
    name: 'xfy',
    age: 18,
    sex: 'female',
    num: 133,
    __proto__: {
        test: 'woshixiaofeiyang'
    }
}
// for (let prop in obj) {
//     if(obj.hasOwnProperty(prop)) continue;
//     //     console.log(obj[prop]);
//     // }
//     console.log(obj[prop]);
// }
console.log('age' in obj);