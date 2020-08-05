let data = [
    {
        name: 'xfy',
        age: 18
    },
    {
        name: 'dfy',
        age: 81
    }
]
function com(propertyName) {
    return function (object1,object2) {
        let value1 = object1[propertyName];
        let value2 = object2[propertyName];
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    }
}
console.log(data.sort(com('name')));